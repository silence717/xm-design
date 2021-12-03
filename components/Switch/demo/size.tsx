/**
 * title.zh-CN: 两种大小
 * desc.zh-CN: size="small" 表示小开关。
 */

import React from 'react'
import { Switch } from 'xm-design'

export default function SwitchSizeDemo() {
  return (
    <div>
      <Switch checked />
      <Switch checked size="small" />
    </div>
  )
}
