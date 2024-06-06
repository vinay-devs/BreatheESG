import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Flex, Table, TableColumnsType } from "antd";
import { AssessmentDataType } from "../../../types";

const DataEntry = () => {
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: AssessmentDataType[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  const columns: TableColumnsType<AssessmentDataType> = [
    {
      title: "ASSESSMENT TITLE",
      dataIndex: "assessment",
      align: "left",
    },
    {
      title: "TYPE",
      dataIndex: "type",
      align: "left",
    },
    {
      title: "NO OF SUPPLLIERS",
      dataIndex: "nos",
      align: "left",
    },
    {
      title: "SCORE",
      dataIndex: "score",
      render: () => "-",
      align: "left",
    },
    {
      title: "RISK CLASSIFICATION",
      dataIndex: "rc",
      render: (rc: string) =>
        rc ? (
          <p>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor:
                  rc === "Low" ? "red" : rc === "Medium" ? "orange" : "green",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></span>
            {rc == "Low" ? "Low" : rc == "Medium" ? "Medium" : "High"}
          </p>
        ) : (
          "-"
        ),
      align: "left",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (status: string) =>
        status ? (
          <p
            style={{
              textAlign: "center",
              color: status === "Pending" ? "red" : "green",
              padding: "2px",
              backgroundColor:
                status === "Pending"
                  ? "rgba(255,0,0,0.1)"
                  : "rgba(0,255,0,0.1)",
              borderRadius: "4px",
            }}
          >
            {status}
          </p>
        ) : null,
      align: "left",
    },
    {
      title: "RESULT",
      dataIndex: "result",
      render: (val: boolean) =>
        val ? <p style={{ color: "green", fontWeight: 400 }}>View</p> : "-",
      align: "left",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, record) => (
        <Flex align="center">
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBorderColor: "none",
                },
              },
            }}
          >
            <Button icon={<ShareAltOutlined />}></Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => console.log(record)}
            ></Button>
          </ConfigProvider>
        </Flex>
      ),
      align: "left",
    },
  ];
  const dataSources: AssessmentDataType[] = [
    {
      key: "1",
      assessment: "Assessment 1",
      type: "Type 1",
      nos: 5,
      score: null,
      rc: "Low",
      status: "Pending",
      result: true,
    },

    {
      key: "2",
      assessment: "Assessment 1",
      type: "Type 1",
      nos: 5,
      score: null,
      rc: "Medium",
      status: "Completed",
      result: null,
    },
    {
      key: "3",
      assessment: "Assessment 1",
      type: "Type 1",
      nos: 5,
      score: null,
      rc: "Low",
      status: "Pending",
      result: null,
    },
  ];
  return (
    <div>
      <Table
        style={{ marginTop: "20px", minWidth: "100%" }}
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={dataSources}
      />
    </div>
  );
};

export default DataEntry;
