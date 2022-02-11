---
title: Radio 单选
order: 1000
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 2
---

# 单选

## 代码演示

### 基本使用

<code src="./demo/base.tsx"></code>

### 禁用状态

<code src="./demo/disabled.tsx"></code>

### 单选组合

<code src="./demo/group.tsx"></code>

### 单选组合（垂直布局）

<code src="./demo/verticalGroup.tsx"></code>

## API

### Radio

| 属性      | 说明                      | 类型                       | 默认值 |
| --------- | ------------------------- | -------------------------- | ------ |
| value     | 当前 radio 对应的值       | string \| number           | --     |
| checked   | 指定当前 radio 是否选中   | boolean                    | false  |
| disabled  | 是否禁用                  | boolean                    | false  |
| className | 外部样式名称              | boolean                    | false  |
| onChange  | 选中 radio 之后的回调函数 | function(value, evt:Event) | false  |

### Radio.Group

| 属性         | 说明                    | 类型                                         | 默认值 |
| ------------ | ----------------------- | -------------------------------------------- | ------ |
| defaultValue | 默认 radio 选中的值     | string \| number                             | --     |
| value        | 设置当前选中的值        | string \| number                             | --     |
| onChange     | 选中 radio 的回调函数   | function(value: string \| number, evt:Event) | --     |
| disabled     | 定义内部 radio 是否禁用 | boolean                                      | false  |
| horizontal   | 定义 radio 横向布局     | boolean                                      | false  |
| vertical     | 定义 radio 竖向布局     | boolean                                      | false  |
