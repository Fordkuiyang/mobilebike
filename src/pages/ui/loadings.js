import React from "react";
import { Card, Button, Spin, Icon, Alert } from "antd";
import "./ui.less";
class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }}></Icon>;
    return (
      <div>
        <Card title="Spin的用法" className="card-wrap">
          <Spin size="samll"></Spin>
          <Spin style={{ margin: "0 10px" }}></Spin>
          <Spin size="large" style={{ margin: "0 10px" }}></Spin>
          <Spin indicator={icon} style={{ margin: "0 10px" }}></Spin>
        </Card>

        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="欢迎来到React高级实战课程"
            type="warning"
          ></Alert>
          <Alert
            message="React"
            description="欢迎来到Re act高级实战课程"
            type="success"
          ></Alert>
          <Alert
            message="React"
            description="欢迎来到React高级实战课程"
            type="info"
          ></Alert>
          <Spin>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
            ></Alert>
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
            ></Alert>
          </Spin>

          <Spin tip="加载中..." indicator={icon}>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程"
              type="warning"
            ></Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loadings;
