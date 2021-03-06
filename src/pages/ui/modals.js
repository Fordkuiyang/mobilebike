import React from "react";
import { Card, Button, Modal } from "antd";
import "./ui.less";
class Modals extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  };
  handleClick = type => {
    this.setState({
      [type]: true
    });
  };
  handleConfirm = type => {
    Modal[type]({
      title: "确认",
      content: "你确定你学会了React了吗？",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleClick("showModal1")}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleClick("showModal2")}>
            自定义页脚
          </Button>
          <Button type="primary" onClick={() => this.handleClick("showModal3")}>
            顶部20px弹框
          </Button>
          <Button type="primary" onClick={() => this.handleClick("showModal4")}>
            水平垂直居中
          </Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            Warning
          </Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onOk={() => {
            this.setState({
              showModal1: false
            });
          }}
          onCancel={() => {
            this.setState({
              showModal1: false
            });
          }}
        >
          <p>欢迎学习慕课推出的React高级课程</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="下一步"
          cancelText="算了"
          onOk={() => {
            this.setState({
              showModal2: false
            });
          }}
          onCancel={() => {
            this.setState({
              showModal2: false
            });
          }}
        >
          <p>欢迎学习慕课推出的React高级课程</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal3}
          style={{ top: 20 }}
          okText="下一步"
          cancelText="算了"
          onOk={() => {
            this.setState({
              showModal3: false
            });
          }}
          onCancel={() => {
            this.setState({
              showModal3: false
            });
          }}
        >
          <p>欢迎学习慕课推出的React3高级课程</p>
        </Modal>

        <Modal
          title="React"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          okText="下一步"
          cancelText="算了"
          onOk={() => {
            this.setState({
              showModal4: false
            });
          }}
          onCancel={() => {
            this.setState({
              showModal4: false
            });
          }}
        >
          <p>欢迎学习慕课推出的React3高级课程</p>
        </Modal>
      </div>
    );
  }
}

export default Modals;
