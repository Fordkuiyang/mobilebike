import React from "react";
import { Link } from "react-router-dom";
class Main extends React.Component {
  render() {
    return (
      <div>
        this is main3 page
        <br/>
        <Link to="/main/test-id">嵌套路由1</Link>
        <br/>
        <Link to="/main/456">嵌套路由2</Link>
        <hr></hr>
        {this.props.children}
       
      </div>
    );
  }
}

export default Main;
