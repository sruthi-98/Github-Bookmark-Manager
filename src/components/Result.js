import React from 'react';

function Result({result, searchType}) {

    const repoResults = () => {
        return  (result?.data?.items.map((item) => {
            return <p>{item.name}</p>
        }));
    }

    const userResults = () => {
        return  (result?.data?.items.map((item) => {
            return <p>{item.login}</p>
        }));
    }

    const repo = repoResults();
    const user = userResults();

    return (
        <div className="result">
            {searchType === 'repo' ? repo : user}
        </div>
    )
}

export default Result;
