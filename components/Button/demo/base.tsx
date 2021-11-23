/**
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在这个例子中， 按钮四种类型：主按钮、次按钮、虚线按钮、危险按钮、链接按钮。
 */

import React from 'react';
import { Button } from 'xm-design';

export default function BaseButton() {
  return (
    <div className="flex gap-2">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Dashed</Button>
    </div>
  );
}
