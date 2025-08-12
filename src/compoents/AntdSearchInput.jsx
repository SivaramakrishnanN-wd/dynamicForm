// AntdSearchInput.jsx
import React from "react";
import { Input } from "antd";

const { Search } = Input;

const AntdSearchInput = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  allowClear = true,
  enterButton = false,
  disabled,
  size,
  bordered,
  style,
  className,
  ...rest
}) => {
  return (
    <Search
      value={value}
      onChange={onChange}
      onSearch={onSearch}
      placeholder={placeholder}
      allowClear={allowClear}
      enterButton={enterButton}
      disabled={disabled}
      size={size}
      bordered={bordered}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdSearchInput;
