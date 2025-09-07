import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { formBuilder, setFormName } from "../store/slice/formSlice";
import Data from "./data.json";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditView = (item, from) => {
    dispatch(setFormName(Data.formName));
    dispatch(formBuilder(Data.fields));
    if (from === "edit") {
      navigate("/builder");
    } else if(from === "view") {
      navigate("/preview");
    }
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
          onClick={() => handleEditView(record, "edit")}
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
          onClick={() => handleEditView(record, "view")}
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
