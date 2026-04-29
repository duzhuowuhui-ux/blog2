---
title: 深入理解 Vue 3 Composition API
date: 2024-03-10
tags: [Vue, JavaScript]
summary: 从响应式原理到组合式函数，系统梳理 Vue 3 的核心设计思想与最佳实践。
---

# 深入理解 Vue 3 Composition API

*发布于 2024-03-10 · 约 8 分钟阅读*

---

Vue 3 的 Composition API 是对 Vue 2 Options API 的一次根本性重构。它不仅仅是语法糖，而是一种全新的代码组织哲学。

## 为什么需要 Composition API？

在大型 Vue 2 项目中，Options API 的局限日益明显：

- **逻辑碎片化**：同一个功能的代码被分散在 `data`、`computed`、`methods`、`watch` 等不同选项中
- **复用困难**：Mixins 虽然能共享逻辑，但带来命名冲突和来源不透明的问题
- **TypeScript 支持弱**：`this` 的动态性让类型推断举步维艰

Composition API 的核心思路是：**按功能而非选项组织代码**。

## ref 与 reactive 的选择

这是许多人纠结的第一个问题。

```ts
import { ref, reactive } from 'vue'

// ref：适合基本类型，或需要整体替换的对象
const count = ref(0)
const user = ref({ name: '任凯', age: 28 })

// reactive：适合复杂对象，不会丢失响应性
const state = reactive({
  loading: false,
  data: [],
  error: null
})
```

我的建议：**优先使用 `ref`**。它的语义更清晰，在组合式函数中传递时不会丢失响应性（`reactive` 解构后会丢失）。

## 组合式函数：逻辑复用的正确姿势

相比 Mixins，组合式函数（Composables）的最大优势是**显式依赖**。

```ts
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubled = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = initialValue }

  return { count, doubled, increment, decrement, reset }
}
```

使用时，所有依赖都是显式导入的，来源一目了然：

```vue
<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, doubled, increment } = useCounter(10)
</script>
```

## watchEffect vs watch

两者都用于监听响应式数据变化，但使用场景不同：

- **`watchEffect`**：自动追踪依赖，立即执行，适合副作用逻辑
- **`watch`**：显式指定数据源，可访问新旧值，适合需要对比变化的场景

```ts
// watchEffect：适合同步副作用
watchEffect(() => {
  document.title = `文章 - ${title.value}`
})

// watch：适合响应特定数据变化
watch(userId, async (newId, oldId) => {
  if (newId !== oldId) {
    await fetchUser(newId)
  }
})
```

## 总结

Composition API 是 Vue 3 最重要的设计决策。它让大型应用的代码更易维护，让逻辑复用更优雅，让 TypeScript 支持更完善。从 Options API 迁移需要思维转变，但一旦适应，你会发现这才是组件逻辑应有的样子。

---

*如果这篇文章对你有帮助，欢迎分享给更多人。*
