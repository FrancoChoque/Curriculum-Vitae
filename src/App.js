import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import About from "./components/About/About";
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">      
        <BrowserRouter>
        <Layout>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          </Layout>
        </BrowserRouter>      
    </div>
  );
}

export default App;
