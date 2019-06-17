import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home/HomeContainer';
import PageOne from 'containers/Example/PageOneContainer';
import PageTwo from 'containers/Example/PageTwoContainer';

export default function rootRoutes() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pageOne" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
      </Switch>
    </main>
  );
}
