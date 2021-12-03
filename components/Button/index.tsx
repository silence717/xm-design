import React, { ReactChildren } from 'react'
import classnames from 'classnames'

import './index.less'

const prefixCls = 'xm'

export type ButtonType = 'primary' | 'normal' | 'link' | 'dashed' | 'danger'
export type ButtonSize = 'large' | 'default' | 'small'

interface ButtonProps {
  type?: ButtonType
  size?: string
  href?: string
  loading?: boolean
  disabled?: boolean
  className?: string
  children?: ReactChildren | string
}

function Button(props: ButtonProps) {
  const {
    type = 'normal',
    size = 'default',
    href = '',
    loading = false,
    disabled = false,
    className = '',
    children,
    ...others
  } = props

  const classNames = classnames(
    `${prefixCls}-button`,
    {
      [type]: true,
      [size]: true,
    },
    className
  )

  return (
    <button
      // @ts-ignore
      type="button"
      className={classNames}
      disabled={disabled || loading}
      {...others}
    >
      {loading && <span className={`${prefixCls}-button-loading`} />}
      {children}
    </button>
  )
}

export default Button
