---
title: 用 VitePress 搭建现代个人博客
date: 2024-02-18
tags: [VitePress, Vite]
summary: 详解如何利用 VitePress 的自定义主题能力，打造一个设计精良、部署简单的个人博客。
---

# 用 VitePress 搭建现代个人博客

*发布于 2024-02-18 · 约 6 分钟阅读*

---

在所有静态站点生成器中，VitePress 是我见过最「干净」的一个。它基于 Vite 构建，以 Vue 3 驱动，天然支持 Markdown，部署到 Vercel 只需三行命令。

## 为什么选 VitePress

市面上不缺博客框架：Hexo、Hugo、Gatsby、Astro……但我选择 VitePress 的原因很简单：

**它足够简单，又足够强大。**

- **零配置启动**：一个 Markdown 文件就是一篇文章
- **Vue 原生**：可以在 Markdown 里直接用 Vue 组件
- **Vite 驱动**：开发体验极快，HMR 瞬时响应
- **自定义主题**：完全控制 HTML 结构与样式

## 项目结构

一个典型的 VitePress 博客长这样：

```
blog/
├── .vitepress/
│   ├── config.mts        # 站点配置
│   └── theme/
│       ├── index.ts      # 主题入口
│       ├── style.css     # 全局样式
│       └── *.vue         # 自定义组件
├── blog/                 # 博客文章目录
│   └── hello-world.md
├── about/
│   └── index.md
└── index.md              # 首页
```

## 自定义主题的核心

VitePress 的主题系统非常灵活。最简单的自定义方式是扩展默认主题：

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  }
}
```

注册的组件可以直接在任何 Markdown 文件中使用：

```md
---
layout: page
---

<MyComponent />
```

## 部署到 Vercel

三步完成：

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目，框架预设选 **VitePress**
3. 点击部署

Vercel 会自动检测到 VitePress 配置，设置正确的构建命令（`vitepress build`）和输出目录（`.vitepress/dist`）。

如果需要手动配置，在根目录添加 `vercel.json`：

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## 写作体验

最让我满意的是写作体验。打开编辑器，新建一个 `.md` 文件，加上 frontmatter，开始写——就这么简单。不需要数据库，不需要后台，版本管理完全依托 Git。

每次 `git push`，Vercel 自动触发构建，几分钟后文章上线。这才是内容创作者应有的工作流。

---

*你正在阅读的这个博客，就是用 VitePress 构建的。*
