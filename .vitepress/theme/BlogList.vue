<template>
  <div class="blog-list-wrapper">
    <div class="page-heading">
      <p class="page-eyebrow">Writing</p>
      <h1 class="page-title">文章</h1>
      <p class="page-subtitle">共 {{ allPosts.length }} 篇，关于技术、设计与思考</p>
    </div>

    <!-- Tag Filter -->
    <div class="tag-filter">
      <button
        class="tag-btn"
        :class="{ active: activeTag === '' }"
        @click="activeTag = ''"
      >全部</button>
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag-btn"
        :class="{ active: activeTag === tag }"
        @click="activeTag = tag"
      >{{ tag }}</button>
    </div>

    <!-- Post List -->
    <div class="post-list">
      <a
        v-for="post in filteredPosts"
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

    <p v-if="filteredPosts.length === 0" style="color: var(--ink-300); font-size: 0.9rem; margin-top: 2rem;">
      暂无该标签的文章。
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const activeTag = ref('')

const allTags = computed(() => {
  const tags = new Set()
  allPosts.forEach(p => p.frontmatter.tags?.forEach(t => tags.add(t)))
  return [...tags]
})

const filteredPosts = computed(() => {
  if (!activeTag.value) return allPosts
  return allPosts.filter(p => p.frontmatter.tags?.includes(activeTag.value))
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}\n${month}-${day}`
}
</script>
