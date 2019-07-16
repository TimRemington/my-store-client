import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Component Imports
import Home from './components/Home'
import Navigation from './components/Navigation'
import Products from './components/ProductsList'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <Router>

      <Route path='/' component={Navigation} />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
