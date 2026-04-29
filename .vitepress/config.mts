import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ren Kai',
  description: '代码与文字的栖息地',
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
      message: '用代码思考，用文字表达',
      copyright: `© ${new Date().getFullYear()} Ren Kai`
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
