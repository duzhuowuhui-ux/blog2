import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Zeechon',
  description: '留下生活中的一缕芬芳',
  lang: 'zh-CN',
  cleanUrls: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@300;400&family=Lora:ital,wght@0,400;0,600;1,400&display=swap'
    }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/blog/' },
      { text: '关于', link: '/about/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/renkai' },
    ],
    footer: {
      message: '出勃然而入寥然，化于生而死于尸，解天韬而堕其帙，魂魄往而身从之，明见无值至不论，天地忽如一远行。',
      copyright: `© ${new Date().getFullYear()} Zeechon`
    },
    search: {
      provider: 'local'
    }
  },

  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
})
