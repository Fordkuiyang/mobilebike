import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/nomatch";
class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons} />
                <Route component={NoMatch} />
              </Admin>
            )}
          ></Route>
          <Route path="/order/detail" component={Login} />
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
