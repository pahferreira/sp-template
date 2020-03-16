import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ exact, component: Component, path }) => {
  const token = localStorage.getItem('access_token');

  const renderComponent = () => {
    if (token) {
      return <Route exact={exact} path={path} component={Component} />;
    }
    return <Redirect to="/" />;
  };

  return renderComponent();
};

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

export default PrivateRoute;
