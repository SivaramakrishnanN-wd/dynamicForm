// AntdCard.jsx
import React from "react";
import { Card } from "antd";

const AntdCard = ({
  title,
  extra,
  children,
  bordered = true,
  hoverable = false,
  loading = false,
  style,
  className,
  cover, // ReactNode for images or banners
  actions, // footer actions
  ...rest
}) => {
  return (
    <Card
      title={title}
      extra={extra}
      bordered={bordered}
      hoverable={hoverable}
      loading={loading}
      style={style}
      className={className}
      cover={cover}
      actions={actions}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default AntdCard;
