/**
 * title.zh-CN: 不可用状态
 * desc.zh-CN: 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
 */

import React from 'react'
import { Button } from 'xm-design'

export default function DisabledButton() {
  return (
    <div className="flex gap-2">
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button disabled>Default</Button>
      <Button type="dashed" disabled>
        Dashed
      </Button>
      <Button type="danger" disabled>
        Danger
      </Button>
      <Button type="link" disabled>
        Dashed
      </Button>
    </div>
  )
}
