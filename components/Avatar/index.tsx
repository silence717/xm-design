import React from 'react'
import cls from 'classnames'

import { avatarPrefix } from '../../constants/prefix'
import { AvatarProps } from './type'

import './index.less'

export default function Avatar(props: AvatarProps) {
  const { name, size = 'xs', img = '', className = '', onClick = () => null } = props
  const classes = cls(avatarPrefix, size, className)

  return (
    <div className={classes} onClick={onClick}>
      {!img ? (
        <div className={`${avatarPrefix}-container`}>
          <div className={`${avatarPrefix}-hover`} />
          {name ? name.substring(0, 1) : '-'}
        </div>
      ) : (
        <img className={`${avatarPrefix}-img`} src={img} alt="avatar" />
      )}
    </div>
  )
}
