import React, { FC } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from '@material-ui/core';
import { Bar } from './components/bar';

import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App: FC = () => {
  return (
    <Router>
        <Bar />
        <Container maxWidth="md">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
