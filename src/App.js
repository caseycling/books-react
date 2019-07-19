import React from 'react';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Search from './components/Search';
import ResultContainer from './components/ResultsContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Search />
      <ResultContainer />
    </div>
  );
}

export default App;
