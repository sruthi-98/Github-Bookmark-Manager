import React from 'react';
import Header from './components/Header';
import Manager from './components/Manager';
import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BookmarkProvider } from './BookmarkContext';
import reducer, { initialState } from './Reducer';

function App() {
  return (
    <BookmarkProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/search">
              <Header />
              <Search />
            </Route>
            <Route exact path="/">
              <Header />
              <Manager />
            </Route>
            <Route path="*">
              <h1>Error 404 Not Found</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </BookmarkProvider>
  );
}

export default App;
