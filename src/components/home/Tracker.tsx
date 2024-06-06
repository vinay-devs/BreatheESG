import Table, { ColumnsType } from "antd/es/table";
import TrackerHeader from "./TrackerHeader";
import { Flex, Input } from "antd";
import {
  ArrowDownOutlined,
  FilterFilled,
  SearchOutlined,
} from "@ant-design/icons";
interface DataType {
  key: React.Key;
  month: string;
  status: string;
  completion: string;
  bu: string;
}

const data: DataType[] = [
  {
    key: 0,
    month: "Jan 2023",
    status: "PENDING APPROVAL(1/12)",
    completion: "20%",
    bu: "Business Unit 1",
  },
  {
    key: 1,
    month: "Feb 2023",
    status: "APPROVED (2/12)",
    completion: "30%",
    bu: "Business Unit 1",
  },
  {
    key: 2,
    month: "March 223",
    status: "INCOMPLETE(4/12)",
    completion: "50%",
    bu: "Business Unit 1",
  },
];

const TableTitle = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <p>{name}</p>
      {icon}
    </div>
  );
};

const columns: ColumnsType<DataType> = [
  {
    title: <TableTitle name="MONTH" icon={<ArrowDownOutlined />} />,
    dataIndex: "month",
    align: "start",
  },
  {
    title: <TableTitle name="STATUS" icon={<ArrowDownOutlined />} />,
    dataIndex: "status",
    align: "start",
    render: (val: string) => (
      <span
        style={{
          color: val.includes("PENDING")
            ? "red"
            : val.includes("APPROVED")
            ? "green"
            : "orange",
          padding: "4px",
          fontSize: "12px",
          backgroundColor: val.includes("PENDING")
            ? "rgba(255,0,0,0.1)"
            : val.includes("APPROVED")
            ? "rgba(0,255,0,0.1)"
            : "rgba(255, 165, 0, 0.1)",
          borderRadius: "4px",
        }}
      >
        {val}
      </span>
    ),
  },
  {
    title: <TableTitle name="COMPLETION %" icon={<ArrowDownOutlined />} />,
    dataIndex: "completion",
    align: "start",
  },
  {
    title: <TableTitle name="BUSINESS UNIT " icon={<FilterFilled />} />,
    dataIndex: "bu",
    align: "start",
  },
];
const Tracker = () => {
  return (
    <Flex vertical gap={30}>
      <TrackerHeader />
      <div style={{ width: "50%" }}>
        <Input
          style={{ padding: "10px" }}
          placeholder="Search for a business unit"
          prefix={<SearchOutlined />}
        />
      </div>
      <Table columns={columns} dataSource={data} />
    </Flex>
  );
};

export default Tracker;
