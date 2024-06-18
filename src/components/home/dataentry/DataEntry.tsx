import { DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Modal,
  Table,
  TableColumnsType,
} from "antd";
import { AssessmentDataType } from "../../../types";
import { useState } from "react";
type AddAssementType = {
  assessment: string;
  type: string;
  nos: number;
  score: number;
  rc: string;
  result: boolean;
};

const DataEntry = () => {
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

  const [dataResourse, setDataResource] = useState([]);
  console.log(dataResourse);
  function handleOnFinish(values: AddAssementType) {
    console.log(values);

    const addKeyToValues = {
      ...values,
      key: JSON.stringify(Math.ceil(Math.random() * 100)),
    };
    console.log(addKeyToValues);
    setDataResource((prev) => {
      return [{ ...prev, addKeyToValues }];
    });
  }
  const [modalWindow, setModalWindow] = useState<boolean>(false);
  console.log(modalWindow);

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

  return (
    <div>
      <Button onClick={() => setModalWindow(true)}>Add</Button>
      <Modal open={modalWindow} onClose={() => setModalWindow(false)}>
        <Form onFinish={handleOnFinish}>
          <Flex vertical gap={4}>
            <Form.Item label={"Assesment"} name={"assessment"}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label={"Type"} name={"type"}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label={"nos"} name={"nos"}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label={"score"} name={"score"}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label={"Rc"} name={"rc"}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label={"Status"} name={"status"}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label={"Result"} name={"result"}>
              <Input type="text" />
            </Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Flex>
        </Form>
      </Modal>
      <Table
        style={{ marginTop: "20px", minWidth: "100%" }}
        rowSelection={{ type: "checkbox", ...rowSelection }}
        columns={columns}
        dataSource={dataResourse}
      />
    </div>
  );
};

export default DataEntry;
