import React from "react";
import { Form, Input, Button } from "antd";
import Title from "antd/es/typography/Title";

interface SignupFormProps {
  email: string;
  password: string;
  confirmPassword?: string;
}
const AuthForm = ({ mode }: { mode: "signin" | "signup" }) => {
  const onFinish = (values: SignupFormProps) => {
    console.log("Received values:", values);
    // Add your signup logic here
    // console.log("Signup successful", mode);
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
