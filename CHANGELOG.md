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

## D-006

kind     chore

Symptom  `ocut` 这一轮的首页项目行还写着 `💵 a cost series`：那条按天成本曲线是 Dashboard 上的
         一张趋势图，已随 Runtime 行一起删除——成本现在只以数字形式出现在面板与 Projects 板里，
         「series」不再成立。同时三家追踪器与 `aut` 都改成了单一 Usage Total（不再打印 API Total），
         项目行里没有任何一句与新口径冲突，但成本那半句已经过期。

Change   README 中英两侧的 ocut 行把「成本曲线」改成「真实每步成本」，并注明 token 只有一个
         usage total。仓库链接没有增删，双语镜像不变。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，12 个仓库链接，rc=0。

Cost     无；只改一行文案。

## D-007

kind     chore

Symptom  `ocut` 那一行的版本徽章写着 `OpenCode-1.18.x`，而 `opencode-usage-tracker` 自己的 README
         与 `docs/maintenance/compatibility.md` 声明支持 `1.18.x` **与** `2.x`——首页把已支持的上界
         说小了一档，读者会以为 2.x 没被覆盖。

Change   README 中英两侧的 ocut 徽章改为 `OpenCode-1.18.x | 2.x`。链接、仓库集合与双语镜像不变。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，12 个仓库链接，rc=0。

Cost     无；只改一个徽章的文案。

## D-008

kind     chore

Symptom  四个 GNOME 分支的冻结标记写法不一致：burn / copyous / macos 把版本放在行首括号里，
         fast 只在行尾挂 `· 🧊 frozen at upstream v10` 且未说明自己是 fork；扩展节也没有说明
         「冻结上游」不等于 GitHub 已归档，读者容易把两者混为一谈。

Change   README 中英两侧四条分支行统一以 `· 🧊 frozen at upstream vX` / `· 🧊 冻结在上游 vX`
         结尾，fast 行补上 `Fork of Fast Translate (translate-assistant)`；扩展节开头改为
         「四个冻结上游的分支」，表后补一句「冻结只固定上游基线，本地修复继续，仓库没有归档」。
         链接、仓库集合与徽章未动。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，12 个仓库链接，rc=0。

Cost     无；只改文案。

---

## D-009

kind     taste

Symptom  工具区四个追踪器的顺序是 aut → cbut → ocut → qcut → tcut，cbut 排在 ocut 前面。主人要求
         改成 ocut → cbut → qcut → tcut：先看 OpenCode 那家，再是 CodeBuddy。顺序本身没有事实
         错误，但首页是给人扫的，行的先后就是阅读顺序。

Change   README 中英两侧的工具表把 `opencode-usage-tracker` 与 `codebuddy-usage-tracker` 两行
         对调；其余行（`all-usage-trackers` 仍在最前，其后 qcut、tcut、AgentOS）与扩展节、应用
         节未动。`AGENTS.md` §6 的互惠表按同一顺序对调，两处保持一一对应。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接，rc=0。

Cost     无；只改行的先后，链接、徽章与仓库集合都没动。守卫只比对仓库**集合**，不比顺序，所以
         这条约束靠人对齐——§6 与本表同轮改动就是为了不留一处。

## D-010

kind     chore

Symptom  首页「Backend & AI applications」两行里，第一个项目还是 `AI-Interview-Practice-and-Feedback-System`，
         而主人现在的两个面试项目是 `Local-life-service-platform` 与 `insight-agent`。同一处还有第二
         个问题：这两行都写着 `🔒 private — code available on request`，但两个仓现在都已经是**公开仓**，
         那句承诺不再成立——首页在说一件已经不真的事。

Change   README 中英两侧把 `AI-Interview` 行换成 `insight-agent` 行（行内徽章按该仓技术栈重写：
         Spring Boot 3.5 / Spring AI / PostgreSQL 16 / pgvector / Vue 3），并删掉 `Local-life` 行末尾的
         私有标记。`AGENTS.md` §1 的「Public repositories only」段落随之改写：两个被点名的后端项目现在
         都是公开仓，原先为它们保留的私有例外不再需要；§6 的互惠表把 `AI-Interview` 换成 `insight-agent`，
         与 README 的仓库集合保持一一对应。`AI-Interview` 仓本身未删除、未改动，只是不再出现在首页。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接，rc=0。首次运行报
         `agents: "insight-agent" is in the README but not in AGENTS.md §6` 与反向的一条，改完 §6 后通过。

Cost     首页少了一个已完结的项目，多了一个仍在开发中的项目——后者的 README 与指标还会变，§6 的互惠
         义务因此从「已冻结」变成「活文档」。守卫只比对集合，不比对行的顺序与描述文字，描述与徽章的
         准确性仍靠人核对。


## D-011

kind     chore

Symptom  首页「Backend & AI applications」两行指向的主仓名，已经被主人改成了展示仓名：`Local-life-service-platform`
         现名 `bendi-shenghuo-fuwu-pingtai`，`insight-agent` 现名 `yunying-guiyin-zhinengti`。上一轮 D-010
         把这两个主仓名写进 README，链接实际靠 GitHub 重定向才没断；守卫也因此一直带着
         `PRIVATE_ALLOWED` 这份「允许点名的私有仓」白名单——上一轮还把 `AI-Interview` 留在了里面，
         而主人现在明确只要这两个项目，私有仓一个都不该被点名。

