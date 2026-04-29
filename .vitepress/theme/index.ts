import DefaultTheme from 'vitepress/theme'
import './style.css'
import HomeLayout from './HomeLayout.vue'
import BlogList from './BlogList.vue'
import AboutPage from './AboutPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeLayout', HomeLayout)
    app.component('BlogList', BlogList)
    app.component('AboutPage', AboutPage)
  }
}
