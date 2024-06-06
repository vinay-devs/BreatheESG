import { Button, ConfigProvider, Flex, Select, Tabs } from "antd";
import DataEntry from "../../assets/images/header/DataEntry.png";
import TrackerIcon from "../../assets/images/header/TrackerIcon.png";

interface TabItem {
  title: string;
  icon: JSX.Element;
}
interface TabHeaderProps {
  setActiveTab: (tab: string) => void;
}
const TabHeader = ({ setActiveTab }: TabHeaderProps) => {
  const TabItems: TabItem[] = [
    {
      title: "DATA ENTRY",
      icon: <img src={DataEntry} />,
    },
    {
      title: "TRACKER",
      icon: <img src={TrackerIcon} />,
    },
  ];
  return (
    <div style={{ paddingTop: "20px" }}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              cardBg: "#f5f5f5",
              itemSelectedColor: "green",
            },
            Button: {
              colorPrimary: "green",
            },
          },
        }}
      >
        <Flex align="center" justify="space-between">
          <Tabs
            onChange={(key) => setActiveTab(key)}
            tabBarStyle={{ backgroundColor: "#f5f5f5", margin: 0 }}
            type="card"
            defaultActiveKey="1"
            items={TabItems.map((tab: TabItem, i) => {
              const id = String(i + 1);
              return {
                key: id,
                label: tab.title,
                icon: tab.icon,
              };
            })}
          ></Tabs>

          <Flex align="center" gap={9}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <h5>For:</h5>
              <Select defaultValue={"FY 2023-24"}></Select>
            </div>

            <Button type="primary">Submit For Aprroval</Button>
          </Flex>
        </Flex>
      </ConfigProvider>
    </div>
  );
};

export default TabHeader;
