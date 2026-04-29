# 个人博客

基于 VitePress 构建的个人博客，支持一键部署到 Vercel。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## 部署到 Vercel

### 方式一：通过 Vercel 控制台（推荐）

1. 将此项目推送到 GitHub
2. 登录 [vercel.com](https://vercel.com)，点击 **New Project**
3. 导入 GitHub 仓库
4. 框架预设选择 **VitePress**（Vercel 会自动检测）
5. 点击 **Deploy** — 完成！

### 方式二：通过 Vercel CLI

```bash
npm install -g vercel
vercel
```

## 如何写新文章

1. 在 `blog/` 目录下新建 `.md` 文件，例如 `blog/my-new-post.md`

2. 在文件顶部添加 frontmatter：

```md
---
title: 文章标题
date: 2024-04-01
tags: [Vue, TypeScript]
summary: 文章摘要，显示在列表页
---

# 文章标题

正文内容...
```

3. 在 `.vitepress/theme/HomeLayout.vue` 和 `BlogList.vue` 的 `allPosts` 数组中添加该文章的索引信息

4. 推送到 GitHub，Vercel 自动重新部署

## 自定义个人信息

修改以下文件中的个人信息：

- `.vitepress/config.mts` — 站点标题、描述、导航
- `.vitepress/theme/HomeLayout.vue` — 首页名字、简介、技能栈
- `.vitepress/theme/AboutPage.vue` — 关于页经历、技术栈

## 项目结构

```
blog/
├── .vitepress/
│   ├── config.mts          # VitePress 配置
│   └── theme/
│       ├── index.ts        # 主题入口
│       ├── style.css       # 全局样式
│       ├── HomeLayout.vue  # 首页组件
│       ├── BlogList.vue    # 文章列表组件
│       └── AboutPage.vue   # 关于页组件
├── blog/                   # 博客文章
│   ├── index.md            # 文章列表页
│   └── *.md                # 各篇文章
├── about/
│   └── index.md            # 关于页
├── index.md                # 首页
├── vercel.json             # Vercel 部署配置
└── package.json
```
