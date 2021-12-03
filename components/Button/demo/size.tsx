/**
 * title.zh-CN: 加载中状态
 * desc.zh-CN: 添加 loading 属性即可让按钮处于加载状态。
 */

import React from 'react'
import { Button } from 'xm-design'

export default function LoadingButton() {
  return (
    <section className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button type="primary" size="large">
          Primary
        </Button>
        <Button size="large">Default</Button>
        <Button type="dashed" size="large">
          Dashed
        </Button>
        <Button type="danger" size="large">
          Danger
        </Button>
        <Button type="link" size="large">
          Dashed
        </Button>
      </div>
      <div className="flex gap-2">
        <Button type="primary" size="default">
          Primary
        </Button>
        <Button size="default">Default</Button>
        <Button type="dashed" size="default">
          Dashed
        </Button>
        <Button type="danger" size="default">
          Danger
        </Button>
        <Button type="link" size="default">
          Dashed
        </Button>
      </div>
      <div className="flex gap-2">
        <Button type="primary" size="small">
          Primary
        </Button>
        <Button size="small">Default</Button>
        <Button type="dashed" size="small">
          Dashed
        </Button>
        <Button type="danger" size="small">
          Danger
        </Button>
        <Button type="link" size="small">
          Dashed
        </Button>
      </div>
    </section>
  )
}
