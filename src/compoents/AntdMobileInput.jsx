// AntdMobileInput.jsx
import React from "react";
import { Input } from "antd";

const AntdMobileInput = ({
  value,
  onChange,
  placeholder = "Enter mobile number",
  allowClear,
  disabled,
  size,
  bordered,
  maxLength = 10,
  style,
  className,
  ...rest
}) => {
  return (
    <Input
      type="tel"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      allowClear={allowClear}
      disabled={disabled}
      size={size}
      bordered={bordered}
      maxLength={maxLength}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdMobileInput;
