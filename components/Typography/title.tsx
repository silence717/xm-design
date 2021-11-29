import React, { ReactElement } from 'react';
import classnames from 'classnames';

interface Props {
  level?: number;
  block?: boolean;
  className?: string;
  children: string | ReactElement;
}

const FONT_SIZE: { [key: number]: string } = {
  // 18px
  1: 'text-lg',
  // 16px
  2: 'text-base',
  // 14px
  3: 'text-sm',
};

export default function Title(props: Props) {
  const { level = 2, children, block = false, className = '' } = props;
  const classes = classnames(
    `text-gray-09 font-semibold ${FONT_SIZE[level]}`,
    className,
  );
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
