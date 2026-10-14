#!/usr/bin/env node
/**
 * check-profile.mjs — guards the GitHub profile README (`SHADE-glitch/SHADE-glitch`).
 *
 * The front page is a single `README.md`, so a dead link or a half-edited copy would ship straight
 * to github.com/SHADE-glitch. This is the command that catches it first — CI runs it on every push,
 * and you can run it locally. Four checks:
 *
 *   1. structure — both HTML anchors (`<a id="en">`, `<a id="zh">`) and both switchers exist,
 *      so the page stays navigable and the two language halves stay delimited.
 *   2. mirror    — every `github.com/SHADE-glitch/<repo>` link in the English half also appears
 *      in the Chinese half and vice versa: the halves are one document.
 *   3. links     — every referenced repo resolves on GitHub (via `gh repo view`). If `gh` is
 *      missing or unauthenticated the check REFUSES to pass — a pass over an unverified set
 *      proves nothing. Pass `--offline` to skip it explicitly and loudly instead.
 *   4. agents    — the reverse index in `AGENTS.md` §6 lists exactly the repos the README links:
 *      the pair is what keeps the reciprocal obligation discoverable from either side. Needs only
 *      the two committed files, so it runs everywhere (CI included).
 *   5. badges    — a badge must agree with the repo it points at (AGENTS.md §3): the license badge
 *      equals that repo's `LICENSE`, the `GNOME Shell` badge equals `metadata.json`'s
 *      `shell-version`. Runtime badges equal declared floors, which only each repo's own docs
 *      state, so those stay a human check. Needs `gh` + network; `--offline` skips it.
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

// ---- 4. AGENTS.md §6 reciprocal index --------------------------------------
// §6 of AGENTS.md is the reverse index of the README's Projects: the same repos, listed the other
// way round. The two must agree — a repo added to or removed from the README without the matching
// edit here is exactly the drift §6's prose warns about. The local extension installs carry an
// `@local` suffix (their GNOME UUID); normalize it away so the names line up with the repo links.
const agents = readFileSync(path.join(ROOT, "AGENTS.md"), "utf8");
const sec6At = agents.indexOf("## 6.");
if (sec6At === -1) {
    fail("agents: AGENTS.md has no `## 6.` section — the reciprocal index is gone");
} else {
    const after = agents.slice(sec6At);
    const next = after.slice(1).search(/\n## /); // stop at the next top-level heading
    const body = next === -1 ? after : after.slice(0, next + 1);
    const indexed = new Set();
    for (const line of body.split("\n")) {
        const m = line.match(/^\|\s*`([^`]+)`\s*\|/); // the table's first column: `| \`repo\` | … |`
        if (m) indexed.add(m[1].replace(/@local$/, ""));
    }
    // An index over an empty set is a fake green: no rows parsed is itself the failure.
    if (indexed.size === 0) fail("agents: AGENTS.md §6 lists no repos — the check would be vacuous");
    for (const r of all) if (!indexed.has(r)) fail(`agents: "${r}" is in the README but not in AGENTS.md §6`);
    for (const r of indexed) if (!all.includes(r)) fail(`agents: "${r}" is in AGENTS.md §6 but not in the README`);
}

// ---- 5. badges agree with the repo they point at ----------------------------
// §3: a badge that disagrees with the repo it points at is a lie on the front page. Two kinds are
// machine-checkable from the repo itself — the license badge (its `LICENSE`) and the `GNOME Shell`
// badge (`metadata.json`'s `shell-version`). shields.io encodes a badge path as `--` = literal `-`
// and `-` = a space, so the token is decoded before it is compared with the expected text.
const rowsFor = (r) => md.split("\n").filter((l) => l.includes(`github.com/${OWNER}/${r}`));
const badgeTokens = (r, kind) => {
    const re = kind === "license"
        ? /img\.shields\.io\/badge\/license-([^?\s)]+)\?/g
        : /img\.shields\.io\/badge\/GNOME%20Shell-([^?\s)]+)\?/g;
    // The repo appears in both language halves, so the same badge token shows up twice; dedupe so a
    // single wrong value is reported once. Two halves with different values still yield two tokens.
    const out = new Set();
    for (const line of rowsFor(r)) for (const m of line.matchAll(re)) out.add(m[1]);
    return [...out];
};
const splitColor = (s) => { const i = s.lastIndexOf("-"); return i === -1 ? [s, ""] : [s.slice(0, i), s.slice(i + 1)]; };
const decodeBadge = (t) => t.replace(/--/g, "\u0000").replace(/-/g, " ").replace(/\u0000/g, "-").replace(/%20/gi, " ").replace(/%2B/gi, "+");
const SPDX_LICENSE = { "MIT": "MIT", "GPL-2.0": "GPL-2.0-or-later", "GPL-3.0": "GPL-3.0-or-later" };
const ghStr = (args) => {
    try { return execFileSync("gh", args, { encoding: "utf8" }).trim(); } catch { return null; }
};

if (OFFLINE) {
    console.log("badge check: SKIPPED (--offline) — badges NOT verified");
} else if (!ghUsable) {
    console.log("badge check: SKIPPED — `gh` is not usable (the link check above already fails)");
} else {
    for (const r of all) {
        const licenseBadges = badgeTokens(r, "license");
        if (licenseBadges.length) {
            const spdx = ghStr(["api", `repos/${OWNER}/${r}`, "--jq", ".license.spdx_id"]);
            if (spdx === null) {
                warnings.push(`"${r}": license badge not verified — the repo is not readable by this token`);
            } else if (!(spdx in SPDX_LICENSE)) {
                warnings.push(`"${r}": license is ${spdx} — the badge text cannot be derived from it, leaving it to the owner`);
            } else {
                for (const raw of licenseBadges) {
                    const [token] = splitColor(raw);
                    if (decodeBadge(token) !== SPDX_LICENSE[spdx])
                        fail(`badge: "${r}" license badge reads "${decodeBadge(token)}" but the repo's LICENSE is ${spdx} ("${SPDX_LICENSE[spdx]}")`);
                }
            }
        }
        const shellBadges = badgeTokens(r, "shell");
        if (shellBadges.length) {
            const b64 = ghStr(["api", `repos/${OWNER}/${r}/contents/metadata.json`, "--jq", ".content"]);
            let versions;
            try { versions = JSON.parse(Buffer.from(b64.replace(/\s+/g, ""), "base64").toString("utf8"))["shell-version"]; }
            catch { versions = undefined; }
            if (!Array.isArray(versions) || versions.length === 0) {
                warnings.push(`"${r}": GNOME Shell badge not verified — metadata.json unreadable or has no shell-version`);
            } else {
                const nums = [...new Set(versions.map(Number))].sort((a, b) => a - b);
                const contiguous = nums.every((n, i) => i === 0 || n === nums[i - 1] + 1);
                const want = nums.length === 1 ? String(nums[0]) : (contiguous ? `${nums[0]}-${nums[nums.length - 1]}` : null);
                if (want === null) {
                    warnings.push(`"${r}": shell-version ${nums.join(", ")} is not a contiguous range — the badge text cannot be derived`);
                } else {
                    for (const raw of shellBadges) {
                        const [token] = splitColor(raw);
                        if (decodeBadge(token) !== want)
                            fail(`badge: "${r}" GNOME Shell badge reads "${decodeBadge(token)}" but metadata.json's shell-version is ${nums.join(", ")} ("${want}")`);
                    }
                }
            }
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
