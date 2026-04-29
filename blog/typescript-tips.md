---
title: TypeScript 实用技巧：类型体操的艺术
date: 2023-12-12
tags: [TypeScript]
summary: 从日常开发中提炼出的 TypeScript 类型技巧，让类型系统成为你的助手而非障碍。
---

# TypeScript 实用技巧：类型体操的艺术

*发布于 2023-12-12 · 约 7 分钟阅读*

---

TypeScript 的类型系统是一门独立的语言。用得好，它是你最强的协作者；用得差，它只是 JavaScript 加了一堆红色波浪线。

## 善用工具类型

TypeScript 内置了丰富的工具类型，熟练使用可以减少大量重复定义：

```ts
interface User {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
}

// 只取部分字段
type UserProfile = Pick<User, 'id' | 'name' | 'email'>

// 排除某些字段
type PublicUser = Omit<User, 'password'>

// 所有字段可选
type UserUpdate = Partial<User>

// 所有字段必填
type StrictUser = Required<User>
```

## 条件类型：让类型随数据变化

条件类型是 TypeScript 最强大的特性之一：

```ts
type NonNullable<T> = T extends null | undefined ? never : T

// 提取 Promise 的内部类型
type Awaited<T> = T extends Promise<infer U> ? U : T

type Result = Awaited<Promise<string>> // string
```

## 模板字面量类型

TypeScript 4.1 引入的模板字面量类型，让字符串类型操作变得优雅：

```ts
type EventName = 'click' | 'focus' | 'blur'
type Handler = `on${Capitalize<EventName>}` // 'onClick' | 'onFocus' | 'onBlur'

// API 路由类型
type Route = `/api/${string}`
const validRoute: Route = '/api/users' // ✓
const invalidRoute: Route = '/users'   // ✗ 类型错误
```

## 实用的自定义类型

几个我在日常开发中反复使用的类型：

```ts
// 深度可选
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

// 提取对象中值为特定类型的键
type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never
}[keyof T]

// 确保至少有一个属性
type AtLeastOne<T> = {
  [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>
}[keyof T]
```

## 写类型的原则

技巧再多，也要遵循几个原则：

1. **不要滥用 `any`**：它是逃生舱，不是默认选项
2. **类型应该描述数据形状，而不是约束业务规则**：`age > 0` 是运行时验证的事
3. **优先使用 TypeScript 的类型推断**：不必到处写类型注解，让编译器帮你

TypeScript 的边界在于：它只存在于编译时。好的类型设计，是让运行时错误在编译时就被发现。

---

*类型体操可以很有趣，但永远不要忘记：类型是为了让代码更安全，不是为了炫技。*
