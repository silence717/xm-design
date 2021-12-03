import React from 'react'
import classNames from 'classnames'
import { noop } from '../../utils'
import './index.less'

const prefixCls = 'xm'

type Size = 'default' | 'small'

interface SwitchProps {
  size?: Size
  checked?: boolean
  checkedText?: string
  unCheckedText?: string
  disabled?: boolean
  onBeforeChange?: () => void
  onChange?: (checked: boolean, event: any) => void
}

function Switch(props: SwitchProps) {
  const {
    checked = false,
    checkedText = '',
    unCheckedText = '',
    size = 'default',
    disabled = false,
    onChange = noop,
    onBeforeChange = undefined,
  } = props

  const prefix = `${prefixCls}-switch`
  const outerPrefix = classNames(prefix, {
    [`${prefix}-disabled`]: disabled,
  })

  const switchPrefix = `${prefix}-button`

  const wrapper = classNames(switchPrefix, {
    [`${switchPrefix}-small`]: size === 'small',
    [`${switchPrefix}-checked`]: checked,
  })

  const handleClick = (event: any) => {
    if (disabled) {
      return
    }

    if (onBeforeChange) {
      onBeforeChange()
      return
    }

    onChange(!checked, event)
  }

  return (
    <div className={outerPrefix}>
      <div className={wrapper} onClick={handleClick} />
      <span className={`${prefix}-text`}>{checked ? checkedText : unCheckedText}</span>
    </div>
  )
}

export default Switch
