/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置不同的size，头像大小不一样。
 */

import React from 'react'
import { Avatar } from 'xm-design'

export default function BaseAvatar() {
  return (
    <div className="flex gap-4">
      <Avatar name={'杨小白'} size={'xs'} />
      <Avatar name={'张三'} size={'sm'} />
      <Avatar name={'李四'} size={'base'} />
      <Avatar name={'王五'} size={'medium'} />
      <Avatar name={'左右'} size={'lg'} />
      <Avatar name={'周总'} size={'xl'} />
    </div>
  )
}
