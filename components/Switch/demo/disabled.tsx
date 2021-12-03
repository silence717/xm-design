/**
 * title.zh-CN: 不可用
 * desc.zh-CN: 可以通过添加 disabled 属性，处于失效状态。
 */

import React from 'react'
import { Switch } from 'xm-design'

export default function SwitchDisabled() {
  return <Switch disabled checked checkedText="已开启" />
}
