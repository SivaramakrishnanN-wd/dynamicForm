// AntdRow.jsx
import React from "react";
import { Row } from "antd";

const AntdRow = ({
  gutter = [16, 16], // Horizontal & vertical spacing
  justify = "start", // "start" | "center" | "end" | "space-around" | "space-between"
  align = "top", // "top" | "middle" | "bottom"
  children,
  style,
  className,
  ...rest
}) => {
  return (
    <Row
      gutter={gutter}
      justify={justify}
      align={align}
      style={style}
      className={className}
      {...rest}
    >
      {children}
    </Row>
  );
};

export default AntdRow;
