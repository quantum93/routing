import React from 'react';
import Nav from './Nav';
import About from './about';
import Shop from './shop';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/shop" component={Shop} />
      <Route path="/shop/:itemid" component={ItemDetail}/>
      </Switch>
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