Change   README 中英两侧的应用行改为 `bendi-shenghuo-fuwu-pingtai` 与 `yunying-guiyin-zhinengti`，
         描述与徽章按主人给的文案与两仓技术栈重写；`AI-Interview`、`Local-life-service-platform`、
         `insight-agent` 三个名字从首页移除。`AGENTS.md` §1 的「Public repositories only」改成
         「本页只列公开仓，私有仓一律不点名」、§5 删掉 `PROFILE_TOKEN` 回退段、§6 的索引表同步换成
         这两个仓名，并补一句「纯代码展示仓由私有源仓发布，互惠节写在源仓」。
         `scripts/check-profile.mjs` 把 `PRIVATE_ALLOWED` 清空：任何非公开仓现在直接判失败，例外
         必须先有主人的口头同意并在脚本里登记。

Evidence `node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接，rc=0。

Cost     首页不再点名 `AI-Interview`，也不再点名两个源仓名；`AI-Interview` 仓本身未删除、未改动。
         守卫的「不可见即私有」分支保留，但白名单为空，例外只存在于规则里而不是代码里。

## D-012

kind     fix

Symptom  首页「Follow」徽章（中英两侧各一处）在 GitHub 上渲染成断图，而同页其他 shields 徽章正常。
         原因是这张图走的是 `img.shields.io/github/followers/...`，服务端要回源调 GitHub API；
         shields 未带 token 时这个端点容易 429，GitHub 的 camo 会把那次失败按图片 URL 缓存下来，
         shields 恢复之后页面仍拿旧缓存，于是只有这一张坏。

Change  两处 Follow 徽章地址追加 `&cacheSeconds=3600`。camo 的缓存键由 URL 派生，改 URL 即强制
         重新取图；同时把 shields 的上游缓存从默认 300 秒拉到 1 小时，429 概率随之降一个量级。
         徽章外观、文案与点击目标均不变。

Evidence `curl` 旧地址 → 200 `image/svg+xml`（`Follow: 2`），说明服务端没坏、坏的是缓存；
         改后 `node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接不变。

Cost     关注数最多滞后 1 小时。若 shields 上游持续 429，这张图仍可能短暂断——要彻底避免只能换成
         不带 API 的静态徽章，代价是没有实时数字。

## D-013

kind     fix

Symptom  D-012 换了 Follow 徽章地址并加了 `cacheSeconds`，但新地址在 GitHub 上依旧是断图：改完立刻抓页面，
         新生成的 camo 链接返回 `504 Error Fetching Resource`。所以问题不在浏览器缓存，而在 GitHub 的
         camo 取不到图——`img.shields.io/github/followers/...` 要回源调 GitHub API，未带 token 时既慢又会
         429，超过 camo 的取图时限就 504。同页那些 `img.shields.io/badge/...` 静态徽章一直正常，正好印证。

Change   Follow 徽章换成静态徽章 `badge/Follow-SHADE--glitch-181717`（带 GitHub logo），不再依赖任何上游
         API；外观与点击目标不变，中英两侧各一处。

Evidence 改前：新 camo 链接 → `504 Error Fetching Resource`（`Error Fetching Resource`，24 字节纯文本）；
         `node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接不变。

Cost     徽章不再显示关注数（当前 2）。统计区那两枚 Followers / Stars 仍是 API 徽章，同样可能在 camo 侧
         504——它们目前靠已有缓存显示，将来断了就用同一办法换成静态徽章。

## D-014

kind     fix

Symptom  D-013 换成静态 shields 徽章后，新地址的 camo 链接仍然 504；再查同页早已缓存过的 Ubuntu 徽章，camo 同样
         返回 504。这次抓到的三个 camo 链接全部失败，说明 GitHub 的 camo 这一侧取不到 `img.shields.io`，
         任何**新**的 shields 图片都会断，只有历史上缓存过的还能显示——「同页只坏一张」看起来随机，根因在这里。

Change   Follow 徽章改成仓库内自托管的 `assets/follow.svg`（126×20，flat-square 双段：#555 Follow / #181717
         SHADE-glitch），README 用相对路径引用，中英两侧各一处。图片由 GitHub 自己托管，不再经过第三方。

Evidence 改前：新静态 shields 地址的 camo → 504；已缓存的 Ubuntu 徽章 camo → 504；`curl` shields 直连 → 200，
         `time_total` 0.64s，即本机可达、GitHub 侧取不到。`node scripts/check-profile.mjs` → `PROFILE: PASS`。

Cost     徽章不再显示关注数，也不再随 shields 样式更新。其余 shields 徽章仍是外链，camo 侧取不到时同样会断，
         届时可按同一办法逐个自托管。

## D-015

kind     revert

Symptom  D-014 把 Follow 徽章改成自托管之后，主人明确说这个徽章不需要。它本身也不带信息（关注数是 2），
         却独占一行，压在 Ubuntu / Focus / Languages 三枚徽章前面。
Change   删掉 README 中英两侧的 Follow 徽章行，并删除 D-014 新增的 `assets/follow.svg`（assets/ 随之清空）。
         关注入口不另设，点头像或用户名进个人页即可。

Evidence `git status` → `M README.md`、`D assets/follow.svg`；README 顶部只剩 Ubuntu / Focus / Languages
         三枚徽章；`node scripts/check-profile.mjs` → `PROFILE: PASS`，13 个仓库链接不变。

Cost     首页少一个关注入口。其余 shields 徽章仍是外链，camo 侧取不到时同样会断。
