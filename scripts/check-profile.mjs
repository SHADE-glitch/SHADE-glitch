#!/usr/bin/env node
/**
 * check-profile.mjs — guards the GitHub profile README (`SHADE-glitch/SHADE-glitch`).
 *
 * The repo ships a single file and has no CI, so a dead link or a half-edited README ships
 * silently to the front page. This is the one command that catches it first. Three checks:
 *
 *   1. structure — both HTML anchors (`<a id="en">`, `<a id="zh">`) and both switchers exist,
 *      so the page stays navigable and the two language halves stay delimited.
 *   2. mirror    — every `github.com/SHADE-glitch/<repo>` link in the English half also appears
 *      in the Chinese half and vice versa: the halves are one document.
 *   3. links     — every referenced repo resolves on GitHub (via `gh repo view`). If `gh` is
 *      missing or unauthenticated the check REFUSES to pass — a pass over an unverified set
 *      proves nothing. Pass `--offline` to skip it explicitly and loudly instead.
 *
 *   node scripts/check-profile.mjs [--offline]
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OWNER = "SHADE-glitch";
const OFFLINE = process.argv.includes("--offline");

const md = readFileSync(path.join(ROOT, "README.md"), "utf8");
const problems = [];
const fail = (m) => problems.push(m);

// ---- 1. structure ----------------------------------------------------------
const zhAt = md.indexOf('<a id="zh"');
if (!md.includes('<a id="en"')) fail("structure: missing the English anchor `<a id=\"en\"></a>`");
if (zhAt === -1) fail('structure: missing the Chinese anchor `<a id="zh"></a>`');
if (!/\]\(#zh\)/.test(md)) fail("structure: no switcher link to `#zh`");
if (!/\]\(#en\)/.test(md)) fail("structure: no switcher link to `#en`");

// Split the halves at the Chinese anchor. If it is missing there is no Chinese half, and the
// mirror check below reports every English repo as missing from it — the honest signal.
const enHalf = zhAt === -1 ? md : md.slice(0, zhAt);
const zhHalf = zhAt === -1 ? "" : md.slice(zhAt);

// ---- 2. mirror -------------------------------------------------------------
const reposIn = (s) =>
    new Set([...s.matchAll(new RegExp(`github\\.com/${OWNER}/([A-Za-z0-9._-]+)`, "g"))].map((m) => m[1]));
const en = reposIn(enHalf);
const zh = reposIn(zhHalf);
for (const r of en) if (!zh.has(r)) fail(`mirror: "${r}" is in the English half but not the Chinese half`);
for (const r of zh) if (!en.has(r)) fail(`mirror: "${r}" is in the Chinese half but not the English half`);
const all = [...new Set([...en, ...zh])].sort();
// A check over an empty set is a fake green: if no links were found, that itself is the failure.
if (all.length === 0) fail("mirror: no `github.com/SHADE-glitch/…` links found — the check would be vacuous");

// ---- 3. links resolve + visibility -----------------------------------------
// The only private repos the profile may name: the owner chose to disclose exactly these two. Every
// other listed repo must be public — naming another private one needs the owner's spoken approval
// first (see AGENTS.md). Enforced here, not merely asked for in prose.
const PRIVATE_ALLOWED = new Set([
    "AI-Interview-Practice-and-Feedback-System",
    "Local-life-service-platform",
]);

const ghUsable = (() => {
    try {
        execFileSync("gh", ["auth", "status"], { stdio: "ignore" });
        return true;
    } catch {
        // A token in the environment (e.g. the CI GITHUB_TOKEN) is enough for `gh` to run.
        return Boolean(process.env.GH_TOKEN || process.env.GITHUB_TOKEN);
    }
})();
const warnings = [];
if (OFFLINE) {
    console.log(`link/visibility check: SKIPPED (--offline) — ${all.length} repo(s) NOT verified`);
} else if (!ghUsable) {
    fail("links: cannot verify — `gh` is missing or not authenticated. A pass over an unverified " +
        "set proves nothing; run `gh auth login`, or pass --offline to skip this on purpose");
} else {
    for (const r of all) {
        let visibility;
        try {
            visibility = JSON.parse(
                execFileSync("gh", ["repo", "view", `${OWNER}/${r}`, "--json", "visibility"],
                    { encoding: "utf8" }),
            ).visibility;
        } catch {
            if (PRIVATE_ALLOWED.has(r)) {
                warnings.push(`"${r}" is not visible to this token — expected for a whitelisted ` +
                    `private repo; set the PROFILE_TOKEN CI secret (or run locally as the owner) to verify it`);
            } else {
                fail(`links: github.com/${OWNER}/${r} does not resolve (deleted, renamed, or never pushed)`);
            }
            continue;
        }
        if (visibility !== "PUBLIC" && !PRIVATE_ALLOWED.has(r)) {
            fail(`visibility: "${r}" is ${visibility} — only public repos may be listed; a private ` +
                `one needs the owner's spoken approval AND a whitelist entry in this script`);
        }
    }
}

// ---- report ----------------------------------------------------------------
console.log(`README.md: ${all.length} repo link(s) — ${all.join(", ") || "(none)"}`);
for (const w of warnings) console.warn(`note: ${w}`);
if (problems.length === 0) {
    console.log("PROFILE: PASS");
    process.exit(0);
}
console.error(`PROFILE: FAIL (${problems.length} problem(s)):`);
for (const p of problems) console.error(`  - ${p}`);
process.exit(1);
