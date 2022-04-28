import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let userd = false;
  if (isNaN(localStorage.updated) === false) {
    const diff = Date.now() - localStorage.updated;
    userd = diff < 3600000;
  } else {
    isNaN(localStorage.updated);
    userd = false;
  }
  return (
    <Route
      {...rest}
      render={props => {
        if (userd === true) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
