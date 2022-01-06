/**
 * title.zh-CN: 使用图片作为头像
 * desc.zh-CN: 设置不同的size，头像大小不一样。
 */

import React from 'react'
import { Avatar } from 'xm-design'

export default function BaseAvatar() {
  return (
    <div className="flex gap-4">
      <Avatar
        size={'xs'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
      <Avatar
        size={'sm'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
      <Avatar
        size={'base'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
      <Avatar
        size={'medium'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
      <Avatar
        size={'lg'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
      <Avatar
        size={'xl'}
        img="https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=b7b9a2c2dd88d43ff0fc99f4452efe23/b8389b504fc2d562ce8fd55aec1190ef77c66c85.jpg"
      />
    </div>
  )
}
