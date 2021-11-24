---
title: Button 按钮
order: 1000
nav:
  title: 组件
  path: /components
group:
  title: 通用组件
  order: 1
---

# 按钮

## 代码演示

### 按钮类型

<code src="./demo/base.tsx"></code>

### 不可用状态

<code src="./demo/disabled.tsx"></code>

### 加载中状态

<code src="./demo/loading.tsx"></code>

### 不同大小

<code src="./demo/size.tsx"></code>

## API

| 属性     | 说明                                                               | 类型            | 默认值    |
| -------- | ------------------------------------------------------------------ | --------------- | --------- |
| disabled | 按钮失效状态                                                       | boolean         | `false`   |
| size     | 设置按钮大小，可选值为 `large` `default` `small` 或者不设          | string          | `default` |
| type     | 设置按钮类型，可选值为 `primary` `dashed` `link` `normal` 或者不设 | string          | `normal`  |
| onClick  | 点击触发的回调                                                     | (event) => void | -         |
