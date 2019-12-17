import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/utils";
import axios from "../../axios";

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
    this.getWeatherAPIData();
  }

  getWeatherAPIData() {
    let city = "610100";
    axios
      .jsonp({
        url:
          "https://restapi.amap.com/v3/weather/weatherInfo?city=" +
          city +
          "&key=f0cdf9a598a2aa1c8dd8b42b5b0ea307&output=json&extensions=base"
      })
      .then(res => {
        if (res.status === "1") {
          let data = res.lives;
          this.setState({
            weather: data[0].weather
          });
        }
      });
  }

  render() {
    return (
      <div className="header">
        <Row>
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
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
