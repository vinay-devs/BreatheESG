import { Button, Radio, Table, TableColumnsType } from "antd";

interface AssessmentDataType {
  key: React.Key;
  assessment: string;
  type: string;
  nos: number;
  score: number | null;
  rc: string;
  status: string;
  result: boolean | null;
}
interface ColumnsType {
  key: React.Key;
  title: string;
  dataIndex: string;

  align: "left";
}
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
        rc === "Low" ? (
          <p>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "red",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></span>
            Low
          </p>
        ) : (
          "High"
        ),
      align: "left",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (status: string) =>
        status === "Pending" ? (
          <p
            style={{
              textAlign: "center",
              color: "red",
              padding: "2px",
              backgroundColor: "rgba(255,0,0,0.1)",
              borderRadius: "4px",
            }}
          >
            Pending
          </p>
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "green",
              padding: "2px",
              backgroundColor: "rgba(0,255,0,0.1)",
              borderRadius: "4px",
            }}
          >
            Completed
          </p>
        ),
      align: "left",
    },
    {
      title: "RESULT",
      dataIndex: "result",
      render: (val: boolean) => (val ? "View" : "-"),
      align: "left",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => console.log(record)}>
          Edit
        </Button>
      ),
      align: "left",
    },
  ];
  return (
    <div>
      <Table
        style={{ marginTop: "20px", minWidth: "100%" }}
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={[
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
            rc: "Low",
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
        ]}
      />
    </div>
  );
};

export default DataEntry;
