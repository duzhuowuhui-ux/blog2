<template>
  <div class="home-wrapper">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-text">
        <p class="hero-eyebrow">个人博客</p>
        <h1 class="hero-name">任 凯<em>.</em></h1>
        <p class="hero-desc">
          全栈工程师，热衷于构建优雅的产品。<br>
          在代码与文字之间，探索技术的边界与可能。
        </p>
        <div class="hero-links">
          <a href="/blog/" class="hero-link accent">阅读文章</a>
          <a href="/about/" class="hero-link">关于我</a>
          <a href="https://github.com/renkai" target="_blank" class="hero-link">GitHub ↗</a>
        </div>
      </div>
      <div class="hero-avatar">🌿</div>
    </section>

    <div class="section-divider"><hr /></div>

    <!-- Recent Posts -->
    <section class="recent-section">
      <div class="section-header">
        <span class="section-title">最新文章</span>
        <a href="/blog/" class="section-link">全部文章 →</a>
      </div>
      <div class="post-list">
        <a
          v-for="post in recentPosts"
          :key="post.url"
          :href="post.url"
          class="post-card"
        >
          <div class="post-date">{{ formatDate(post.frontmatter.date) }}</div>
          <div class="post-content">
            <h2 class="post-title">{{ post.frontmatter.title }}</h2>
            <p class="post-summary">{{ post.frontmatter.summary }}</p>
            <div class="post-tags">
              <span v-for="tag in post.frontmatter.tags" :key="tag" class="post-tag">{{ tag }}</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    <div class="section-divider"><hr /></div>

    <!-- Skills -->
    <section class="skills-section">
      <div class="section-header">
        <span class="section-title">技术栈</span>
      </div>
      <div class="skills-grid">
        <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

// Manually list posts (VitePress doesn't auto-glob in client components without plugin)
const allPosts = [
  {
    url: '/blog/vue3-composition-api',
    frontmatter: {
      title: '深入理解 Vue 3 Composition API',
      date: '2024-03-10',
      tags: ['Vue', 'JavaScript'],
      summary: '从响应式原理到组合式函数，系统梳理 Vue 3 的核心设计思想与最佳实践。'
    }
  },
  {
    url: '/blog/vitepress-blog',
    frontmatter: {
      title: '用 VitePress 搭建现代个人博客',
      date: '2024-02-18',
      tags: ['VitePress', 'Vite'],
      summary: '详解如何利用 VitePress 的自定义主题能力，打造一个设计精良、部署简单的个人博客。'
    }
  },
  {
    url: '/blog/css-modern-layout',
    frontmatter: {
      title: 'CSS Grid 与 Flexbox 的现代布局哲学',
      date: '2024-01-25',
      tags: ['CSS', '前端'],
      summary: '一篇关于现代 CSS 布局的深度思考：何时用 Grid，何时用 Flexbox，以及两者的协同之道。'
    }
  },
  {
    url: '/blog/typescript-tips',
    frontmatter: {
      title: 'TypeScript 实用技巧：类型体操的艺术',
      date: '2023-12-12',
      tags: ['TypeScript'],
      summary: '从日常开发中提炼出的 TypeScript 类型技巧，让类型系统成为你的助手而非障碍。'
    }
  }
]

const recentPosts = computed(() => allPosts.slice(0, 4))

const skills = [
  'Vue 3', 'React', 'TypeScript', 'Node.js', 'Vite',
  'VitePress', 'Tailwind CSS', 'PostgreSQL', 'Docker',
  'Vercel', 'Git', 'Linux', 'Figma'
]

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}\n${month}-${day}`
}
</script>
