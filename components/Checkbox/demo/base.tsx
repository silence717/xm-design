/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 几种不同状态的展示。
 */

import React, { useState } from 'react'
import { Checkbox } from 'xm-design'

export default function BaseCheckbox() {
  const handleChange = (checked: boolean, value: string | number) => {
    console.log('handleChange', checked, value)
  }

  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  const handleIndeterminateChange = (checked: boolean, value: string | number) => {
    console.log('handleIndeterminateChange', value, checked)
    setChecked(!checked)
    setIndeterminate(false)
  }

  return (
    <div className="flex flex-col gap-2">
      <Checkbox>normal</Checkbox>
      <Checkbox defaultChecked={true} onChange={handleChange} value={1}>
        selected
      </Checkbox>
      <Checkbox indeterminate={indeterminate} defaultChecked={checked} onChange={handleIndeterminateChange} value={2}>
        indeterminate
      </Checkbox>
      <Checkbox disabled>disabled</Checkbox>
      <Checkbox defaultChecked={true} disabled value={1}>
        selected disabled
      </Checkbox>
      <Checkbox indeterminate={indeterminate} disabled defaultChecked={checked} value={2}>
        indeterminate disabled
      </Checkbox>
    </div>
  )
}
