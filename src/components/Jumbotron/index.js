import React from 'react';

//Jumbotron component
function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">React Book Search</h1>
        {/* Set ternery operator to render different text if user is on saved or search page */}
    <p class="lead">Search for and save books of interest</p>
  </div>
</div>
    )
};

export default Jumbotron;