import React from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Switch,
  Select,
  Icon,
  DatePicker,
  TimePicker,
  Upload,
  message,
  Checkbox
} from "antd";
import moment from "moment";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component {
  state = {};
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          userImg: imageUrl,
          loading: false
        })
      );
    }
  };
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    this.props.form.validateFields((err, values) => {
        if (!err) {
          message.success(
            `${userInfo.userName}恭喜你，您通过本次表单组件学习，当前密码为${userInfo.userPwd}`
          );
        }
      });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    };
    const rowObject = {
      minRows: 4,
      maxRows: 6
    };
    const offsetLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 12,
          offset: 4
        }
      }
    };
    return (
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("userName", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "用户名不能为空"
                  }
                ]
              })(<Input placeholder="请输入用户名"></Input>)}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("userPwd", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "密码不能为空"
                  }
                ]
              })(<Input placeholder="请输入密码" type="password"></Input>)}
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sexRadio", {
                initialValue: "1"
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18
              })(<InputNumber></InputNumber>)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("currentState", {
                initialValue: "2"
              })(
                <Select>
                  <Option value="1">咸鱼一条</Option>
                  <Option value="2">风华浪子</Option>
                  <Option value="3">北大才子一枚</Option>
                  <Option value="4">百度FE</Option>
                  <Option value="5">创业者</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["2", "3"]
              })(
                <Select mode="multiple">
                  <Option value="1">游泳</Option>
                  <Option value="2">打篮球</Option>
                  <Option value="3">踢足球</Option>
                  <Option value="4">爬山</Option>
                  <Option value="5">骑行</Option>
                  <Option value="6">桌球</Option>
                  <Option value="7">麦霸</Option>
                  <Option value="8">跑步</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("isMarried", {
                valueProName: "checked",
                initialValue: true
              })(<Switch></Switch>)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birthday", {
                initialValue: moment("2019-12-30 12:01:59")
              })(
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="Select Time"
                ></DatePicker>
              )}
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {getFieldDecorator("contactAddress", {
                initialValue: "陕西省西安市莲湖区xxx"
              })(<TextArea autoSize={rowObject}></TextArea>)}
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {getFieldDecorator("earlyTime", {
                initialValue: moment("12:08:23", "HH:mm:ss")
              })(<TimePicker></TimePicker>)}
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {getFieldDecorator("userImg")(
                <Upload
                  listType="picture-card"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  onChange={this.handleChange}
                >
                  {this.state.userImg ? (
                    <img src={this.state.userImg} alt=""></img>
                  ) : (
                    <Icon type="plus"></Icon>
                  )}
                </Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator("readProtocl", {
                valuePropName: "checked",
                initialValue: true
              })(
                <Checkbox>
                  我已经阅读过以上<a href="#">协议</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

const Register = Form.create()(FormRegister);

export default Register;
