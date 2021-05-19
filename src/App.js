import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./Auth";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import Homepage from "./pages/homepage";
import Faq from "./pages/faq";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Form from "./pages/form";
import Page404 from "./pages/404";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/terms" exact component={Terms} />
          <ProtectedRoute path="/form" exact thecomponent={Form} />
          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
