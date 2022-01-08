import React from 'react'
import classNames from 'classnames'
import { switchPrefix } from '../../constants/prefix'
import { noop } from '../../utils'
import './index.less'

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

  const outerPrefix = classNames(switchPrefix, {
    [`${switchPrefix}-disabled`]: disabled,
  })

  const switchButtonPrefix = `${switchPrefix}-button`

  const wrapper = classNames(switchButtonPrefix, {
    [`${switchButtonPrefix}-small`]: size === 'small',
    [`${switchButtonPrefix}-checked`]: checked,
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
      <div className={wrapper} onClick={handleClick} data-testid="switchButton" />
      <span className={`${switchPrefix}-text`}>{checked ? checkedText : unCheckedText}</span>
    </div>
  )
}

export default Switch
