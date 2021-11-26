import React from 'react';
import classnames from 'classnames';
import './index.less';

interface IconProps {
  type: string;
  className?: string;
  color?: string;
  fontSize?: string | number;
  style?: React.CSSProperties;
  // all other props
  [x: string]: any;
}

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { type, className, color, fontSize, style, ...restProps } = props;
  const styles = {
    ...style,
    color: color || style?.color,
    fontSize: fontSize || style?.fontSize,
  };
  return (
    <i
      ref={ref}
      className={classnames(className, `iconfont icon-xm-${type}`)}
      style={styles}
      {...restProps}
    />
  );
});

export default Icon;
