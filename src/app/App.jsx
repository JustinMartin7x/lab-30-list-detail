import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailPage from '../components/detailPage/DetailPage';

import Home from '../components/home/Home';

export default function App() {
  const [character, setCharacter] = useState({});
  return (
    <>
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            component={() => (
              <Home  />
            )}
          />
          <Route
            path='/details/:id'
            component={() => <DetailPage  />}
          />
        </Switch>
      </Router>
    </>
  );
}
