import React, { ReactChildren } from 'react'
import classnames from 'classnames'
import { buttonPrefix } from 'constants/prefix'
import './index.less'

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
    `${buttonPrefix}`,
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
      {loading && <span className={`${buttonPrefix}-loading`} />}
      {children}
    </button>
  )
}

export default Button
