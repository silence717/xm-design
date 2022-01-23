/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 最简单的用法。
 */

import React from 'react'
import { Checkbox } from 'xm-design'

export default function BaseButton() {
  return (
    <div>
      <Checkbox value={1}>橘子</Checkbox>
      <Checkbox value={2} checked>
        苹果
      </Checkbox>
    </div>
  )
}
