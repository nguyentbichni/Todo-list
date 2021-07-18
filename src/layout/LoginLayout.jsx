import React from 'react';
import { Route } from 'react-router-dom';

import './style.css';

function LoginLayout({ component: Component, ...props }) {
  return (
    <Route {...props} component={Component} />
  );
}

export default LoginLayout;
