<template>
  <div class="about-wrapper">
    <!-- Intro -->
    <div class="about-intro">
      <div class="about-bio">
        <h1>Zeechon</h1>
        <p class="role">undergraduate student</p>
        <p>
            Hello! 恭喜你发现了我的秘密基地🤫，这里记录了我的技术分享和生活感悟, 希望你能从中获取有用的信息。
        </p>
        <div class="hero-links" style="margin-top: 1.5rem;">
          <a href="mailto:hello@renkai.dev" class="hero-link accent">发邮件</a>
          <a href="https://github.com/renkai" target="_blank" class="hero-link">GitHub ↗</a>
        </div>
      </div>

      <!-- ✅ 这里改成 img 标签，Vercel 必显示 -->
      <div class="about-avatar">
        <img src="images/profile_photo.jpg" alt="avatar" />
      </div>

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
    year: '2022 — 至今',
    title: '武汉大学遥感信息工程学院',
    desc: '本科在读'
  },
]

const skills = [
  'Vue 3', 'React', 'TypeScript', 'JavaScript',
  'Node.js', 'Express', 'PostgreSQL', 'Redis',
  'Vite', 'VitePress', 'Tailwind CSS',
  'Docker', 'Vercel', 'Git', 'Figma', 'Linux'
]
</script>

<style scoped>
/* 头像容器 */
.about-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 2rem;
  position: relative;
  top: 0px;
  left: 0px;
}

/* 图片样式 */
.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>