<template>
  <div class="about-wrapper">
    <!-- Intro -->
    <div class="about-intro">
      <div class="about-bio">
        <h1>任 凯</h1>
        <p class="role">Full-Stack Engineer · Shanghai</p>
        <p>
          你好，我是任凯。做软件开发已有六年，喜欢在代码的结构之美与产品的用户体验之间寻找平衡。
          平时写写技术文章，记录学习过程中的思考与发现。
        </p>
        <p style="margin-top: 0.8rem;">
          业余时间喜欢摄影、阅读和骑行。相信好的工程师首先是一个好的思考者。
        </p>
        <div class="hero-links" style="margin-top: 1.5rem;">
          <a href="mailto:hello@renkai.dev" class="hero-link accent">发邮件</a>
          <a href="https://github.com/renkai" target="_blank" class="hero-link">GitHub ↗</a>
        </div>
      </div>
      <div class="about-avatar">🌿</div>
    </div>

    <!-- Timeline -->
    <div style="margin-bottom: 2rem;">
      <p class="page-eyebrow">经历</p>
      <h2 class="page-title" style="font-size: 1.4rem; margin: 0.5rem 0 2rem;">时间线</h2>
      <div class="timeline">
        <div v-for="item in timeline" :key="item.year" class="timeline-item">
          <p class="timeline-year">{{ item.year }}</p>
          <h3 class="timeline-title">{{ item.title }}</h3>
          <p class="timeline-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div style="margin-top: 3rem; padding-top: 3rem; border-top: 1px solid var(--vp-c-divider);">
      <p class="page-eyebrow">技术栈</p>
      <h2 class="page-title" style="font-size: 1.4rem; margin: 0.5rem 0 1.8rem;">工具与技术</h2>
      <div class="skills-grid">
        <span v-for="s in skills" :key="s" class="skill-tag">{{ s }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const timeline = [
  {
    year: '2024 — 至今',
    title: '高级前端工程师 · 某科技公司',
    desc: '负责核心产品的前端架构设计，推动团队从 Vue 2 迁移至 Vue 3，性能指标整体提升 40%。'
  },
  {
    year: '2021 — 2024',
    title: '全栈工程师 · 创业公司',
    desc: '从零搭建 SaaS 平台，技术栈覆盖 Vue、Node.js、PostgreSQL，独立负责产品从 0 到 1。'
  },
  {
    year: '2019 — 2021',
    title: '前端工程师 · 互联网公司',
    desc: '参与大规模 React 应用开发，深入实践组件化设计与性能优化。'
  },
  {
    year: '2015 — 2019',
    title: '计算机科学 · 某重点大学',
    desc: '本科学习期间开始接触 Web 开发，对数据结构与算法产生浓厚兴趣。'
  }
]

const skills = [
  'Vue 3', 'React', 'TypeScript', 'JavaScript',
  'Node.js', 'Express', 'PostgreSQL', 'Redis',
  'Vite', 'VitePress', 'Tailwind CSS',
  'Docker', 'Vercel', 'Git', 'Figma', 'Linux'
]
</script>
