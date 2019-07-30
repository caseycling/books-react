import React from 'react';
import Results from '../Results';



function ResultContainer() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading"><h3>Results</h3></div>
            <Results />
            {/* Create ternery operator to display results or no results message depending on state value */}
            <div className="panel-body"></div>
        </div>
    )
};

export default ResultContainer;