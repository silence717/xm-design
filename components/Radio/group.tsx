import React, { Children, cloneElement, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react'
import cls from 'classnames'
import { radioPrefix } from '../../constants/prefix'
import Radio from './index'

interface Props {
  children: ReactElement
  defaultValue: ReactNode
  value: ReactNode
  onChange: (value: string | number, event: any) => void
  disabled: boolean
  horizontal: boolean
  vertical: boolean
}

function Group(props: Props) {
  const { children, defaultValue, value, onChange, disabled, horizontal, vertical } = props
  const [currentValue, setCurrentValue] = useState(defaultValue)

  useEffect(() => {
    setCurrentValue(value === undefined ? defaultValue : value)
  }, [value])

  function renderChild(childs: any): any {
    return Children.map(childs, (child) => {
      // 子元素有可能为一个表达式，直接返回了false或者null
      if (child && child.type && child.type.prototype === Radio.prototype) {
        return cloneElement(child, {
          disabled,
          checked: child.props.value === currentValue,
          onChange(val: string, evt: any) {
            setCurrentValue(val)
            onChange(val, evt)
          },
        })
      }

      if (child && child.props && child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: renderChild(child.props.children),
        })
      }
      return child
    })
  }

  const radios = useMemo(() => renderChild(children), [currentValue, disabled, children])

  return <span className={cls(`${radioPrefix}-group`, { horizontal, vertical })}>{radios}</span>
}

export default Group
