import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { formBuilder, setFormName } from "../store/slice/formSlice";
import Data from './data.json'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

  const handleEdit = (item) => {
    dispatch(setFormName(Data.formName))
    dispatch(formBuilder(Data.fields));
    navigate('/builder')
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Created Date", dataIndex: "date", key: "date" },
    { title: "Created By", dataIndex: "createdBy", key: "createdBy" },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      render: (_, record) => (
        <EditOutlined
          style={{ color: "#364d79", cursor: "pointer" }}
          onClick={() => handleEdit(record)}
        />
      ),
    },
    {
      title: "Preview",
      dataIndex: "preview",
      key: "preview",
      render: (_, record) => (
        <EyeOutlined
          style={{ color: "#364d79", cursor: "pointer" }}
          onClick={() => handlePreview(record)}
        />
      ),
    },
  ];

  const data = [
    {
      key: "test1",
      name: "Application Form",
      date: "01-09-2025",
      createdBy: "Marimuthu",
    },
    {
      key: "test2",
      name: "Application Form 1",
      date: "02-09-2025",
      createdBy: "Siva",
    },
  ];

  return (
    <div className="tableContainer" style={{ padding: "20px" }}>
      <h3>Form List</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default LandingPage;
