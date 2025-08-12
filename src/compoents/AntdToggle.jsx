// AntdToggle.jsx
import React from "react";
import { Switch } from "antd";

const AntdToggle = ({
  checked,
  onChange,
  defaultChecked,
  checkedChildren,
  unCheckedChildren,
  disabled,
  size,
  loading,
  style,
  className,
  ...rest
}) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      defaultChecked={defaultChecked}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
      disabled={disabled}
      size={size} // "default" | "small"
      loading={loading}
      style={style}
      className={className}
      {...rest}
    />
  );
};

export default AntdToggle;
