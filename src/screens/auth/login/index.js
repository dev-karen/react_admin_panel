import { Form, Input, Button, Checkbox } from "antd";
import Style from "./style";
import { postRequest } from "api";
import { POST_API_URL } from "./constants";
import { useState } from "react";
import {
  useUserTokenStateDispatcher,
  userTokenAction,
  useUserTokenState,
} from "context/userToken";
import { useHistory } from "react-router-dom";
import { DASHBOARD_ROUTE } from "routes/constants";
import { LOCAL_STORAGE_TOKEN_KEY } from "src/constants";
const { Item } = Form;
export function Login() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useHistory();
  const tokenDispatcher = useUserTokenStateDispatcher();
  const tokenState = useUserTokenState();
  async function handleSubmit(formValues) {
    try {
      setLoading(true);

      const response = await postRequest(POST_API_URL, formValues);
      console.log("response", response);
      userTokenAction(tokenDispatcher, {
        type: "LOGIN_SUCCESS",
        payload: response.data.data.accessToken,
      });
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_KEY,
        response.data.data.accessToken
      );
      navigate.push(DASHBOARD_ROUTE);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error handleSubmit : " + JSON.stringify(error));
    }
  }

  return (
    <Style>
      <img className="logo" src="assest/images/logo.svg" />
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={{ remember: false }}
      >
        <Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "The input is not valid email" },
          ]}
        >
          <Input placeholder="please enter your email" />
        </Item>
        <Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            visibilityToggle={true}
            placeholder="please your password"
          />
        </Item>
        <Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Item>
        <Item>
          <Button type="primary" block htmlType="submit" loading={loading}>
            login
          </Button>
        </Item>
      </Form>
    </Style>
  );
}
export default Login;
