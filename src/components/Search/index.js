import React from 'react'

function Search() {
    return (
        <div className="container-fluid">
            <h3>Enter a book here</h3>
            <div className="md-form mt-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
        </div>
    )
};

export default Search;
