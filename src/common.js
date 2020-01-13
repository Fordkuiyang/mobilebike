import React from "react";
import { Row } from "antd";
import Header from "./components/Header";
import "./style/common.less";
class Common extends React.Component {
  render() {
    return (
      <div>
        <Row className="container">
          <Header />
        </Row>
        <Row className="content">{this.props.children}</Row>
      </div>
    );
  }
}

export default Common;
