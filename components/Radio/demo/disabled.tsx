/**
 * title.zh-CN: 禁用状态
 * desc.zh-CN: 通过添加disabled为true，设置为禁用状态，不可点击。
 */

import React from 'react'
import { Radio } from 'xm-design'

function DisabledRadio() {
  return (
    <Radio value={1} disabled>
      男
    </Radio>
  )
}

export default DisabledRadio
