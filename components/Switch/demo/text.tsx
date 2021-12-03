/**
 * title.zh-CN: 文字
 * desc.zh-CN: 可配置开启和关闭的文案。
 */

import React, { useState } from 'react'
import { Switch } from 'xm-design'

function SwitchTextDemo() {
  const [checked, setChecked] = useState<boolean>(true)

  const handleChange = (checked: boolean) => {
    setChecked(checked)
  }

  return <Switch checked={checked} onChange={handleChange} checkedText="开" unCheckedText="关" />
}

export default SwitchTextDemo
