# CHANGELOG — `SHADE-glitch/SHADE-glitch`

本文件从**第一条有实义的记录**开始，**不回填历史**：在此之前本仓没有变更记录，事后补出来的
「过去」会是编造的。往后只要**首页上的承诺、项目行、徽章或守卫行为**发生变化，就在下面加一条。

- 编号 `D-###`，单调递增、**永不复用**；跳号是错误，不要事后「整理」。
- `kind` ∈ `fix | perf | taste | guard | revert | chore`。
- 每条断言的是**该提交当时**的状态，不是当前状态；聚合数字一律现算，不手抄进本文件。
- 规则正文唯一在 `AGENTS.md`；本文件只记「变了什么、为什么、代价是什么」，不复述规则。
- 本仓**不归** `~/.agents/standards/STANDARD.md` 管（它是独立项目）；格式沿用同一 `D-###`
  约定，只为与其余仓口径一致。

---

## D-001

kind     chore

Symptom  本仓是主页仓、维护优先级第一，却**没有变更账本**：`AGENTS.md` §3 说首页上的强承诺
         （`zero oversell`、`no network, no message bodies`、`no longer tracking upstream`）
         一旦不再成立，那句就得跟着改——但「哪次提交改了哪句承诺」无处可查。其余 16 个本地仓
         都有 `D-###` 账本，这里断了。仓库也没有 `.gitignore`。

Change   ① 新建本文件；② 新建 `.gitignore`（忽略 OS 与编辑器垃圾；本仓无构建产物）。
         ③ `AGENTS.md` §0 的「本仓承载什么」补上本文件，免得清单与实况不符。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，rc=0。

Cost     本仓不进任何档位，加 `D-###` 只为与其余仓一致；**不回填历史**。

Commit   「docs: record the badge guard and start a change ledger」

## D-002

kind     guard

Symptom  `AGENTS.md` §3 要求「徽章必须与被指仓库一致」（license 徽章 = 该仓 `LICENSE`、
         `GNOME Shell` 徽章 = `metadata.json` 的 `shell-version`），但守卫只查结构、双语镜像、
         链接与可见性、§6 反向索引——**徽章一致性只靠人眼**。首页上说谎（徽章与被指仓不符）
         不会被拦住，而这正是「front page 上的一句谎」。

Change   `scripts/check-profile.mjs` 新增第 5 项：对每个被列出仓，比对 README 行里的 license 徽章
         与该仓 `LICENSE` 的 SPDX（`MIT` / `GPL-2.0` / `GPL-3.0` → 徽章文案），`GNOME Shell` 徽章
         与该仓 `metadata.json` 的 `shell-version`（连续区间 → `min-max`）。`gh` 不可用或
         `--offline` 时跳过并明说；GitHub 无法判定的许可（如双许可的 `macos-dock`，SPDX
         `NOASSERTION`）报为「不可验证」而非错误。`AGENTS.md` §3/§5 同步说明该项。

Evidence 负向测试：把 4 处 `license-MIT` 改成 `Apache-2.0`、两处 `GNOME%20Shell-50` 改成 `46`
         → 守卫报 12 处不符、rc=1；还原后 rc=0、`PROFILE: PASS`。`macos-dock` 如预期只出笔记。

Cost     该项需要 `gh` + 网络（与链接检查同一分支）；CI 用 `PROFILE_TOKEN` 可覆盖两个私有仓。
         runtime 徽章（Python 版本等）仍留人工检查——它写在各仓自己的文档里，范围之外。

Commit   「chore: verify badges against each repo and ignore local junk」

## D-003

kind     guard

Symptom  `AGENTS.md` 是本仓唯一的规则书（§0–§6：本仓是什么、硬边界、单文件双语例外、内容规则、
         提交前缀、推送前怎么验、互指义务在哪），但守卫只查 README 与 `AGENTS.md` §6 的反向索引
         ——**这个文件的骨架本身没人守**：删掉、清空或改号一个 `## N.` 小节，那条规则就静默消失。

Change   `scripts/check-profile.mjs` 新增第 6 项「rulebook」：`AGENTS.md` 必须仍按顺序带有
         `## 0.`–`## 6.` 七个小节，且每节下面有非空正文；缺节、空节、乱序都报。只看已提交的这
         一个文件，不依赖 `gh` 或网络，所以 `--offline` 与 CI 里都照跑。`AGENTS.md` §5 的失败
         清单同步加上 (g)。另：第 4 项找 §6 起点原来用 `indexOf("## 6.")`，§5 正文里会写出节号，
         于是它锁到了**散文**而不是标题（实测报出 3 个「在 README 里但不在 §6」的假错），改行首锚定
         的正则；本项里列小节也一律避开行首 `## `。

Evidence 负向测试三项，逐项还原后 rc=0：① 删掉 `## 4. Commits` 标题 → 报缺节、rc=1；
         ② 把 `## 5.` 的正文清空（只留标题）→ 报空节；③ 把 §4 与 §5 换位 → 报乱序。
         还原后 `node scripts/check-profile.mjs` → `PROFILE: PASS`，rc=0。

Cost     多一条要跟着本文件结构走的断言：以后重命名或重排 `AGENTS.md` 的小节，必须同一次提交里改
         这里，否则守卫立刻红。这是刻意的——这份规则书正是这个仓的唯一产物。

Commit   「chore: assert the AGENTS.md rulebook shape in the guard」

## D-004

kind     chore

Symptom  The profile AGENTS.md cited the shared standard by bare STANDARD.md; this repo is not
         governed by it, so the bare name was even less resolvable than elsewhere.

Change   The reference carries the full ~/.agents/standards/STANDARD.md path.

Evidence 2026-10-19: grep -n STANDARD.md AGENTS.md shows only the full path;
         node scripts/check-profile.mjs reports PROFILE: PASS.

Cost     None; wording only.

## D-005

kind     chore

Symptom  `aut` 这一轮的首页项目行落后于仓库：Dashboard 现在画成三张带边框的卡片（窗口 / 图 /
         榜单），底栏也改成按 tab 变、只列当前页真能用的键。原来那句
         `📈 a dashboard with window-over-window deltas — plus 🧭 a key that hands the terminal…`
         两点都没说，项目行对不上现状。

Change   README 中英两侧的 aut 行同步补上「卡片式 Dashboard」与「底栏只列当前页的键」，仓库链接
         没有增删，双语镜像不变。另把重复占用的 `## D-002` 改成 `## D-004`：它在文件里是第 4 条，
         编号被前一条重复用过一次。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，12 个仓库链接，rc=0。

Cost     无；只改一行文案与一个编号。
