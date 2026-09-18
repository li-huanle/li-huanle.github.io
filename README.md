# huanle.li — 个人主页

广告增长 × 数据分析 × AI 工作流实践者的个人主页。

这里不是履历堆砌，而是一组经过脱敏的项目案例、方法卡和技术实践：

- 互联网营销与广告投放：小红书 / 抖音、KFS / BKFS、搜索、人群与内容策略
- 数据分析与管理：数据清洗、指标口径、异常诊断、实验与经营复盘
- AI / 自动化 / 知识库：Obsidian、RAG、本地 LLM、Skills、Agent、n8n 工作流
- 独立产品与技术实践：从高频业务动作到窄 MVP、验证和产品化

贯穿所有内容的方法是：**数据 → 洞察 → 行动 → 结果 → 规则回写**。

部署：[https://li-huanle.github.io](https://li-huanle.github.io)

## 技术栈

- [Astro 6](https://astro.build) 静态站点
- [Tailwind CSS v4](https://tailwindcss.com)
- Content Collections（Markdown 内容源）
- GitHub Actions → GitHub Pages 自动部署

## 内容结构

```
src/
├── content/
│   ├── projects/   项目案例 (md)
│   ├── methods/    方法论卡片 (md)
│   ├── cases/      外部公开案例研究 (md)
│   └── blog/       实操笔记 (md)
├── layouts/
├── components/
└── pages/
    ├── index.astro
    ├── projects/
    ├── methods/
    ├── cases/
    ├── aios.astro
    ├── blog/
    └── about.astro
```

## 本地开发

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
```

## 新增内容

新增项目卡片：在 `src/content/projects/` 新建一个 `.md` 文件，按 schema 填 frontmatter。

新增方法论：在 `src/content/methods/` 新建，`domain` 必填一个枚举值。

新增笔记：在 `src/content/blog/` 新建。

schema 定义见 `src/content.config.ts`。

## 内容发布原则

- 项目案例只保留可迁移的方法、相对变化和聚合结论
- 不提交客户身份、原始数据、精确预算、账号凭证、内部路径或个人隐私
- 亲自实践、外部案例和探索性判断明确区分
- 涉及时效的后台指标、平台规则和工具版本，发布前重新核验
- RAG / 搜索结果必须能回到来源；“检索命中”不等于“已经验证”

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

首次启用：仓库 → Settings → Pages → Source 选 "GitHub Actions"。
