import React from 'react'

import { Radio } from 'xm-design'

function Base() {
  return (
    <div>
      <Radio value={1}>男</Radio>
      <Radio value={1} checked>
        女
      </Radio>
    </div>
  )
}

export default Base
