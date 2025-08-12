import { Form } from "antd";
import AntdCard from "../components/AntdCard";
import AntdCol from "../components/AntdCol";
import AntdDropdown from "../components/AntdDropdown";
import AntdInput from "../components/AntdInput";
import AntdRow from "../components/AntdRow";
import AntdButton from "../components/AntdButton";
import AntdNumberInput from "../components/AntdNumberInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formBuilder } from "../store/slice/formSlice";


export default function FormBuilder() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const formbuilder = useSelector((state) => state.form)?.[0]?.formDetails
  console.log("formbuilder", formbuilder)
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  const fieldOptions = [
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "email", label: "Email" },
    { value: "password", label: "Password" },
    { value: "mobile", label: "Mobile Number" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio Button" },
    { value: "date", label: "Date Picker" },
    { value: "search", label: "Search Input" },
    { value: "dropdown", label: "Drop Down" },
    { value: "upload", label: "Upload" },
    { value: "toggle", label: "Toggle Switch" },
    { value: "textarea", label: "Text Area" },
  ];

  const onFinish = (values) => {
    dispatch(formBuilder(values))
  };
  const handleFieldTypeChange = (value) => {
    if (value === "dropdown") {
      setShowDropdownOptions(true);
    } else {
      setShowDropdownOptions(false);
      form.setFieldsValue({ dropdownOptions: [] });
    }
  };
  return (
    <AntdCard title="Form Builder">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        {/* Form Name */}
        <AntdRow gutter={[16, 16]} align="middle">
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="formName"
              label="Form Name"
              rules={[{ required: true, message: "Please enter form name" }]}
            >
              <AntdInput placeholder="Enter Form Name" />
            </Form.Item>
          </AntdCol>
        </AntdRow>

        {/* Field Name + Type */}
        <AntdRow gutter={[16, 16]} align="middle">
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="fieldName"
              label="Field Name"
              rules={[{ required: true, message: "Please enter field name" }]}
            >
              <AntdInput placeholder="Enter Field Name" />
            </Form.Item>
          </AntdCol>
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="fieldType"
              label="Field Type"
              rules={[{ required: true, message: "Please select field type" }]}
            >
              <AntdDropdown
                placeholder="Select Field Type"
                options={fieldOptions}
                onChange={handleFieldTypeChange}
              />
            </Form.Item>

          </AntdCol>
          {showDropdownOptions && (
            <AntdCol xs={24} sm={12} md={8}>
              <Form.Item
                name="dropdownOptions"
                label="Dropdown Options"
                rules={[{ required: true, message: "Please enter dropdown options" }]}
              >
                <AntdDropdown
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Type and press Enter to add options"
                />
              </Form.Item>
            </AntdCol>

          )}
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="minLength"
              label="Min Length"
              rules={[{ required: true, message: "Please select field type" }]}
            >
              <AntdNumberInput />
            </Form.Item>
          </AntdCol>
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="maxLength"
              label="Max Length"
              rules={[{ required: true, message: "Please select field type" }]}
            >
              <AntdNumberInput />
            </Form.Item>
          </AntdCol>
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="placeHolder"
              label="Placeholder"
              rules={[{ required: true, message: "Please enter Placeholder" }]}
            >
              <AntdInput placeholder="Placeholder" />
            </Form.Item>
          </AntdCol>
          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="Label"
              label="Label"
              rules={[{ required: true, message: "Please enter label" }]}
            >
              <AntdInput placeholder="Enter Label" />
            </Form.Item>
          </AntdCol>
        </AntdRow>

        {/* Submit Button */}
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
}
