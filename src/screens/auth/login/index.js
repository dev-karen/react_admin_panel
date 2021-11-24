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
      <Form form={form} onFinish={handleSubmit}>
        <Item
          name="email"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input placeholder="please enter your email" />
        </Item>
        <Item name="password">
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
