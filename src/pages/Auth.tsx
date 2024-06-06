import { Flex } from "antd";
import "../styles/signup.scss";
import AuthQuote from "../components/authentication/AuthQuote";
import AuthForm from "../components/authentication/AuthForm";
import Earth from "../assets/images/Earth.png";

const Auth = ({ mode }: { mode: "signin" | "signup" }) => {
  return (
    <div className="signup-container">
      <Flex
        style={{ height: "100%" }}
        justify={"space-around"}
        align={"center"}
      >
        <AuthQuote mode={mode} />
        <div className="signup-form-container">
          <img src={Earth} height={"150px"} />
          {mode === "signin" ? (
            <AuthForm mode={mode} />
          ) : (
            <AuthForm mode={mode} />
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Auth;
