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
      visibilityToggle={visibilityToggle}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdPasswordInput;
