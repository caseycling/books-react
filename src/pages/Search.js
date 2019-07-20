import React, { Component } from 'react';
import Search from '../components/Search';
import ResultsContainer from '../components/ResultsContainer';

class Searched extends Component {
    render() {
        return (
            <div>
                <Search />
                <ResultsContainer />
            </div>
        )
    }
}

export default Searched;