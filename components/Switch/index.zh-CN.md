---
title: Switch 开关
order: 1000
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# 开关

## 代码演示

### 基本使用

<code src="./demo/base.tsx"></code>

### 不可用状态

<code src="./demo/disabled.tsx"></code>

### 大小

<code src="./demo/size.tsx"></code>

### 带文本

<code src="./demo/text.tsx"></code>

### onBeforeChange

<code src="./demo/onBeforeChange.tsx"></code>

## API

| 属性           | 说明                                | 类型                                     | 默认值  |
| -------------- | ----------------------------------- | ---------------------------------------- | ------- |
| size           | 开关大小，可选值：`default` `small` | string                                   | default |
| checked        | 指定当前是否选中                    | boolean                                  | false   |
| checkedText    | 选中时候的文案                      | string                                   |         |
| unCheckedText  | 未选中时候的文案                    | string                                   |         |
| disabled       | 是否禁用                            | boolean                                  | false   |
| onChange       | 切换状态时候的回调                  | Function(checked: boolean, event: Event) |         |
| onBeforeChange | 切换状态前的二次确认                | Function()                               |         |
