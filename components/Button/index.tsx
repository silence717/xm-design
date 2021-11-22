import React, { ReactChildren } from 'react';
import classnames from 'classnames';

import './index.less';

const prefixCls = 'xm';

interface ButtonProps {
  type?: string;
  size?: string;
  href?: string;
  block?: string;
  loading?: boolean;
  target?: string;
  disabled?: boolean;
  htmlType?: string;
  className?: string;
  children?: ReactChildren | string;
}

function Button(props: ButtonProps) {
  const {
    type = 'normal',
    size = 'default',
    href = '',
    block = false,
    loading = false,
    target = '',
    disabled = false,
    htmlType = 'button',
    className = '',
    children,
    ...others
  } = props;

  const ElementName = href ? 'a' : 'button';
  const classNames = classnames(
    `${prefixCls}-button`,
    {
      [type]: true,
      [size]: true,
      block,
    },
    className,
  );

  return (
    <ElementName
      // @ts-ignore
      type="button"
      className={classNames}
      disabled={disabled || loading}
      {...{
        ...others,
        href: href || undefined,
        type: href ? undefined : htmlType,
        target: href ? target : undefined,
      }}
    >
      {loading && <span className={`${prefixCls}-button-loading`} />}
      {children}
    </ElementName>
  );
}

export default Button;
