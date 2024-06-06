import Title from "antd/es/typography/Title";
import LogoName from "../../assets/images/LogoName.jpg";

const AuthQuote = () => {
  return (
    <div className="auth-quote">
      <Title level={5} style={{ color: "white", fontWeight: 200 }}>
        WELCOME TO{" "}
      </Title>
      <img src={LogoName} height={"45px"} width={"300px"} />
      <Title level={5} style={{ color: "#9F9F9F", fontWeight: 200 }}>
        We help you track your organisations <br /> metrics as per the ESG
        Guidelines
      </Title>
      <Title
        level={5}
        style={{ color: "white", fontWeight: 200, fontSize: "14px" }}
      >
        Sounds Interesting?{" "}
        <span style={{ color: "green", cursor: "pointer" }}>Get in touch!</span>
      </Title>
    </div>
  );
};

export default AuthQuote;
