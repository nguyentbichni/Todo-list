import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index'
import Footer from '../components/Footer';

import './style.css';

function DefaultLayout({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={(routerProps) => (
        <>
          <Header />
          <div className="main">
            <Sidebar />
            <Component {...routerProps} />
          </div>
          <Footer />
        </>
      )}
    />
  );
}

export default DefaultLayout;
