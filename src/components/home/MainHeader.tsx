import { Flex, Select } from "antd";
import Logo from "../../assets/images/Logo.png";
import Title from "antd/es/typography/Title";
import SelectIcon from "../../assets/images/header/selecticon.png";
import BellIcon from "../../assets/images/header/bell.png";
const MainHeader = () => {
  const name = "John Doe";
  return (
    <div>
      <Flex gap={25} align="center" justify="space-between">
        <Flex gap={25} align="center">
          <img src={Logo} height={20} />
          <Title level={5} style={{ margin: 0, fontWeight: 400 }}>
            View Name
          </Title>
          <Select
            suffixIcon={<img src={SelectIcon} height={20} />}
            labelInValue={true}
            defaultValue={`North India Region`}
            style={{ width: 190, height: 40 }}
          ></Select>
        </Flex>
        <Flex gap={30} align="center">
          <img src={BellIcon} />
          <Title level={5} style={{ margin: 0, fontWeight: 400 }}>
            {name}
          </Title>
          <div
            style={{
              backgroundColor: "black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          ></div>
        </Flex>
      </Flex>
    </div>
  );
};

export default MainHeader;
