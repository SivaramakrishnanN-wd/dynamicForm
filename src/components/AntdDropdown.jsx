// AntdDropdown.jsx
import React from "react";
import { Select } from "antd";

const { Option, OptGroup } = Select;

const AntdDropdown = ({
  value,
  onChange,
  defaultValue,
  options,
  placeholder,
  mode,
  allowClear,
  disabled,
  size,
  bordered,
  style,
  className,
  filterOption,
  optionFilterProp = "children",
  ...rest
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      mode={mode} 
      allowClear={allowClear}
      disabled={disabled}
      size={size}
      bordered={bordered}
      style={style}
      className={className}
      showSearch 
      optionFilterProp={optionFilterProp}
      filterOption={
        filterOption ||
        ((input, option) =>
          (option?.label ?? option?.children)
            .toLowerCase()
            .includes(input.toLowerCase()))
      }
      {...rest}
    >
      {options?.map((opt) =>
        opt.options ? (
          <OptGroup key={opt.label} label={opt.label}>
            {opt.options.map((o) => (
              <Option key={o.value} value={o.value}>
                {o.label}
              </Option>
            ))}
          </OptGroup>
        ) : (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        )
      )}
    </Select>
  );
};

export default AntdDropdown;
