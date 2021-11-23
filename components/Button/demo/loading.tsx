/**
 * title.zh-CN: 加载中状态
 * desc.zh-CN: 添加 loading 属性即可让按钮处于加载状态。
 */

import React from 'react';
import { Button } from 'xm-design';

export default function LoadingButton() {
  return (
    <div className="flex gap-2">
      <Button type="primary" loading>
        Primary
      </Button>
      <Button loading>Default</Button>
      <Button type="dashed" loading>
        Dashed
      </Button>
      <Button type="danger" loading>
        Danger
      </Button>
      <Button type="link" loading>
        Dashed
      </Button>
    </div>
  );
}
