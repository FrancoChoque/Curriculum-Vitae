import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import CV from './components/CV/CV';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cv" exact component={CV} />
          <Layout>
            <Route path="/" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
