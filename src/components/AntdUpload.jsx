// AntdUpload.jsx
import React from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AntdUpload = ({
  fileList,
  onChange,
  multiple,
  accept,
  showUploadList = true,
  disabled,
  action, // URL for uploading
  beforeUpload,
  style,
  className,
  buttonText = "Click to Upload",
  ...rest
}) => {
  return (
    <Upload
      fileList={fileList}
      onChange={onChange}
      multiple={multiple}
      accept={accept}
      showUploadList={showUploadList}
      disabled={disabled}
      action={action}
      beforeUpload={beforeUpload}
      style={style}
      className={className}
      {...rest}
    >
      <Button icon={<UploadOutlined />}>{buttonText}</Button>
    </Upload>
  );
};

export default AntdUpload;
