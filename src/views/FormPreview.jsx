import React from "react";
import AntdCard from "../components/AntdCard";
import AntdRow from "../components/AntdRow";
import AntdCol from "../components/AntdCol";
import { Form } from "antd";
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

const FormPreview = () => {
  const [form] = Form.useForm();

  const data = [
    { fieldName: "name", fieldType: "text", Label: "Name", placeHolder: "Enter Name" },
    { fieldName: "email", fieldType: "email", Label: "Email", placeHolder: "Enter Email" },
    { fieldName: "password", fieldType: "password", Label: "Password", placeHolder: "Enter Password" },
    { fieldName: "mobile", fieldType: "mobile", Label: "Mobile", placeHolder: "Enter Mobile" },
    { fieldName: "age", fieldType: "number", Label: "Age", placeHolder: "Enter Age" },
    { fieldName: "gender", fieldType: "dropdown", Label: "Gender", placeHolder: "Select Gender", option: ["Male", "Female", "Other"] },
    { fieldName: "dob", fieldType: "date", Label: "Date of Birth", placeHolder: "Select Date" },
    { fieldName: "jobType", fieldType: "radio", Label: "Job Type", option: ["Full Time", "Part Time"] },
    { fieldName: "resume", fieldType: "upload", Label: "Upload Resume" },
    { fieldName: "newsletter", fieldType: "toggle", Label: "Subscribe to Newsletter" },
    { fieldName: "bio", fieldType: "textarea", Label: "Bio", placeHolder: "Write about yourself" },
  ];

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
      case "dropdown": return <AntdDropdown {...commonProps} options={field.option?.map(opt => ({ label: opt, value: opt }))} />;
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
    <AntdCard title={"Preview"}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <AntdRow gutter={[16, 16]} align="middle">
          {data.map((field, index) => (
            <AntdCol xs={24} sm={12} md={8} xl={6} key={index}>
              <Form.Item
                name={field.fieldName}
                label={field.Label}
                rules={[{ required: true, message: `Please enter ${field.Label}` }]}
              >
                {renderField(field)}
              </Form.Item>
            </AntdCol>
          ))}
        </AntdRow>

        <AntdRow gutter={[16, 16]}>
          <AntdCol>
            <AntdButton type="primary" htmlType="submit">
              Save Field
            </AntdButton>
          </AntdCol>
        </AntdRow>
      </Form>
    </AntdCard>
  );
};

export default FormPreview;
