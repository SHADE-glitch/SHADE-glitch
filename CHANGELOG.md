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
