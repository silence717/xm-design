/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 最简单的用法。
 */

import React from 'react'
import { Radio } from 'xm-design'

function Base() {
  return (
    <div>
      <Radio value={1}>男</Radio>
      <Radio value={2} checked>
        女
      </Radio>
    </div>
  )
}

export default Base
