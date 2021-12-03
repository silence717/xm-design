/**
 * title.zh-CN: Typography.Text使用
 * desc.zh-CN: 一般用于正文，不同类型显示不同大小和颜色。
 */

import React from 'react'
import { Typography } from 'xm-design'

function TypographyTextDemo() {
  return (
    <div className="flex flex-col gap-y-2">
      <Typography.Text block>默认文本</Typography.Text>
      <Typography.Text block type={'secondary'}>
        次要文本
      </Typography.Text>
      <Typography.Text block type={'placeholder'}>
        placeholder文本
      </Typography.Text>
      <Typography.Text block type={'help'}>
        帮助信息文本
      </Typography.Text>
      <Typography.Text block disabled type={'danger'}>
        禁用文本
      </Typography.Text>
      <Typography.Text block type={'success'}>
        成功文本
      </Typography.Text>
      <Typography.Text block type={'danger'}>
        危险文本
      </Typography.Text>
    </div>
  )
}

export default TypographyTextDemo
