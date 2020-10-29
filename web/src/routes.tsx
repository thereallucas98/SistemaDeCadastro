import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Create from './pages/Create';
import Logon from './pages/Logon';
import Menu from './pages/Menu';
import User from './pages/User';


function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/create-account" component={Create} />
        <Route path="/menu" component={Menu} />
        <Route path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;