import React from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
const FormItem = Form.Item;
class FormLogin extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(
          `${userInfo.username}恭喜你，您通过本次表单组件学习，当前密码为${userInfo.userPwd}`
        );
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" type="password"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" style={{ marginTop: 10 }}>
          <Form layout="horizontal" style={{ width: 300 }}>
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  },
                  {
                    min: 5,
                    max: 10,
                    message: "长度不在范围内"
                  },
                  {
                    pattern: new RegExp("^\\w+$", "g"), // /^\w+$/g
                    message: "用户名必须为英文字母"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="user"></Icon>}
                  placeholder="请输入用户名"
                ></Input>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="lock"></Icon>}
                  placeholder="请输入密码"
                  type="password"
                ></Input>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("rememberMe", {
                valuePropName: "checked",
                initialValue: false,
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(<Checkbox>记住密码</Checkbox>)}
              <a href="#" style={{ float: "right" }}>
                忘记密码
              </a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const Login = Form.create()(FormLogin);

export default Login;
