import { useState } from "react";
import MainHeader from "./MainHeader";
import TabHeader from "./TabHeader";
import DataEntry from "./DataEntry";
import Tracker from "./Tracker";

const DataManager = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  return (
    <div>
      <MainHeader />
      <TabHeader setActiveTab={setActiveTab} />
      {activeTab === "1" ? <DataEntry /> : <Tracker />}
    </div>
  );
};

export default DataManager;
