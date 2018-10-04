import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import './frontend-challenge-pattern-library/src/assets/toolkit/styles/toolkit.scss';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import asyncBrowse from './containers/Browse/Browse';
import asyncProfile from './containers/Profile/Profile';


import asyncLifeSciences from './containers/LifeSciences/LifeSciences';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {


  render () {
    let routes = (
      <Switch>
        <Route path="/" component={asyncAuth} />
          <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
          <Route path="/lifesciences" component={asyncLifeSciences} />
        <Route path="/browse" component={asyncBrowse} />
        <Route path="/profile" component={asyncProfile} />
          <Redirect to="/lifesciences" />
        </Switch>
      );
    }

    return (
     
      <div>
          {routes}
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};



export default withRouter( connect( mapStateToProps, null )( App ) );


