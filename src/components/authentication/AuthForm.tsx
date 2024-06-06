import { Form, Input, Button } from "antd";
import Title from "antd/es/typography/Title";
import GoogleButton from "react-google-button";
import { GithubOutlined } from "@ant-design/icons";
import {
  siginWithEmailPassword,
  signInWithGoogle,
  signinWithGithub,
  signupWithEmailPassword,
} from "../../services/auth";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../app/features/user";
import { useNavigate } from "react-router-dom";
import { SignupFormProps } from "../../types";

const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleGoogleButton = async () => {
    await signInWithGoogle()
      .then(async (user) => {
        if (!user) return;
        dispatch(setUser(user));
      })
      .then(() => {
        navigate("/user/data-manager");
      })
      .catch((error) => {
        throw new Error(`Google Signin failed ${error}`);
      });
  };
  const handleGithubButton = async () => {
    await signinWithGithub()
      .then(async (user) => {
        if (!user) return;
        dispatch(setUser(user));
      })
      .then(() => {
        navigate("/user/data-manager");
      })
      .catch((error) => {
        throw new Error(`Github Signin failed ${error}`);
      });
  };
  const onFinish = async (values: SignupFormProps) => {
    if (mode === "signup") {
      await signupWithEmailPassword(values.email, values.password)
        .then(async (user) => {
          if (!user) return;
          dispatch(setUser(user));
        })
        .then(() => {
          navigate("/user/data-manager");
        })
        .catch((error) => {
          throw new Error(`Signup failed ${error}`);
        });
    } else {
      await siginWithEmailPassword(values.email, values.password)
        .then(async (user) => {
          if (!user) return;
          dispatch(setUser(user));
        })
        .then(() => {
          navigate("/user/data-manager");
        })
        .catch((error) => {
          throw new Error(`Signin failed ${error}`);
        });
    }
  };

  return (
    <div className="signup-form">
      <Title level={2} style={{ color: "white" }}>
        {mode == "signin" ? "Sign In" : "Sign Up"}
      </Title>
      <Form onFinish={onFinish} layout="vertical" requiredMark={true}>
        <Form.Item
          name="email"
          label={<label style={{ color: "white" }}>Email</label>}
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address",
            },
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input placeholder="Your Email ID" />
        </Form.Item>

        <Form.Item
          name="password"
          label={<label style={{ color: "white" }}>Password</label>}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        {mode === "signup" && (
          <Form.Item
            name="confirmPassword"
            label={<label style={{ color: "white" }}>Confirm Password</label>}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        )}
        {mode === "signin" && (
          <div>
            <Form.Item>
              <GoogleButton
                style={{ width: "100%" }}
                onClick={handleGoogleButton}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={handleGithubButton}
                style={{
                  width: "100%",
                  padding: "20px",
                  backgroundColor: "black",
                  color: "white",
                  border: 0,
                }}
              >
                <GithubOutlined />
                Sign in with GitHub
              </Button>
            </Form.Item>
          </div>
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#2E9844",
              width: "100%",
              borderRadius: "0px",
            }}
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
