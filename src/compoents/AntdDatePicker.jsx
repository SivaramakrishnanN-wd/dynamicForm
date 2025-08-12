// AntdDatePicker.jsx
import React from "react";
import { DatePicker } from "antd";

const AntdDatePicker = ({
  value,
  onChange,
  defaultValue,
  placeholder,
  format = "YYYY-MM-DD",
  showTime = false,
  picker, // "date" | "week" | "month" | "quarter" | "year"
  allowClear,
  disabled,
  size,
  bordered,
  style,
  className,
  ...rest
}) => {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      format={format}
      showTime={showTime}
      picker={picker}
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

export default AntdDatePicker;
