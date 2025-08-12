// AntdEmailInput.jsx
import React from "react";
import { Input } from "antd";

const AntdEmailInput = ({
  value,
  onChange,
  placeholder = "Enter email",
  allowClear,
  disabled,
  size,
  bordered,
  style,
  className,
  ...rest
}) => {
  return (
    <Input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      allowClear={allowClear}
      disabled={disabled}
      size={size}
      bordered={bordered}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdEmailInput;
