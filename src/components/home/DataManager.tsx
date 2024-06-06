import { useState } from "react";
import MainHeader from "./MainHeader";
import TabHeader from "./TabHeader";
import DataEntry from "./dataentry/DataEntry";
import Tracker from "./tracker/Tracker";
import { Flex } from "antd";

const DataManager = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  return (
    <Flex vertical gap={20}>
      <MainHeader />
      <TabHeader setActiveTab={setActiveTab} />
      {activeTab === "1" ? <DataEntry /> : <Tracker />}
    </Flex>
  );
};

export default DataManager;
