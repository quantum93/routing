import React from 'react';
import Nav from './Nav';
import About from './about';
import Shop from './shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </div>
  </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
