import React from "react";
import { Card, Button, Radio, notification } from "antd";
import "./ui.less";
class Notices extends React.Component {
  openNotification = (type, direction) => {
    notification[type]({
      message: `发工资了 ${direction}`,
      description: "上个月考勤22天，迟到12天，实发工资250，请笑纳",
      placement: direction
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success")}
          >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info")}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning")}
          >
            Wanring
          </Button>
          <Button type="danger" onClick={() => this.openNotification("error")}>
            Error
          </Button>
        </Card>

        <Card title="改变方向的通知提醒框" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topLeft")}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "topRight")}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning", "bottomLeft")}
          >
            Wanring
          </Button>
          <Button
            type="danger"
            onClick={() => this.openNotification("error", "bottomRight")}
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}

export default Notices;
