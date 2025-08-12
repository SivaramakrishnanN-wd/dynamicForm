// AntdButton.jsx
import React from "react";
import { Button } from "antd";

const AntdButton = ({
    type = "default", // "primary" | "dashed" | "link" | "text" | "default"
    shape, // "circle" | "round"
    size, // "large" | "middle" | "small"
    icon,
    loading = false,
    disabled = false,
    danger = false,
    ghost = false,
    block = false,
    children,
    onClick,
    style,
    className,
    ...rest
}) => {
    return (
        <Button
            type={type}
            shape={shape}
            size={size}
            icon={icon}
            loading={loading}
            disabled={disabled}
            danger={danger}
            ghost={ghost}
            block={block}
            onClick={onClick}
            style={style}
            className={className}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default AntdButton;
