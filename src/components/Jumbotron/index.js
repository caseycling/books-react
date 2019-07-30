import React from 'react';

//Jumbotron component
function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">React Book Search</h1>
        {/* Set ternery operator to render different text if user is on saved or search page */}
    <p className="lead">Search for and save books of interest</p>
  </div>
</div>
    )
};

export default Jumbotron;