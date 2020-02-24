import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import CV from './components/CV/CV';
import PortfolioPage from './pages/PortfolioPage';

const Routes = () => (
  <Switch>
    <Route path="/cv" exact component={CV} />
    <Layout>
      <Route path="/" exact component={About} />
      <Route path="/portfolio" exact component={PortfolioPage} />
    </Layout>
  </Switch>
);

export default Routes;
