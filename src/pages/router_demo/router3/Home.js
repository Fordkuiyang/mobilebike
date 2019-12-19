import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/main">Main3</Link>
          </li>
          <li>
            <Link to="/imooc">imooc</Link>
          </li>
          <li>
            <Link to="/about">About3</Link>
          </li>
          <li>
            <Link to="/topics">Topics3</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Home;
