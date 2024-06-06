import { Flex, Select } from "antd";
import Logo from "../../assets/images/Logo.png";
import Title from "antd/es/typography/Title";
import SelectIcon from "../../assets/images/header/selecticon.png";
import BellIcon from "../../assets/images/header/bell.png";
import { useAppSelector } from "../../app/hooks";
const MainHeader = () => {
  const email = useAppSelector((state) => state.email);
  const name = email?.split("@")[0];

  return (
    <>
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
          <div className="avatar">
            <div className="avatar-name">{name?.charAt(0).toUpperCase()}</div>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default MainHeader;
