import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Product from './Product/Product'
import SearchBox from './SearchBox/SearchBox'
import SearchResult from './SearchResult/SearchResult'
import Api from './Api/Api'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/api" component={Api} />
          <Route exact path="/" component={SearchBox} />
          <Route exact path="/items/:id" component={Product} />
          <Route exact path="/items" component={SearchResult} />
        </div>
      </Router>
    );
  }
}

export default App;


