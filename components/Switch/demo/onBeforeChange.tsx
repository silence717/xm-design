/**
 * title.zh-CN: onBeforeChange使用
 * desc.zh-CN: 在改变状态之前的事件，一般用于二次确认。
 */

import React, { useState } from 'react';
import { Switch } from 'xm-design';

function SwitchOnBeforeChangeDemo() {
  const [checked, setChecked] = useState<boolean>(true);

  const handleBeforeChange = () => {
    const result = window.confirm('确认改变吗？');
    if (result) {
      setChecked(!checked);
    }
  };

  return <Switch checked={checked} onBeforeChange={handleBeforeChange} />;
}

export default SwitchOnBeforeChangeDemo;
