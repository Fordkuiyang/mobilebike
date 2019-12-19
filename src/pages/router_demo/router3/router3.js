import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Topics from "./Topics";
import Info from "./Info";
import Home from "./Home";
import NoMatch from "./NoMatch";
class IRoute extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route
              path="/main"
              render={() => (
                <Main>
                  <Route path="/main/:value" component={Info}></Route>
                </Main>
              )}
            ></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Home>
      </Router>
    );
  }
}

export default IRoute;
