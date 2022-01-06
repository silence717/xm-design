import React from 'react'
import cls from 'classnames'

import { AvatarProps } from './type'
import './index.less'

const prefixCls = 'xm'
const prefix = `${prefixCls}-avatar`

export default function Avatar(props: AvatarProps) {
  const { name, size = 'xs', img = '', className = '', onClick = () => null } = props
  const classes = cls(prefix, size, className)

  return (
    <div className={classes} onClick={onClick}>
      {!img ? (
        <div className={`${prefix}-container`}>
          <div className={`${prefix}-hover`} />
          {name ? name.substring(0, 1) : '-'}
        </div>
      ) : (
        <img className={`${prefix}-img`} src={img} alt="avatar" />
      )}
    </div>
  )
}
