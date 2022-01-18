/**
 * title.zh-CN: 单选组合
 * desc.zh-CN: 一组互斥的 Radio 配合使用。
 */

import React, { useState } from 'react'
import { Radio } from 'xm-design'

function Group() {
  const [value, setValue] = useState<string>()

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <Radio.Group value={value} defaultValue={1} onChange={onChange}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
    </Radio.Group>
  )
}

export default Group
