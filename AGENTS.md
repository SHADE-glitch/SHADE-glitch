# AGENTS.md — profile repo (`SHADE-glitch/SHADE-glitch`)

Rules for maintaining the GitHub **profile README**. This repo is unlike every other repo on this
machine: it ships a single file, and that file is a front page. It deliberately does **not** adopt
`STANDARD.md` — these rules are its own.

## 0. What this repo is

- The **profile repo**: the repository name equals the account name, so GitHub renders its
  `README.md` at `https://github.com/SHADE-glitch`. The only shipped file is `README.md`.
- There is **no code, no build, no test runner, no CI**. It is the front page, so it is **first in
  maintenance scope**: when any project changes (rename, public ↔ private, freeze, license,
  description), update this file in the same round.

## 1. Hard boundaries

- **Never `git push --force`, never rewrite pushed history.** The repo is public and its history is
  referenced from the profile.
- **Self-contained.** The README must not depend on local-only files (`docs/reports/`, `~/…`) or any
  private content: a clone of this repo has to render correctly on its own.
- **Pseudonymous identity only.** The owner is "SHADE-glitch / CS undergrad". Never add a real name,
  contact, employer, school, location, or the contents of the private `resume` / `Notes` repos. A
  link that would expose private content stays as `🔒 private — code available on request`.
- **Identity ceiling.** "CS undergrad" is the finest granularity allowed: never add a school,
  graduation year, city, age, photo, email or phone number. Anything more specific needs the owner's
  explicit approval first.
- **Public repositories only.** The profile lists **public** repos. The only privately-visible repos
  it may name are the two already listed — `AI-Interview-Practice-and-Feedback-System` and
  `Local-life-service-platform` (kept as `🔒 private — code available on request`) — because the owner
  chose to disclose those. **Every other private repo is off-limits: naming one (or its existence,
  description, or stack beyond what is already public) requires the owner's explicit spoken approval
  first.** Never flip a repo to public just so it can be listed — that is a privacy decision, not a
  profile edit.

## 2. One file, two languages (this repo's exception)

Every other repo pairs two files (`README.md` ↔ `README.zh-CN.md`). The profile cannot — GitHub
renders only `README.md` — so it is **one file with two halves**:

- an **English** half first, opened by `<a id="en"></a>`, and
- a **Chinese** half after, opened by `<a id="zh"></a>`,
- each with a switcher (`English · **[简体中文](#zh)**` / `**简体中文** · [English](#en)`), using the
  HTML anchors `#en` / `#zh`.

**The two halves are one document and must stay mirrored** — same projects, same order, same links,
same access labels. Editing one half without the other is a defect (the guard below catches it).

## 3. Content rules (truthfulness)

- Every project row must link to a repository that **really exists and belongs to the owner**, and
  the access cell must match reality (public vs `🔒 private`). A dead or wrong link is caught by
  `scripts/check-profile.mjs` before it ships.
- **Descriptions state what a project does now, not what it might become.** No roadmap, prototype or
  "coming soon" language. The strong claims the README already makes — `zero oversell`,
  `no network, no message bodies`, `no longer tracking upstream` — are **promises**: if one stops
  being true, the line that makes it changes with it.
- **Badges must agree with the repo they point at**: the license badge equals that repo's `LICENSE`,
  the `GNOME Shell` badge equals `metadata.json`'s `shell-version`, and runtime badges equal the
  declared floors. A badge that disagrees is a lie on the front page.
- **Status must be honest.** A repo that is frozen, archived or upstream-frozen says so (the
  extensions section already does); never file one under "maintained".
- **Do not contradict the GitHub profile chrome.** The page also shows a bio, social links and pinned
  repos configured in GitHub **settings**, not in this repo. The README must not disagree with them;
  when the bio or the pinned set changes, re-check this file. (The guard cannot see that chrome — it
  is a human check.)
- **No third-party tracking badges.** Static shields.io-style badges only; no visitor counters or
  images from unknown hosts — they leak the referrer and can break silently.
- "bilingual and maintained, not abandoned" is a **claim the README makes**. Only list repos that
  actually carry bilingual docs and are maintained; removing a row is a normal edit, not a loss.
- House style: emoji in headings, shields.io badges, tables — keep it scannable.

## 4. Commits

- Messages are **English**. Two prefixes are in use: `docs:` for the README and AGENTS prose, and
  `chore:` for the guard and CI. Example: `docs: down-list the frozen copyous extension`.

## 5. Verify before pushing

Run the guard:

    node scripts/check-profile.mjs

It fails on (a) a missing `#en`/`#zh` anchor or switcher, (b) a repo listed in one language half but
not the other, (c) a `github.com/SHADE-glitch/…` link that does not resolve, and (d) a listed repo
that is **not public** — the two whitelisted private repos are the only exception, and naming any
*other* private repo is exactly what this check blocks. The link and visibility checks need `gh`
authenticated and network; when they cannot run the guard **refuses to report a pass** — pass
`--offline` to skip them explicitly and loudly instead.

**Automation.** `.github/workflows/profile.yml` runs the guard on every push and pull request, so a
dead link or a mis-mirrored half cannot reach the front page. A CI token cannot see the two private
repos, so there they are reported as *unverifiable* (not dead) — run the guard locally, as the owner,
to verify them.
