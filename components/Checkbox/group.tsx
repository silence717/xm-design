import React, { Children, cloneElement, ReactElement } from 'react'
import cls from 'classnames'

import { checkboxPrefix } from '../../constants/prefix'

interface GroupProps {
  value: any
  disabled: boolean
  layout: string
  children: ReactElement
  onChange: (checked: boolean) => void
}

function Group(props: GroupProps) {
  const { children, value, onChange, disabled, layout } = props

  let checkedValue = value ? [...value] : value

  const group = Children.map(children, (child) =>
    cloneElement(child, {
      disabled: disabled === undefined ? child.props.disabled : disabled,

      checked: checkedValue === undefined ? undefined : checkedValue.indexOf(child.props.value) > -1,

      onChange(checked, val) {
        if (checkedValue === undefined) {
          checkedValue = []
        }

        const index = checkedValue.indexOf(val)

        if (index > -1 && !checked) {
          checkedValue.splice(index, 1)
        }

        if (index === -1 && checked) {
          checkedValue.push(val)
        }

        onChange(checkedValue)
      },
    })
  )

  const classes = cls(`${checkboxPrefix}-group`, {
    vertical: layout === 'v',
    horizontal: layout === 'h',
  })

  return <span className={classes}>{group}</span>
}

export default Group
