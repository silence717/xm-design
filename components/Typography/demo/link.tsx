/**
 * title.zh-CN: Typography.Link使用
 * desc.zh-CN: 一般用于文本类型的超链接，添加disabled使其不可用。
 */

import React from 'react';
import { Typography } from 'xm-design';

function TypographyLinkDemo() {
  const handleClick = () => {
    window.open('https://www.google.com.hk/');
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Typography.Link onClick={handleClick}>google一下</Typography.Link>
      <Typography.Link disabled>点击不可用</Typography.Link>
    </div>
  );
}

export default TypographyLinkDemo;
