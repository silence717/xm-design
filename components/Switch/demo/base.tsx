/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 最简单的使用。
 */

import React, { useState } from 'react'
import { Switch } from 'xm-design'

export default function SwitchBaseDemo() {
  const [checked, setChecked] = useState<boolean>(true)

  const handleChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
    setChecked(checked)
  }

  return <Switch checked={checked} onChange={handleChange} />
}
