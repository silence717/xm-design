---
title: Typography 排版
order: 1000
nav:
  title: 组件
  path: /components
group:
  title: 通用组件
  order: 1
---

# 排版

## 代码演示

### Title

<code src="./demo/title.tsx"></code>

### Text

<code src="./demo/text.tsx"></code>

### Link

<code src="./demo/link.tsx"></code>

## API

### Typography.Title

| 属性      | 说明         | 类型    | 默认值  |
| :-------- | :----------- | :------ | :------ |
| level     | 标题大小     | number  | 2(16px) |
| block     | 是否独占一行 | boolean | false   |
| className | 外部样式     | string  |         |

### Typography.Text

| 属性      | 说明         | 类型                                                           | 默认值  |
| :-------- | :----------- | :------------------------------------------------------------- | :------ |
| type      | 文本类型     | default\| secondary \| placeholder \| help \|danger \| success | default |
| block     | 是否独占一行 | boolean                                                        | false   |
| className | 外部样式     | string                                                         |         |

### Typography.Link

| 属性      | 说明       | 类型    | 默认值 |
| :-------- | :--------- | :------ | :----- |
| disabled  | 是否不可用 | boolean | false  |
| className | 外部样式   | string  |        |
