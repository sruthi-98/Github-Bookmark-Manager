import React from 'react';
import Header from './components/Header';
import Manager from './components/Manager';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/search">
            <Header />
            <Search />
          </Route>
          <Route path="/">
            <Header />
            <Manager />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
