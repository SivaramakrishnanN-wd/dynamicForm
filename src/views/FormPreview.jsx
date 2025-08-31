import React from "react";
import { Form } from "antd";
import { useSelector } from "react-redux";

import AntdButton from "../components/AntdButton";
import AntdCheckbox from "../components/AntdCheckbox";
import AntdDatePicker from "../components/AntdDatePicker";
import AntdDropdown from "../components/AntdDropdown";
import AntdEmailInput from "../components/AntdEmailInput";
import AntdInput from "../components/AntdInput";
import AntdMobileInput from "../components/AntdMobileInput";
import AntdNumberInput from "../components/AntdNumberInput";
import AntdPasswordInput from "../components/AntdPasswordInput";
import AntdRadioGroup from "../components/AntdRadioGroup";
import AntdSearchInput from "../components/AntdSearchInput";
import AntdTextArea from "../components/AntdTextArea";
import AntdToggle from "../components/AntdToggle";
import AntdUpload from "../components/AntdUpload";
import AntdRow from "../components/AntdRow";
import AntdCol from "../components/AntdCol";
import './FormPreview.css'

const FormPreview = () => {
  const [form] = Form.useForm();
  const data = useSelector((state) => state.form);

  const renderField = (field) => {
    const commonProps = {
      placeholder: field.placeHolder,
      minLength: field.minLength,
      maxLength: field.maxLength,
    };

    switch (field.fieldType) {
      case "text": return <AntdInput {...commonProps} />;
      case "email": return <AntdEmailInput {...commonProps} />;
      case "password": return <AntdPasswordInput {...commonProps} />;
      case "mobile": return <AntdMobileInput {...commonProps} />;
      case "number": return <AntdNumberInput {...commonProps} />;
      case "dropdown":
        return (
          <AntdDropdown
            {...commonProps}
            options={field.dropdownOptions?.map(opt => ({ label: opt, value: opt }))}
          />
        );
      case "checkbox": return <AntdCheckbox options={field.option || []} />;
      case "radio": return <AntdRadioGroup options={field.option || []} />;
      case "date": return <AntdDatePicker {...commonProps} />;
      case "upload": return <AntdUpload />;
      case "toggle": return <AntdToggle />;
      case "textarea": return <AntdTextArea {...commonProps} />;
      case "search": return <AntdSearchInput {...commonProps} />;
      default: return null;
    }
  };

  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <div className="form-preview-wrapper">
      <div className="form-a4-sheet">
        <h2 className="form-title">{data?.[0]?.formName}</h2>
        <Form form={form} layout="vertical" className="custom-form" onFinish={onFinish}>
          <AntdRow gutter={[24, 24]}>
            {data.map((field, index) => (
              <AntdCol xs={24} sm={12} md={8} key={index}>
                <Form.Item
                  name={field.fieldName}
                  label={field.Label}
                  rules={[{ required: true, message: `Please enter ${field.Label}` }]}
                  className="form-item"
                >
                  {renderField(field)}
                </Form.Item>
              </AntdCol>
            ))}
          </AntdRow>

          <div className="form-submit">
            <AntdButton type="primary" htmlType="submit">
              Submit
            </AntdButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormPreview;
