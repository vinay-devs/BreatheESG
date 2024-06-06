import { Button, ConfigProvider, Table, TableColumnsType } from "antd";

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
      render: (val: boolean) =>
        val ? <p style={{ color: "green", fontWeight: 400 }}>View</p> : "-",
      align: "left",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  defaultBorderColor: "none",
                },
              },
            }}
          >
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#9c9a9a"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path
                        d="M18,3c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM18,17c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM6,10c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2z"
                        opacity="0.3"
                      ></path>
                      <path d="M18,8c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM18,4c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1zM18,22c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM18,18c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1zM6,15c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM6,11c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1z"></path>
                      <path
                        transform="translate(-2.64886,7.19952) rotate(-30.243)"
                        d="M7.1,7.5h9.9v2h-9.9z"
                      ></path>
                      <path
                        transform="translate(-7.43534,18.04796) rotate(-59.748)"
                        d="M11,10.6h2v9.9h-2z"
                      ></path>
                    </g>
                  </g>
                </svg>
              }
            ></Button>
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 100 100"
                >
                  <path d="M 46 13 C 44.35503 13 43 14.35503 43 16 L 43 18 L 32.265625 18 C 30.510922 18 28.879517 18.922811 27.976562 20.427734 L 26.433594 23 L 23 23 C 20.802666 23 19 24.802666 19 27 C 19 29.197334 20.802666 31 23 31 L 24.074219 31 L 27.648438 77.458984 C 27.88773 80.575775 30.504529 83 33.630859 83 L 66.369141 83 C 69.495471 83 72.11227 80.575775 72.351562 77.458984 L 75.925781 31 L 77 31 C 79.197334 31 81 29.197334 81 27 C 81 24.802666 79.197334 23 77 23 L 73.566406 23 L 72.023438 20.427734 C 71.120481 18.922811 69.489078 18 67.734375 18 L 57 18 L 57 16 C 57 14.35503 55.64497 13 54 13 L 46 13 z M 46 15 L 54 15 C 54.56503 15 55 15.43497 55 16 L 55 18 L 45 18 L 45 16 C 45 15.43497 45.43497 15 46 15 z M 32.265625 20 L 43.832031 20 A 1.0001 1.0001 0 0 0 44.158203 20 L 55.832031 20 A 1.0001 1.0001 0 0 0 56.158203 20 L 67.734375 20 C 68.789672 20 69.763595 20.551955 70.306641 21.457031 L 71.833984 24 L 68.5 24 A 0.50005 0.50005 0 1 0 68.5 25 L 73.5 25 L 77 25 C 78.116666 25 79 25.883334 79 27 C 79 28.116666 78.116666 29 77 29 L 23 29 C 21.883334 29 21 28.116666 21 27 C 21 25.883334 21.883334 25 23 25 L 27 25 L 61.5 25 A 0.50005 0.50005 0 1 0 61.5 24 L 28.166016 24 L 29.693359 21.457031 C 30.236405 20.551955 31.210328 20 32.265625 20 z M 64.5 24 A 0.50005 0.50005 0 1 0 64.5 25 L 66.5 25 A 0.50005 0.50005 0 1 0 66.5 24 L 64.5 24 z M 26.078125 31 L 73.921875 31 L 70.357422 77.306641 C 70.196715 79.39985 68.46881 81 66.369141 81 L 33.630859 81 C 31.53119 81 29.803285 79.39985 29.642578 77.306641 L 26.078125 31 z M 38 35 C 36.348906 35 35 36.348906 35 38 L 35 73 C 35 74.651094 36.348906 76 38 76 C 39.651094 76 41 74.651094 41 73 L 41 38 C 41 36.348906 39.651094 35 38 35 z M 50 35 C 48.348906 35 47 36.348906 47 38 L 47 73 C 47 74.651094 48.348906 76 50 76 C 51.651094 76 53 74.651094 53 73 L 53 69.5 A 0.50005 0.50005 0 1 0 52 69.5 L 52 73 C 52 74.110906 51.110906 75 50 75 C 48.889094 75 48 74.110906 48 73 L 48 38 C 48 36.889094 48.889094 36 50 36 C 51.110906 36 52 36.889094 52 38 L 52 63.5 A 0.50005 0.50005 0 1 0 53 63.5 L 53 38 C 53 36.348906 51.651094 35 50 35 z M 62 35 C 60.348906 35 59 36.348906 59 38 L 59 39.5 A 0.50005 0.50005 0 1 0 60 39.5 L 60 38 C 60 36.889094 60.889094 36 62 36 C 63.110906 36 64 36.889094 64 38 L 64 73 C 64 74.110906 63.110906 75 62 75 C 60.889094 75 60 74.110906 60 73 L 60 47.5 A 0.50005 0.50005 0 1 0 59 47.5 L 59 73 C 59 74.651094 60.348906 76 62 76 C 63.651094 76 65 74.651094 65 73 L 65 38 C 65 36.348906 63.651094 35 62 35 z M 38 36 C 39.110906 36 40 36.889094 40 38 L 40 73 C 40 74.110906 39.110906 75 38 75 C 36.889094 75 36 74.110906 36 73 L 36 38 C 36 36.889094 36.889094 36 38 36 z M 59.492188 41.992188 A 0.50005 0.50005 0 0 0 59 42.5 L 59 44.5 A 0.50005 0.50005 0 1 0 60 44.5 L 60 42.5 A 0.50005 0.50005 0 0 0 59.492188 41.992188 z"></path>
                </svg>
              }
              onClick={() => console.log(record)}
            ></Button>
          </ConfigProvider>
        </div>
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
        ]}
      />
    </div>
  );
};

export default DataEntry;
