/**
 * title.zh-CN: 基础使用
 * desc.zh-CN: 在这个例子中， 按钮四种类型：主按钮、次按钮、虚线按钮、link按钮。
 */

import { Component } from 'react';
import { Button } from 'xm-design';

const blank = '\u00A0';

export default class ButtonDemo extends Component {
  render() {
    return (
      <div>
        <Button type="primary">primary</Button>
        {blank}
        <Button type="normal">normal</Button>
        {blank}
        <Button type="dashed">dashed</Button>
        {blank}
        <Button type="link">link</Button>
      </div>
    );
  }
}
