import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import ShopifySplashPage from './shopify_oauth/shopify_splash_page';

const Root = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/shopify"/>
        <Route path="/shopify" component={ShopifySplashPage}/>
      </Route>
    </Router>
  );
};
//
export default Root;
