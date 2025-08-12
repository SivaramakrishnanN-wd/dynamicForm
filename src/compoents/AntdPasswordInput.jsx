// AntdPasswordInput.jsx
import React from "react";
import { Input } from "antd";

const AntdPasswordInput = ({
  value,
  onChange,
  placeholder = "Enter password",
  allowClear,
  disabled,
  size,
  bordered,
  visibilityToggle = true,
  style,
  className,
  ...rest
}) => {
  return (
    <Input.Password
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      allowClear={allowClear}
      disabled={disabled}
      size={size}
      bordered={bordered}
      visibilityToggle={visibilityToggle}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdPasswordInput;
