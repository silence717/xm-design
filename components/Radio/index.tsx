import React, { CSSProperties, ReactElement } from 'react'
import cls from 'classnames'

import { radioPrefix } from '../../constants/prefix'

import './index.less'

interface Props {
  value: string | number
  checked?: boolean
  disabled?: boolean
  children: ReactElement
  style: CSSProperties
  className?: string
  onChange?: (value: string | number, event: any) => void
}

function Radio(props: Props) {
  const { value, checked = false, className = '', disabled, style, children, onChange, ...restProps } = props

  const handleChange = (evt: any) => {
    if (disabled) return
    onChange && onChange(value, evt)
  }

  return (
    <label className={`${radioPrefix} ${className}`} style={style}>
      <span className={`${radioPrefix}-wrapper`}>
        <input
          {...restProps}
          type="radio"
          checked={checked}
          disabled={disabled}
          className={`${radioPrefix}-input`}
          onChange={handleChange}
        />
        <span className={`${radioPrefix}-inner`} />
      </span>
      <span className={cls(`${radioPrefix}-text`, { disabled })}>{children}</span>
    </label>
  )
}

export default Radio
