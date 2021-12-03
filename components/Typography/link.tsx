import React, { ReactElement } from 'react'
import cls from 'classnames'

interface Props {
  disabled?: boolean
  className?: string
  children: string | ReactElement
  [x: string]: any
}

export default function Link(props: Props) {
  const { disabled = false, children, className, ...rest } = props
  const classes = cls('text-sm', className, {
    'text-ultramarine-06 cursor-pointer': !disabled,
    'text-ultramarine-03 cursor-not-allowed': disabled,
  })

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
