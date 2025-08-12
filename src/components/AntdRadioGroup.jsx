// AntdRadioGroup.jsx
import React from "react";
import { Radio } from "antd";

const AntdRadioGroup = ({
    value,
    onChange,
    options,
    optionType = "default", // "default" | "button"
    buttonStyle = "outline", // "outline" | "solid"
    disabled,
    size,
    style,
    className,
    ...rest
}) => {
    return (
        <Radio.Group
            value={value}
            onChange={onChange}
            options={options}
            optionType={optionType}
            buttonStyle={buttonStyle}
            disabled={disabled}
            size={size}
            style={style}
            className={className}
            {...rest}
        />
    );
};

export default AntdRadioGroup;
