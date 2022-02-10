/**
 * title.zh-CN: 受控的 Checkbox
 * desc.zh-CN: 联动 checkbox。
 */

import React, { useState } from 'react'
import { Button, Checkbox } from 'xm-design'

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const onCheckedClick = () => {
    setChecked(!checked)
  }

  const onDisabledClick = () => {
    setDisabled(!disabled)
  }

  const handleChange = (checked: boolean) => {
    console.log(checked, '===checked====')
    setChecked(checked)
  }

  return (
    <div className="flex flex-col gap-4">
      <Checkbox value={2} disabled={disabled} checked={checked} onChange={handleChange}>
        受控的 Checkbox
      </Checkbox>
      <div className="flex gap-3">
        <Button size={'small'} type="primary" onClick={onCheckedClick}>
          {checked ? 'UnChecked' : 'Checked'}
        </Button>
        <Button size={'small'} type="primary" onClick={onDisabledClick}>
          {disabled ? 'Enable' : 'Disabled'}
        </Button>
      </div>
    </div>
  )
}
