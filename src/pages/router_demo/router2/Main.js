import React from "react";
import { Link } from "react-router-dom";
class Main extends React.Component {
  render() {
    return (
      <div>
        this is main2 page
        <Link to="/main/about">嵌套路由</Link>
        {this.props.children}
       
      </div>
    );
  }
}

export default Main;
