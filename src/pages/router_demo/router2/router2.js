import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Main from "./Main";
import Topics from "./Topics";
import About from "./About";
import Home from "./Home";
class IRoute extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route
            path="/main"
            render={() => (
              <Main>
                <Route path="/main/about" component={About}></Route>
              </Main>
            )}
          ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
        </Home>
      </Router>
    );
  }
}

export default IRoute;
