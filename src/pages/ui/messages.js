import React from "react";
import { Card, Button, message } from "antd";
import "./ui.less";
class Messages extends React.Component {
  showMessages = type => {
    message[type]({
      content: "恭喜你，React学习进阶成功"
    });
  };
  render() {
    return (
      <div>
        <Card title="全局提示框" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessages("success")}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.showMessages("info")}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessages("warning")}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessages("error")}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessages("loading")}>
            Loading
          </Button>
          <Button type="primary" onClick={() => this.showMessages("open")}>
            Open
          </Button>
        </Card>
      </div>
    );
  }
}

export default Messages;
