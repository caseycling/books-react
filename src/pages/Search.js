import React, { Component } from 'react';
import Search from '../components/Search';
import ResultsContainer from '../components/ResultsContainer';

class Searched extends Component {

    state = {
        books: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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