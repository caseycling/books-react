import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Searchpg from './pages/Search';
import Savedpg from './pages/Saved';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Searchpg} />
          <Route exact path="/saved" component={Savedpg} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



