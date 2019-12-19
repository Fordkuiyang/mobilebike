import React from "react";

class Info extends React.Component {
  render() {
    return (<div>this is Info page.
      动态路由的值是： {this.props.match.params.value}
    </div>
      );
  }
}

export default Info;
