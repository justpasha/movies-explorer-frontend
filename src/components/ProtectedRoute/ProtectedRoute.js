import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrenUserContext } from '../../contexts/CurrentUserContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const userContext = useContext(CurrenUserContext);

  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <Component {...props} currentUser={userContext} />
        ) : (
          <Redirect to="/" exact />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
