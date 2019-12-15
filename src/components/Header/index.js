import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";

class Header extends React.Component {
  
  componentWillMount() {
    this.setState({
      userName: "Ford K Yang"
    });

    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Row className="header">
          <Col span={24} className="header-top">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
