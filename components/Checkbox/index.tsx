import React, { CSSProperties, useState, ReactNode } from 'react'
import cls from 'classnames'

import { checkboxPrefix } from '../../constants/prefix'
import Group from './group'

import './index.less'

interface CheckboxProps {
  value: string | number
  defaultChecked?: boolean
  checked?: boolean
  indeterminate?: boolean
  disabled: boolean
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onChange: (checked: boolean, value: string | number) => void
}

function Checkbox(props: CheckboxProps) {
  const {
    disabled,
    defaultChecked = false,
    indeterminate = false,
    className = '',
    value = '',
    children,
    onChange,
  } = props
  const [checked, setChecked] = useState<boolean>(defaultChecked)
  const isChecked = props.checked === undefined ? checked : props.checked

  const handleChangeAction = () => {
    if (disabled) return
    setChecked(!isChecked)
    onChange && onChange(!isChecked, value)
  }

  const wrapperClasses = cls(`${checkboxPrefix}-wrapper`, className, {
    [`${checkboxPrefix}-wrapper-disabled`]: disabled,
  })

  const classes = cls(`${checkboxPrefix}`, {
    [`${checkboxPrefix}-checked`]: isChecked,
    [`${checkboxPrefix}-disabled`]: disabled,
    [`${checkboxPrefix}-indeterminate`]: isChecked ? false : indeterminate,
  })

  return (
    <label className={wrapperClasses}>
      <span className={classes}>
        <input
          type="checkbox"
          value={value}
          disabled={disabled}
          className={`${checkboxPrefix}-input`}
          onChange={handleChangeAction}
        />
        <span className={`${checkboxPrefix}-inner`} />
      </span>
      {children !== undefined && <span className={`${checkboxPrefix}-text`}>{children}</span>}
    </label>
  )
}

Checkbox.Group = Group

export default Checkbox
