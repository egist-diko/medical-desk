import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const Form = props.thecomponent;
  const state = localStorage.getItem("isAuth").toLocaleLowerCase() === "true";
  return (
    <Route
      {...props}
      render={(rest) => {
        if (state) {
          return <Form />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: rest.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
