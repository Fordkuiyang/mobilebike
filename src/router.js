import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./pages/login";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notices from "./pages/ui/notice";
import NoMatch from "./pages/nomatch";
import Messages from "./pages/ui/messages";
import TabPages from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousles from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";
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
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notices} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={TabPages} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousles} />
                  <Route path="/admin/form/login" component={FormLogin} />
                  <Route path="/admin/form/reg" component={FormRegister} />
                  <Route component={NoMatch} />
                </Switch>
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
