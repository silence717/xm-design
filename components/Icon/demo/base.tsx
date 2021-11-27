/**
 * title.zh-CN: 所有图标
 * desc.zh-CN: 可配置图标的颜色、字体大小等其他
 */

import React from 'react';
import { Icon } from 'xm-design';

const icons = [
  'calendar',
  'notice',
  'download',
  'star',
  'save',
  'user',
  'arrow-up',
  'arrow-down',
  'filter',
  'edit',
  'message',
  'up',
  'right',
  'down',
  'left',
  'time',
  'trash',
  'double-up',
  'double-right',
  'double-down',
  'double-left',
  'triangle-up',
  'triangle-right',
  'triangle-down',
  'triangle-left',
  'setting',
  'tag',
  'success',
  'error',
  'info',
  'help',
  'warning',
];

const Item = ({ type }: { type: string }) => {
  return (
    <div className="w-32 h-16 flex flex-col items-center text-gray-08">
      <Icon type={type} fontSize={20} />
      <div className="mt-2">{type}</div>
    </div>
  );
};

export default function IconDemo() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-3">
      {icons.map((item, index) => (
        <Item key={index} type={item} />
      ))}
    </div>
  );
}
