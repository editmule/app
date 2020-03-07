import React from "react";
import { Route } from "react-router-dom";

function AppliedRoute({ component: C, appProps, ...rest }: any) {
  return (
    <Route {...rest} render={props => <C {...props} {...appProps} />} />
  );
}

export default AppliedRoute;
