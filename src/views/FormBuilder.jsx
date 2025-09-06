import { Button, Form, Modal, Popconfirm, Table, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AntdCard from "../components/AntdCard";
import AntdCol from "../components/AntdCol";
import AntdDropdown from "../components/AntdDropdown";
import AntdInput from "../components/AntdInput";
import AntdRow from "../components/AntdRow";
import AntdButton from "../components/AntdButton";
import AntdNumberInput from "../components/AntdNumberInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormName, formBuilder, editBuilder, deleteBuilder, resetForm, reorderBuilder } from "../store/slice/formSlice";
import { useNavigate } from "react-router-dom";
import AntdTable from "../components/AntdTable";

export default function FormBuilder() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formbuilderRes = useSelector((state) => state.form) || [];
  const [modelOpen, setModelOpen] = useState(false)
  const [disabled, setDisabled] = useState({
    dropdown: false,
    minLength: false,
    maxLength: false
  })
  const fieldOptions = [
    { value: "text", label: "Text" },
    { value: "number", label: "Number" },
    { value: "email", label: "Email" },
    { value: "password", label: "Password" },
    { value: "Mobile Numb", label: "Mobile Number" },
    { value: "checkbox", label: "Checkbox" },
    { value: "radio", label: "Radio Button" },
    { value: "date", label: "Date Picker" },
    { value: "search", label: "Search Input" },
    { value: "dropdown", label: "Drop Down" },
    { value: "upload", label: "Upload" },
    { value: "toggle", label: "Toggle Switch" },
    { value: "textarea", label: "Text Area" },
  ];
  const handleFieldTypeChange = (value) => {
    if (["text", "textarea", "password"].includes(value)) {
      setDisabled({
        dropdown: true,
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
  const handleFormSubmit = () => {
    form.validateFields()
      .then((values) => {
        if (values.key) {
          dispatch(editBuilder(values));
        } else {
          const key = new Date().getTime();
          values.key = key;
          dispatch(formBuilder(values));
        }

        form.resetFields();
        setModelOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Validation Failed:", errorInfo);
      });
  };

  const handleAdd = () => {
    setModelOpen(true)
  }
  const handleCreateForm = () => {
    navigate("/preview")
  }
  const handleEdit = (record) => {
    // open modal
    setModelOpen(true);

    // set form values
    form.setFieldsValue({
      fieldName: record.fieldName,
      fieldType: record.fieldType,
      dropdownOptions: record.dropdownOptions || [], // in case of dropdown/radio/checkbox
      minLength: record.minLength,
      maxLength: record.maxLength,
      placeHolder: record.placeHolder,
      Label: record.Label,
      key: record.key ? record.key : ''
    });
    handleFieldTypeChange(record.fieldType);

  };
  const handleDelete = (record) => {
    dispatch(deleteBuilder(record.key))
  }
  const handleBack = () =>{
    navigate("/Home")
  }


  const handleFormName = (value) => {
    dispatch(setFormName(value))
  }
  const columns = [
    { title: "Field Name", dataIndex: "fieldName", key: "fieldName" },
    {
      title: "Field Type", dataIndex: "fieldType", key: "fieldType", render: (value) => {
        const option = fieldOptions.find((opt) => opt.value === value);
        return option ? option.label : value;
      },
    },
    { title: "Label", dataIndex: "Label", key: "Label" },
    { title: "Placeholder", dataIndex: "placeHolder", key: "placeHolder" },
    { title: "Min Length", dataIndex: "minLength", key: "minLength", render: (text) => (text ? text : "-"), },
    { title: "Max Length", dataIndex: "maxLength", key: "maxLength", render: (text) => (text ? text : "-"), },
    {
      title: "Options",
      dataIndex: "dropdownOptions",
      key: "options",
      render: (options) => (options ? options.join(", ") : "-"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (<>
        <Tooltip title="Edit">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
        </Tooltip>

        <Tooltip title="Delete">
          <Popconfirm
            title="Are you sure you want to delete this field?"
            onConfirm={() => handleDelete(record)}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Tooltip>

      </>

      ),
    },
  ];


  return (
    <>
      <div style={{ width: "100%" }}>
        <AntdCard title="Form Builder">
          <AntdRow gutter={[16, 16]}>
            <AntdCol xs={24} sm={12} md={8}>
              <AntdInput
                placeholder="Enter Form Name"
                value={formbuilderRes?.formName}
                onChange={(e) => handleFormName(e.target.value)}
                disabled={Object.keys(formbuilderRes.fields).length > 0}
              />
            </AntdCol>
            <AntdCol xs={24} sm={12} md={6}>
              <AntdButton type="primary" onClick={handleAdd} disabled={formbuilderRes?.formName.length < 0}>
                Add Field
              </AntdButton>
            </AntdCol>
          </AntdRow>

          {/* Fields Form */}
          <Modal
            title="Add Field"
            open={modelOpen}
            onOk={() => handleFormSubmit()}
            onCancel={() => setModelOpen(false)}
            okText="Save"
            cancelText="Cancel"
            destroyOnClose={true}
            maskClosable={false}
            centered
            width={800}
          // footer={true}
          >
            <Form form={form} layout="vertical">
              <AntdRow gutter={[16, 16]} align="middle">
                <Form.Item name="key" hidden>
                  <input type="hidden" />
                </Form.Item>
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
                    rules={[{ required: !disabled?.dropdown, message: "Please enter options" }]}
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
                    rules={[{ required: !disabled?.minLength, message: "Please enter min length" }]}
                  >
                    <AntdNumberInput disabled={disabled?.minLength} />
                  </Form.Item>
                </AntdCol>

                <AntdCol xs={24} sm={12} md={4}>
                  <Form.Item
                    name="maxLength"
                    label="Max Length"
                    rules={[{ required: !disabled?.minLength, message: "Please enter max length" }]}
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

              </AntdRow>
            </Form>
          </Modal>
          <AntdTable
            columns={columns}
            dataSource={formbuilderRes?.fields}
            setDataSource={(newData) => dispatch(reorderBuilder(newData))} // 🔑 local state now
            scroll={{ x: 1000 }}
            enableDrag={true}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "3%", gap: "2%" }}>
            <AntdButton type="" onClick={handleBack}>
              Cancel
            </AntdButton>
            <AntdButton type="primary" onClick={handleCreateForm}>
              Save & Preview Form
            </AntdButton>
          </div>
        </AntdCard>
      </div>
    </>
  );
}
