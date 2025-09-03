import { Form, Table } from "antd";
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
  const dispatch = useDispatch();
  const formbuilderRes = useSelector((state) => state.form) || []; // redux array
  const [disabled, setDisabled] = useState({
    dropdown: false,
    minLength: false,
    maxLength: false
  })

  const [formName, setFormName] = useState("");

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
    dispatch(formBuilder(values));
    form.resetFields();
  };

  // table column setup
  const columns = [
    { title: "Field Name", dataIndex: "fieldName", key: "fieldName" },
    { title: "Field Type", dataIndex: "fieldType", key: "fieldType" },
    { title: "Label", dataIndex: "Label", key: "Label" },
    { title: "Placeholder", dataIndex: "placeHolder", key: "placeHolder" },
    { title: "Min Length", dataIndex: "minLength", key: "minLength" },
    { title: "Max Length", dataIndex: "maxLength", key: "maxLength" },
    {
      title: "Options",
      dataIndex: "options",
      key: "options",
      render: (options) => (options ? options.join(", ") : "-"),
    },
  ];

  const handleFieldTypeChange = (value) => {
    if (["text", "textarea", "password"].includes(value)) {
      setDisabled({
        minLength: false,
        maxLength: false,
      });
    } else if (["dropdown", "radio", "checkbox"].includes(value)) {
      setDisabled({
        minLength: true,
        maxLength: true,
      });
    } else {
      setDisabled({
        dropdown: true,
        minLength: true,
        maxLength: true,
      });
    }
  };
  return (
    <AntdCard title="Form Builder">
      {/* Form Name Row */}
      <AntdRow gutter={[16, 16]}>
        <AntdCol xs={24} sm={12} md={8}>
          <Form.Item
            label="Form Name"
            required
            tooltip="Enter a unique form name"
          >
            <AntdInput
              placeholder="Enter Form Name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              disabled={Object.keys(formbuilderRes).length > 0}
            />
          </Form.Item>
        </AntdCol>

      </AntdRow>

      {/* Fields Form */}
      <Form form={form} layout="vertical" onFinish={onFinish}>
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


          <AntdCol xs={24} sm={12} md={8}>
            <Form.Item
              name="dropdownOptions"
              label={"Dropdown Options"
              }
              rules={[{ required: !disabled?.text, message: "Please enter options" }]}
            >
              <AntdDropdown
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Type and press Enter to add options"
                disabled={disabled?.dropdown}
              />
            </Form.Item>
          </AntdCol>


          <AntdCol xs={24} sm={12} md={4}>
            <Form.Item
              name="minLength"
              label="Min Length"
              rules={[{ required: true, message: "Please enter min length" }]}
            >
              <AntdNumberInput disabled={disabled?.minLength} />
            </Form.Item>
          </AntdCol>

          <AntdCol xs={24} sm={12} md={4}>
            <Form.Item
              name="maxLength"
              label="Max Length"
              rules={[{ required: true, message: "Please enter max length" }]}
            >
              <AntdNumberInput disabled={disabled?.maxLength} />

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

        <AntdRow gutter={[16, 16]}>
          <AntdCol>
            <AntdButton type="primary" htmlType="submit">
              Add Field
            </AntdButton>
          </AntdCol>
        </AntdRow>
      </Form>

      <Table
        columns={columns}
        dataSource={formbuilderRes}
        rowKey={(record, index) => index}
        pagination={false}
        style={{ marginTop: "20px" }}
      />
    </AntdCard>
  );
}
