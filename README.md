# huanle.li — 个人主页

广告增长 × AI 实践者的个人主页 / 项目案例 / 方法论库。

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
│   └── blog/       实操笔记 (md)
├── layouts/
├── components/
└── pages/
    ├── index.astro
    ├── projects/
    ├── methods/
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

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

首次启用：仓库 → Settings → Pages → Source 选 "GitHub Actions"。
