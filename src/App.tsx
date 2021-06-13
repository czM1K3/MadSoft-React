import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Bar } from './components/bar';
import { Footer } from './components/footer';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Memes from './pages/Memes';

const App: FC = () => {
  return (
    <Router>
      <div className="main">
        <Bar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/projects" component={Projects} />
          <Route path="/memes" component={Memes} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
