# AGENTS.md — profile repo (`SHADE-glitch/SHADE-glitch`)

Rules for maintaining the GitHub **profile README**. This repo is unlike every other repo on this
machine: it ships no program — its one product is a front page. It deliberately does **not** adopt
`~/.agents/standards/STANDARD.md` — these rules are its own.

## 0. What this repo is

- The **profile repo**: the repository name equals the account name, so GitHub  renders its `README.md` at `https://github.com/SHADE-glitch`. `README.md` is the front page; the repo also
  carries `AGENTS.md`, the guard `scripts/check-profile.mjs`, the CI workflow that runs it, and
  `CHANGELOG.md` (the `D-###` ledger of changes to the page and the guard).
- There is **no app and no build** — just the README, its rules, and the guard that keeps them
  honest. Because it is the front page, it is **first in maintenance scope**: when any project
  changes (rename, public ↔ private, freeze, license, description), update this file in the same
  round.

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
- **Public repositories only.** The profile lists **public** repos and nothing else. **Every private
  repo is off-limits: naming one (or its existence, description, or stack beyond what is already
  public) requires the owner's explicit spoken approval first.** Never flip a repo to public just so
  it can be listed — that is a privacy decision, not a profile edit.

## 2. Two files, English first (this repo's exception)

Every other repo pairs two files (`README.md` ↔ `README.zh-CN.md`), and so does this one — with one
difference GitHub imposes: **the profile page renders only `README.md`**, so English is the half a
visitor lands on and the Chinese half sits one click away.

- `README.md` — English, opened by the switcher `English | 简体中文`.
- `README.zh-CN.md` — Chinese, opened by the same switcher.
- Each switcher links to the **other file** (`README.zh-CN.md` / `README.md`). There are no `#en` /
  `#zh` anchors: the pair is two files now, not two halves of one.

**The two files are one document and must stay mirrored** — same projects, same order, same links,
same access labels. Editing one without the other is a defect (the guard below catches it).

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
  declared floors. A badge that disagrees is a lie on the front page. The guard checks the license
  and `GNOME Shell` badges against each repo (see §5); runtime floors live in that repo's own docs,
  so they stay a human check.
- **Status must be honest.** A repo that is frozen, archived or upstream-frozen says so (the
  extensions section already does); never file one under "maintained".
- **Do not contradict the GitHub profile chrome.** The page also shows a bio, social links and pinned
  repos configured in GitHub **settings**, not in this repo. The README must not disagree with them;
  when the bio or the pinned set changes, re-check this file. (The guard cannot see that chrome — it
  is a human check.)
- **No third-party tracking badges.** Static shields.io-style badges only; no visitor counters or
  images from unknown hosts — they leak the referrer and can break silently.
- House style: emoji in headings, shields.io badges, tables — keep it scannable.

## 4. Commits

- Messages are **English**. Two prefixes are in use: `docs:` for the README and AGENTS prose, and
  `chore:` for the guard and CI. Example: `docs: down-list the frozen copyous extension`.

## 5. Verify before pushing

Run the guard:

    node scripts/check-profile.mjs

It fails on (a) a missing file or a switcher that does not point at the other language, (b) a repo
listed in one language but not the other, (c) a `github.com/SHADE-glitch/…` link that does not resolve, (d) a listed repo
that is **not public** — naming a private repo is exactly what this check blocks — (e) an `AGENTS.md` §6 index whose repo
set no longer equals the README's (see §6), (f) a **badge that disagrees with the repo it points
at** — the license badge vs that repo's `LICENSE`, the `GNOME Shell` badge vs `metadata.json`'s
`shell-version` (a repo whose license GitHub cannot pin down, like the dual-licensed `macos-dock`,
is reported as unverifiable rather than wrong), and (g) an `AGENTS.md` that lost, emptied or
renumbered one of its seven numbered sections (§0–§6) — this file *is* the rulebook, so its shape
is asserted too. Checks (a), (b), (e) and (g) read only the two committed files; (c), (d) and (f) need
`gh` authenticated and network, and when they cannot run the guard **refuses to report a pass** —
pass `--offline` to skip them explicitly and loudly instead.

**Automation.** `.github/workflows/profile.yml` runs the guard on every push and pull request, so a
dead link or a mis-mirrored copy cannot reach the front page. A CI token cannot see private repos, so
the guard only checks public ones; every listed repo must be public, and a private name fails the
check rather than hiding behind a token.

## 6. Where the obligations live (the reciprocal sections)

Every fact this README states about a project **originates in that project's own repo**, so the duty
to keep it true is written there, not here. Each listed repo carries a **"Listed on the GitHub
profile"** section in its `AGENTS.md` — a short obligation list that points back to this file as the
authoritative rulebook. A bilingual repo mirrors the same section in its `AGENTS.zh-CN.md`. A
code-only showcase is published from a private source repository; its section lives in the source
repository, which also owns the facts the row states:

| Repo |
|---|
| `all-usage-trackers` |
| `opencode-usage-tracker` |
| `codebuddy-usage-tracker` |
| `qoder-cn-usage-tracker` |
| `trae-cn-usage-tracker` |
| `AgentOS` |
| `notification-grouper@local` |
| `burn-my-windows@local` |
| `copyous@local` |
| `macos-dock@local` |
| `fast-translate@local` |
| `bendi-shenghuo-fuwu-pingtai` |
| `yunying-guiyin-zhinengti` |

When a repo is **added to** or **removed from** this README, add or remove its reciprocal section in
the same round — the pair is what keeps the obligation discoverable from either side. `resume` and
`Notes` are **not** listed and carry no such section.

`scripts/check-profile.mjs` enforces this table: its repo set must equal the README's (the local
extension installs are written here with their `@local` suffix — the guard strips it to compare
against the repo links). It verifies the **index**, not the sections themselves: those live in the
other repos and are out of this repo's reach in CI.
