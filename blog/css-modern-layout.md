---
title: CSS Grid 与 Flexbox 的现代布局哲学
date: 2024-01-25
tags: [CSS, 前端]
summary: 一篇关于现代 CSS 布局的深度思考：何时用 Grid，何时用 Flexbox，以及两者的协同之道。
---

# CSS Grid 与 Flexbox 的现代布局哲学

*发布于 2024-01-25 · 约 5 分钟阅读*

---

"用 Grid 还是 Flexbox？"——这个问题出现在无数前端讨论中。答案既简单又复杂：**两者解决的是不同维度的问题**。

## 核心区别

一句话总结：

- **Flexbox**：一维布局，沿主轴排列元素
- **Grid**：二维布局，同时控制行和列

```css
/* Flexbox：适合导航栏、卡片行、工具栏 */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Grid：适合页面整体结构、图片库、复杂表单 */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

## 我的决策框架

**用 Flexbox，当：**
- 你只关心一个方向（横向排列菜单项，纵向排列表单项）
- 元素数量动态变化
- 需要弹性伸缩（`flex-grow`、`flex-shrink`）

**用 Grid，当：**
- 你需要同时控制行和列
- 设计稿有明确的网格结构
- 需要精确的对齐（不同行的列对齐）

## 最强组合：嵌套使用

实际项目中，两者常常配合使用。Grid 负责宏观结构，Flexbox 负责局部排列：

```css
/* 外层：Grid 定义页面区域 */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 280px 1fr;
}

/* 内层：Flexbox 排列导航链接 */
.header nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
```

## 现代 CSS 的布局哲学

2024 年的 CSS 已经非常强大。`container queries`、`subgrid`、逻辑属性……这些特性让我们可以构建真正响应式、可维护的布局系统。

不要再用 float，不要再 hack margin，让布局回归语义。选择 Grid 还是 Flexbox，取决于你要解决的是什么问题——理解这一点，你就掌握了现代 CSS 布局的精髓。

---

*CSS 是前端中最被低估的技能之一。精通它，你的开发效率会有质的飞跃。*
