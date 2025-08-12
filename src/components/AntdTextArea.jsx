// AntdTextArea.jsx
import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const AntdTextArea = ({
    value,
    onChange,
    placeholder,
    name,
    id,
    rows,
    maxLength,
    showCount,
    disabled,
    autoSize,
    allowClear,
    defaultValue,
    readOnly,
    autoFocus,
    style,
    className,
    ...rest
}) => {
    return (
        <TextArea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={id}
            rows={rows}
            maxLength={maxLength}
            showCount={showCount}
            disabled={disabled}
            autoSize={autoSize}
            allowClear={allowClear}
            defaultValue={defaultValue}
            readOnly={readOnly}
            autoFocus={autoFocus}
            style={style}
            className={className}
            {...rest}
        />
    );
};

export default AntdTextArea;
