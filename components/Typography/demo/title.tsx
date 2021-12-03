/**
 * title.zh-CN: Typography.Title是使用
 * desc.zh-CN: 一般用于标题，分大中小。
 */

import React from 'react';
import { Typography } from 'xm-design';

function TypographyTitleDemo() {
  return (
    <div className="flex flex-col gap-y-2">
      <Typography.Title block level={1}>
        大标题，字体为18px
      </Typography.Title>
      <Typography.Title block level={2}>
        中标题，字体为16px
      </Typography.Title>
      <Typography.Title block level={3}>
        小标题，字体为14px
      </Typography.Title>
    </div>
  );
}

export default TypographyTitleDemo;
