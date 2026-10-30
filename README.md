<p align="right"><a href="README.md"><b>English</b></a> | <a href="README.zh-CN.md">简体中文</a></p>

<div align="center">

# Hi, I'm SHADE-glitch 👋

**CS undergrad** 🧑‍💻 · building ☕ Java & 🍃 Spring Boot backend and 🤖 AI apps (RAG · agents) · maintaining 🪞 GNOME Shell extensions 🔔🔥📋🍎 · building 🧰 a family of agent-usage trackers 📊🐾🎯🧮 · on 🐧 Ubuntu / GNOME 50

[![Ubuntu](https://img.shields.io/badge/running-Ubuntu%2026.04%20/%20GNOME%2050-E95420?style=flat-square&logo=ubuntu&logoColor=white)](https://ubuntu.com/)
[![Focus](https://img.shields.io/badge/focus-Java%20backend%20%2B%20AI%20applications-4479A1?style=flat-square&logo=openjdk&logoColor=white)](https://spring.io/)

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
