import React from 'react';

interface ZebraProps {
  as?: React.ElementType;
  children?: unknown;
  color?: string;
  border?: number;
  colors?: string[];
  padding?: number;
  height?: number;
  style?: React.CSSProperties;
  json?: unknown;
}

export const Zebra = ({
  as: As = 'div',
  children,
  color = '#333',
  border = 0,
  colors = ['#fcfcfc77', '#eeeeee77'],
  padding,
  height,
  style,
  json = null,
  ...other
}: ZebraProps) => (
  <As
    style={{
      background: `repeating-linear-gradient(45deg,${colors[0]},${colors[0]} 10px,${colors[1]} 0,${colors[1]} 20px)`,
      outline: border && color ? `${color} dashed ${border}px` : null,
      padding,
      maxHeight: height,
      color: '#333',
      ...style,
    }}
    {...other}
  >
    {json ? JSON.stringify(json, null, 2) : children}
  </As>
);
