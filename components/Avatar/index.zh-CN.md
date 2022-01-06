---
title: Avatar 头像
order: 1000
nav:
  title: 组件
  path: /components
group:
  title: 通用组件
  order: 1
---

# 头像

## 代码演示

### 使用姓名首字母作为头像

<code src="./demo/base.tsx"></code>

### 使用图片作为头像

<code src="./demo/img.tsx"></code>

## API

| 属性      | 说明                                                       | 类型       | 默认值 |
| --------- | ---------------------------------------------------------- | ---------- | ------ |
| name      | 姓名，根据首字母显示头像                                   | string     |        |
| size      | 设置按钮大小，可选值为 `xs` `sm` `base` `medium` `lg` `xl` | string     | `xs`   |
| className | 自定义 className                                           | string     |        |
| img       | 以图片作为头像                                             | string     |        |
| onClick   | 点击触发的回调                                             | () => void |        |
