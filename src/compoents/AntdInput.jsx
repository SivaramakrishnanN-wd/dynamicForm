// AntdInput.jsx
import React from "react";
import { Input } from "antd";

const AntdInput = ({
    value,
    onChange,
    placeholder,
    type,
    name,
    id,
    size,
    disabled,
    allowClear,
    maxLength,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    bordered,
    defaultValue,
    readOnly,
    autoFocus,
    status,
    style,
    className,
    ...rest
}) => {
    return (
        <Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            size={size}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
            prefix={prefix}
            suffix={suffix}
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            bordered={bordered}
            defaultValue={defaultValue}
            readOnly={readOnly}
            autoFocus={autoFocus}
            status={status}
            style={style}
            className={className}
            {...rest} // in case AntD adds new props in future
        />
    );
};

export default AntdInput;
