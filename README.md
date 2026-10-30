<a id="en"></a>

<div align="center">

# Hi, I'm SHADE-glitch 👋

**CS undergrad** 🧑‍💻 · building ☕ Java & 🍃 Spring Boot backend and 🤖 AI apps (RAG · agents) · maintaining 🪞 GNOME Shell extensions 🔔🔥📋🍎 · building 🧰 a family of agent-usage trackers 📊🐾🎯🧮 · on 🐧 Ubuntu / GNOME 50

[![Ubuntu](https://img.shields.io/badge/running-Ubuntu%2026.04%20/%20GNOME%2050-E95420?style=flat-square&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Focus](https://img.shields.io/badge/focus-Java%20backend%20%2B%20AI%20applications-4479A1?style=flat-square&logo=openjdk&logoColor=white)](https://spring.io/)
[![Languages](https://img.shields.io/badge/docs-English%20%7C%20简体中文-lightgrey?style=flat-square)](#zh)

English · **[简体中文](#zh)**

</div>

---

## 🧭 What I do

I build things 🛠️ end to end and keep them maintained. Two directions: ☕ **backend / AI application
engineering** (Java · Spring Boot · RAG · agent tool loops · async pipelines) and 🧰 **developer
tooling** — a family of agent-usage trackers (🧮 aut · 🐾 cbut · 📊 ocut · 🎯 qcut), GNOME Shell
extensions and utilities that make my own daily
workflow 🔭 observable and a little faster.

## 📦 Projects

### 🚀 Backend & AI applications

| Project | What it does | Badges |
| :--- | :--- | :---: |
| 🍜 **[bendi-shenghuo-fuwu-pingtai](https://github.com/SHADE-glitch/bendi-shenghuo-fuwu-pingtai)** | 🍜 Dianping-style local-life platform as a 🧩 modular monolith: 🛡️ Redis cache guards, ⚡ a Lua + Redis-Stream seckill with zero oversell and one-order-per-user idempotency, 🔁 a CAS order state machine and 🏪 a merchant console with RBAC — ☕ Java 17 · Spring Boot 3.3 · MySQL 8 · Redis 7 · Vue 3 | [![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white)](https://redis.io/) [![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/) |
| 🧭 **[yunying-guiyin-zhinengti](https://github.com/SHADE-glitch/yunying-guiyin-zhinengti)** | 🧭 Operational attribution agent for local-life data: 🧠 the model only proposes one drill-down dimension per step while 🛡️ thresholds, budgets and SQL guardrails stay in code; 📚 hybrid retrieval (pgvector HNSW + pg_trgm + RRF), 🧾 a three-part conclusion (facts / inferences / uncertainty) bound to the SQL behind it, and 🔒 a read-only database role — ☕ Java 17 · Spring Boot 3.5 · Spring AI · PostgreSQL 16 + pgvector · Vue 3 | [![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot) [![Spring AI](https://img.shields.io/badge/Spring_AI-6DB33F?style=flat-square)](https://spring.io/projects/spring-ai) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![pgvector](https://img.shields.io/badge/pgvector-HNSW-336791?style=flat-square&logo=postgresql&logoColor=white)](https://github.com/pgvector/pgvector) [![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/) |

### 🧰 Open-source tools

| Project | What it does | Badges |
| :--- | :--- | :---: |
| 🧮 **[all-usage-trackers](https://github.com/SHADE-glitch/all-usage-trackers)** | 🧮 Six-tab board over cbut / ocut / qcut: 🔢 cross-tool tokens per model, 🎯 skills and tools side by side, 🕒 one merged timeline, 📈 a card dashboard with window-over-window deltas — ⌨️ a footer that lists only the keys the current tab answers and 🧭 hands the terminal to a tracker's own TUI and back (🚫 no second parser, 🚫 no writes) | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/all-usage-trackers) [![Textual](https://img.shields.io/badge/TUI-Textual-ff69b4?style=flat-square)](https://github.com/SHADE-glitch/all-usage-trackers) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/all-usage-trackers/blob/master/LICENSE) |
| 📊 **[opencode-usage-tracker](https://github.com/SHADE-glitch/opencode-usage-tracker)** | 📊 Eight-tab TUI for how you actually use OpenCode — 🧰 tool calls, 🎯 skills, 🤖 subagents with drill-down, 🔌 MCP, 🧩 plugins, 💵 real per-step cost and 🔢 per-model usage totals, a passive read-only log reader over OpenCode's own SQLite (🚫🌐 no network, 🔒 no message bodies) | [![OpenCode](https://img.shields.io/badge/OpenCode-1.18.x%20%7C%202.x-blue?style=flat-square)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/opencode-usage-tracker/blob/master/LICENSE) |
| 🐾 **[codebuddy-usage-tracker](https://github.com/SHADE-glitch/codebuddy-usage-tracker)** | 🐾 Cross-session usage analytics for CodeBuddy Code in an eight-tab TUI — 🧰 tools, 🎯 skills, 🤖 agents, 🧩 plugins, 🔌 MCP calls, 🔢 per-model tokens with 💳 provider credits and 🛰️ agent-span traces, over per-tab 📅 calendar-day windows on a 🔒 metadata-only local SQLite index (🚫🌐 no network) | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/codebuddy-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/codebuddy-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/codebuddy-usage-tracker/blob/master/LICENSE) |
| 🎯 **[qoder-cn-usage-tracker](https://github.com/SHADE-glitch/qoder-cn-usage-tracker)** | 🎯 Eight-tab TUI for the Qoder CN CLI, modelled on cbut — 🧰 tools, 🎯 skills, 🤖 agents, 🧩 plugins, 🔌 MCP, 🗜️ compaction ledgers, 🔢 tokens next to 💳 credits and per-tab 📅 calendar-day windows; a measured zero stays apart from a route that never reported a token (🚫🌐 no network, 🔒 no message bodies) | [![Qoder](https://img.shields.io/badge/Qoder_CN-CLI-6C4CF1?style=flat-square)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker/blob/master/LICENSE) |
| 🐾 **[trae-cn-usage-tracker](https://github.com/SHADE-glitch/trae-cn-usage-tracker)** | 🐾 Passive, read-only tracker for Trae CN: 🎯 skills, 🤖 agents, 🧩 plugins, 🔌 MCP servers and 🧰 tool-call counts indexed from local files into one SQLite, with 💳 credit balance samples (🚫🌐 no network) — honest about the panels it cannot fill · 🧊 frozen — kept as a record: Trae CN's files never matched the other trackers | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/trae-cn-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/trae-cn-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/trae-cn-usage-tracker/blob/master/LICENSE) |
| 🧠 **[AgentOS](https://github.com/SHADE-glitch/AgentOS)** | 🧠 External evidence & governance layer for a coding agent: 📥 observations → 📊 a verdict → 🚪 a human gate → 📚 promoted memory → 🔁 recall that changes the next prompt (🐍 stdlib-only, 🚫 never edits code) · 🧊 frozen — kept as a record of the attempt | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/AgentOS) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/AgentOS) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/AgentOS/blob/master/LICENSE) |

### 🪞❄️ GNOME Shell extensions

❄️ Four upstream-frozen forks, maintained locally under their `@local` UUIDs — 🚫 no longer tracking upstream. Focus: 🐛 latent crashes, 💧 resource leaks, 🔋 idle power draw and 🧭 GNOME 45→50 adaptation.

| Project | What it does | Badges |
| :--- | :--- | :---: |
| 🔔 **[notification-grouper](https://github.com/SHADE-glitch/notification-grouper)** | 🔔 Original extension (not a fork) that folds notifications from one app into a single stack — 🪄 zero-config by default, with 4 plain switches if you want them | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-50-blue?style=flat-square)](https://github.com/SHADE-glitch/notification-grouper) [![License](https://img.shields.io/badge/license-GPL--2.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/notification-grouper/blob/master/LICENSE) |
| 🔥 **[burn-my-windows](https://github.com/SHADE-glitch/burn-my-windows)** | 🔥 Fork of Burn My Windows: ✨ 26 GPU shader window effects with 🔋 power-aware profiles (AC vs battery), 🎛️ libadwaita live previews and 🌍 34 translations · 🧊 frozen at upstream v48 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-45--50-blue?style=flat-square)](https://github.com/SHADE-glitch/burn-my-windows) [![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/burn-my-windows/blob/master/LICENSE) |
| 📋 **[copyous](https://github.com/SHADE-glitch/copyous)** | 📋 Fork of Copyous: 🗂️ SQLite clipboard history with 🔎 search, 📌 pins, 🏷️ nine tags and 🕶️ incognito — hardened for correctness, security and leaks · 🧊 frozen at upstream 2.0.1 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-48--50-blue?style=flat-square)](https://github.com/SHADE-glitch/copyous) [![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/copyous/blob/master/LICENSE) |
| 🍎 **[macos-dock](https://github.com/SHADE-glitch/macos-dock)** | 🍎 Fork of MacOSDock: 🔍 magnification, 👻 dodge/auto-hide, ⌨️ Super+1…0 keyboard navigation and 🧞 genie minimize/restore — merges MacOSDock + macos-genie · 🧊 frozen at upstream v9 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-50-blue?style=flat-square)](https://github.com/SHADE-glitch/macos-dock) [![License](https://img.shields.io/badge/license-MIT%20%2B%20GPL--2.0--or--later-green?style=flat-square)](https://github.com/SHADE-glitch/macos-dock/blob/master/LICENSE) |
| 🌐 **[fast-translate](https://github.com/SHADE-glitch/fast-translate)** | 🌐 Fork of Fast Translate (translate-assistant): double-copy (Ctrl+C twice) to translate via Google, DeepL, Baidu or Youdao — 📖 a dictionary card for single words, ⌨️ background mode, ⚡ an LRU cache and 🐕 a request watchdog · 🧊 frozen at upstream v10 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-45--50-blue?style=flat-square)](https://github.com/SHADE-glitch/fast-translate) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/fast-translate/blob/master/LICENSE) |

🧊 `frozen at upstream vX` pins the fork's upstream baseline; local fixes continue and the repository is **not archived**.

## 🧪 Tech I use

[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring AI](https://img.shields.io/badge/Spring_AI-6DB33F?style=flat-square)](https://spring.io/projects/spring-ai)
[![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![MyBatis](https://img.shields.io/badge/MyBatis-DC382D?style=flat-square)](https://mybatis.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square&logo=flyway&logoColor=white)](https://flywaydb.org/)
[![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)](https://www.rabbitmq.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript_GJS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://gjs.guide/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)](https://www.linux.org/)
[![GNOME](https://img.shields.io/badge/GNOME_Shell-4FC3F7?style=flat-square&logo=gnome&logoColor=white)](https://www.gnome.org/)

## 📈 GitHub stats

[![Followers](https://img.shields.io/github/followers/SHADE-glitch?style=flat-square&logo=github&color=181717&label=Followers)](https://github.com/SHADE-glitch?tab=followers)
[![Stars](https://img.shields.io/github/stars/SHADE-glitch?style=flat-square&logo=github&color=181717&label=Stars)](https://github.com/SHADE-glitch?tab=repositories)

<a id="zh"></a>

---

<div align="center">

## 你好，我是 SHADE-glitch 👋

**计算机专业本科生** 🧑‍💻 · 主要写 ☕ Java 与 🍃 Spring Boot 后端、🤖 AI 应用（RAG · Agent）· 维护 🪞 GNOME Shell 扩展 🔔🔥📋🍎 · 还做 🧰 一整套 agent 用量追踪器 📊🐾🎯🧮 · 运行 🐧 Ubuntu / GNOME 50

[![Ubuntu](https://img.shields.io/badge/running-Ubuntu%2026.04%20/%20GNOME%2050-E95420?style=flat-square&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Focus](https://img.shields.io/badge/focus-Java%20backend%20%2B%20AI%20applications-4479A1?style=flat-square&logo=openjdk&logoColor=white)](https://spring.io/)
[![Languages](https://img.shields.io/badge/docs-English%20%7C%20简体中文-lightgrey?style=flat-square)](#en)

**简体中文** · [English](#en)

</div>

---

## 🧭 我在做什么

我喜欢把东西 🛠️ 从零做到能用，并且持续维护。两条主线：☕ **后端 / AI 应用工程**（Java · Spring Boot · RAG · Agent 工具循环 · 异步流水线）
和 🧰 **开发者工具**——一整套 agent 用量追踪器（🧮 aut · 🐾 cbut · 📊 ocut · 🎯 qcut）、GNOME Shell
扩展和一些小工具，让我自己的工作流 🔭 可观测、再快一点。

## 📦 项目

### 🚀 后端 & AI 应用

| 项目 | 做什么 | 徽章 |
| :--- | :--- | :---: |
| 🍜 **[bendi-shenghuo-fuwu-pingtai](https://github.com/SHADE-glitch/bendi-shenghuo-fuwu-pingtai)** | 🍜 点评式本地生活平台，🧩 模块化单体：🛡️ Redis 缓存防护、⚡ Lua + Redis Stream 秒杀（零超卖 + 一人一单幂等）、🔁 CAS 订单状态机、🏪 带 RBAC 的商家后台——☕ Java 17 · Spring Boot 3.3 · MySQL 8 · Redis 7 · Vue 3 | [![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot) [![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white)](https://redis.io/) [![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/) |
| 🧭 **[yunying-guiyin-zhinengti](https://github.com/SHADE-glitch/yunying-guiyin-zhinengti)** | 🧭 本地生活数据运营归因 Agent：🧠 模型每步只提议一个下钻维度，🛡️ 贡献度阈值、预算与 SQL 护栏全部由代码裁决；📚 混合检索（pgvector HNSW + pg_trgm + RRF）、🧾 三段式结论（事实 / 推测 / 不确定）绑定到背后的 SQL、🔒 只读数据库账号 —— ☕ Java 17 · Spring Boot 3.5 · Spring AI · PostgreSQL 16 + pgvector · Vue 3 | [![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot) [![Spring AI](https://img.shields.io/badge/Spring_AI-6DB33F?style=flat-square)](https://spring.io/projects/spring-ai) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![pgvector](https://img.shields.io/badge/pgvector-HNSW-336791?style=flat-square&logo=postgresql&logoColor=white)](https://github.com/pgvector/pgvector) [![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/) |

### 🧰 开源与工具链

| 项目 | 做什么 | 徽章 |
| :--- | :--- | :---: |
| 🧮 **[all-usage-trackers](https://github.com/SHADE-glitch/all-usage-trackers)** | 🧮 cbut / ocut / qcut 之上的六页总览：🔢 跨工具按模型汇总 token，🎯 skill 与工具并排，🕒 合并成一条时间线，📈 卡片式 Dashboard 带同窗口对比——⌨️ 底栏只列当前页真正能用的键，🧭 并能把终端交给那家自己的 TUI、退出即回（🚫 不写第二套解析，🚫 不写库） | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/all-usage-trackers) [![Textual](https://img.shields.io/badge/TUI-Textual-ff69b4?style=flat-square)](https://github.com/SHADE-glitch/all-usage-trackers) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/all-usage-trackers/blob/master/LICENSE) |
| 📊 **[opencode-usage-tracker](https://github.com/SHADE-glitch/opencode-usage-tracker)** | 📊 看清你实际如何使用 OpenCode 的八页 TUI——🧰 工具调用、🎯 skill、🤖 子代理下钻、🔌 MCP、🧩 插件、💵 真实每步成本与 🔢 每模型 usage total，被动只读 OpenCode 自己的 SQLite 日志（🚫🌐 不联网、🔒 不记正文） | [![OpenCode](https://img.shields.io/badge/OpenCode-1.18.x%20%7C%202.x-blue?style=flat-square)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/opencode-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/opencode-usage-tracker/blob/master/LICENSE) |
| 🐾 **[codebuddy-usage-tracker](https://github.com/SHADE-glitch/codebuddy-usage-tracker)** | 🐾 CodeBuddy Code 的跨会话用量分析，八页 TUI——🧰 工具、🎯 skill、🤖 agent、🧩 插件、🔌 MCP 调用、🔢 每模型 token 与 💳 provider credit、🛰️ agent span trace，配合每页独立的 📅 日历天窗口，只读 🔒 纯元数据本地 SQLite 索引（🚫🌐 不联网） | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/codebuddy-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/codebuddy-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/codebuddy-usage-tracker/blob/master/LICENSE) |
| 🎯 **[qoder-cn-usage-tracker](https://github.com/SHADE-glitch/qoder-cn-usage-tracker)** | 🎯 面向 Qoder CN CLI 的八页 TUI（照 cbut 而来）——🧰 工具、🎯 skill、🤖 agent、🧩 插件、🔌 MCP、🗜️ 压缩账本、🔢 token 与 💳 credit 并列、每页独立的 📅 日历天窗口；真实为零与「路由没报 token」始终分得开（🚫🌐 不联网、🔒 不记正文） | [![Qoder](https://img.shields.io/badge/Qoder_CN-CLI-6C4CF1?style=flat-square)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/qoder-cn-usage-tracker/blob/master/LICENSE) |
| 🐾 **[trae-cn-usage-tracker](https://github.com/SHADE-glitch/trae-cn-usage-tracker)** | 🐾 Trae CN 的被动只读追踪器：把 🎯 skill、🤖 agent、🧩 plugin、🔌 MCP server 与 🧰 工具调用次数索引进一个本地 SQLite，另有 💳 credit 余额采样（🚫🌐 不联网）——填不上的面板如实标出 · 🧊 已冻结，作为一次尝试的记录保留：Trae CN 的文件与其它追踪器始终对不上 | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/trae-cn-usage-tracker) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/trae-cn-usage-tracker) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/trae-cn-usage-tracker/blob/master/LICENSE) |
| 🧠 **[AgentOS](https://github.com/SHADE-glitch/AgentOS)** | 🧠 给写码 Agent 的外部证据与治理层：📥 观察 → 📊 verdict → 🚪 人工确认 → 📚 沉淀记忆 → 🔁 回召改变下一次提示词（🐍 纯标准库、🚫 绝不改代码）· 🧊 已冻结——作为一次尝试的记录保留 | [![Python](https://img.shields.io/badge/python-3.11%2B-blue?style=flat-square&logo=python&logoColor=white)](https://github.com/SHADE-glitch/AgentOS) [![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://github.com/SHADE-glitch/AgentOS) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/AgentOS/blob/master/LICENSE) |

### 🪞❄️ GNOME Shell 扩展

❄️ 四个冻结上游的分支，以各自的 `@local` UUID 在本地维护，🚫 不再跟随上游。主做 🐛 潜在崩溃、💧 资源泄漏、🔋 待机功耗 + 🧭 GNOME 45→50 适配。

| 项目 | 做什么 | 徽章 |
| :--- | :--- | :---: |
| 🔔 **[notification-grouper](https://github.com/SHADE-glitch/notification-grouper)** | 🔔 原创扩展（非 fork），把同一应用的通知折叠成一叠——🪄 默认零配置，需要时可动 4 个开关 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-50-blue?style=flat-square)](https://github.com/SHADE-glitch/notification-grouper) [![License](https://img.shields.io/badge/license-GPL--2.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/notification-grouper/blob/master/LICENSE) |
| 🔥 **[burn-my-windows](https://github.com/SHADE-glitch/burn-my-windows)** | 🔥 Burn My Windows 的分支：✨ 26 个 GPU 着色器窗口特效，🔋 按电源模式切换（AC / 电池）、🎛️ libadwaita 实时预览、🌍 34 种翻译 · 🧊 冻结在上游 v48 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-45--50-blue?style=flat-square)](https://github.com/SHADE-glitch/burn-my-windows) [![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/burn-my-windows/blob/master/LICENSE) |
| 📋 **[copyous](https://github.com/SHADE-glitch/copyous)** | 📋 Copyous 的分支：🗂️ SQLite 剪贴板历史，🔎 搜索、📌 固定、🏷️ 九色标签与 🕶️ 隐身模式——在正确性、安全与泄漏上加固 · 🧊 冻结在上游 2.0.1 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-48--50-blue?style=flat-square)](https://github.com/SHADE-glitch/copyous) [![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue?style=flat-square)](https://github.com/SHADE-glitch/copyous/blob/master/LICENSE) |
| 🍎 **[macos-dock](https://github.com/SHADE-glitch/macos-dock)** | 🍎 MacOSDock 的分支：🔍 放大、👻 避让/自动隐藏、⌨️ Super+1…0 键盘导航与 🧞 精灵最小化/还原——合并 MacOSDock + macos-genie · 🧊 冻结在上游 v9 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-50-blue?style=flat-square)](https://github.com/SHADE-glitch/macos-dock) [![License](https://img.shields.io/badge/license-MIT%20%2B%20GPL--2.0--or--later-green?style=flat-square)](https://github.com/SHADE-glitch/macos-dock/blob/master/LICENSE) |
| 🌐 **[fast-translate](https://github.com/SHADE-glitch/fast-translate)** | 🌐 Fast Translate（translate-assistant）的分支：双击复制（Ctrl+C 两次）即译，支持 Google、DeepL、百度、有道——📖 单词词典卡片、⌨️ 后台模式、⚡ LRU 缓存与 🐕 请求看门狗 · 🧊 冻结在上游 v10 | [![GNOME Shell](https://img.shields.io/badge/GNOME%20Shell-45--50-blue?style=flat-square)](https://github.com/SHADE-glitch/fast-translate) [![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/SHADE-glitch/fast-translate/blob/master/LICENSE) |

🧊 `冻结在上游 vX` 表示分支的上游基线已固定；本地修复继续，仓库**没有归档**。

## 🧪 技术栈

[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring AI](https://img.shields.io/badge/Spring_AI-6DB33F?style=flat-square)](https://spring.io/projects/spring-ai)
[![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![MyBatis](https://img.shields.io/badge/MyBatis-DC382D?style=flat-square)](https://mybatis.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=flat-square&logo=flyway&logoColor=white)](https://flywaydb.org/)
[![Redis](https://img.shields.io/badge/Redis-FF4438?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![RabbitMQ](https://img.shields.io/badge/RabbitMQ-FF6600?style=flat-square&logo=rabbitmq&logoColor=white)](https://www.rabbitmq.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript_GJS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://gjs.guide/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)](https://www.linux.org/)
[![GNOME](https://img.shields.io/badge/GNOME_Shell-4FC3F7?style=flat-square&logo=gnome&logoColor=white)](https://www.gnome.org/)

## 📈 GitHub 统计

[![Followers](https://img.shields.io/github/followers/SHADE-glitch?style=flat-square&logo=github&color=181717&label=Followers)](https://github.com/SHADE-glitch?tab=followers)
[![Stars](https://img.shields.io/github/stars/SHADE-glitch?style=flat-square&logo=github&color=181717&label=Stars)](https://github.com/SHADE-glitch?tab=repositories)
