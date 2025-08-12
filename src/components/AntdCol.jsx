// AntdCol.jsx
import React from "react";
import { Col } from "antd";

const AntdCol = ({
    span = 24, // Default full width
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    style,
    className,
    ...rest
}) => {
    return (
        <Col
            span={span}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            xxl={xxl}
            style={style}
            className={className}
            {...rest}
        >
            {children}
        </Col>
    );
};

export default AntdCol;
