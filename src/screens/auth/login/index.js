import { Form, Input, Button } from "antd";
import Style from "./style";

const { Item } = Form;
export function Login() {
  const [form] = Form.useForm();
  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <Style>
      <img className="logo" src="assest/images/logo.svg" />
      <Form form={form} onFinish={handleSubmit}>
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
        <Item>
          <Button type="primary" block htmlType="submit">
            login
          </Button>
        </Item>
      </Form>
    </Style>
  );
}
export default Login;
