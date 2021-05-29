import React, { FC } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Bar } from './components/bar';

import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <Router>
      <Bar />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about/" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
