// AntdNumberInput.jsx
import React from "react";
import { InputNumber } from "antd";

const AntdNumberInput = ({
  value,
  onChange,
  defaultValue,
  placeholder,
  min,
  max,
  step,
  precision,
  disabled,
  size,
  bordered,
  style,
  className,
  addonBefore,
  addonAfter,
  controls = true, // plus/minus buttons
  ...rest
}) => {
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      precision={precision}
      disabled={disabled}
      size={size}
      bordered={bordered}
      style={style}
      className={className}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      controls={controls}
      {...rest}
    />
  );
};

export default AntdNumberInput;
