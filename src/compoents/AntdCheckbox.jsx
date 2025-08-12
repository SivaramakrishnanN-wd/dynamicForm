// AntdCheckbox.jsx
import React from "react";
import { Checkbox } from "antd";

const AntdCheckbox = ({
  checked,
  onChange,
  defaultChecked,
  children,
  disabled,
  indeterminate,
  style,
  className,
  ...rest
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      defaultChecked={defaultChecked}
      disabled={disabled}
      indeterminate={indeterminate}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

export default AntdCheckbox;
