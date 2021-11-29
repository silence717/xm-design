import React, { ReactElement } from 'react';
import cls from 'classnames';

const COLOR: { [key: string]: string } = {
  default: 'text-gray-09',
  success: 'text-green-06',
  danger: 'text-red-06',
  secondary: 'text-gray-08',
  placeholder: 'text-gray-07',
  help: 'text-gray-08',
};

type Type =
  | 'success'
  | 'danger'
  | 'default'
  | 'secondary'
  | 'placeholder'
  | 'help';

interface Props {
  type?: Type;
  block?: boolean;
  className?: string;
  disabled?: boolean;
  children: string | ReactElement;
}

export default function Text(props: Props) {
  const {
    type = 'default',
    disabled = false,
    block = false,
    children,
    className = '',
  } = props;
  const classes = cls(className, {
    'text-gray-06': disabled,
    [COLOR[type]]: !disabled,
    // 12px
    'text-xs': type === 'help',
    // 14px
    'text-sm': type !== 'help',
  });

  return (
    <>
      {block ? (
        <div className={classes}>{children}</div>
      ) : (
        <span className={classes}>{children}</span>
      )}
    </>
  );
}
