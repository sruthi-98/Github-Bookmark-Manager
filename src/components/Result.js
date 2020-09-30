import React from 'react';

function Result({result, searchType}) {
    console.log(result);

    const repoResults = () => {
        return  (result?.data?.items.map((item) => {
            return <p>{item.name}</p>
        }));
    }

    const repo = repoResults();

    return (
        <div className="result">
            {searchType === 'repo' && repo}
        </div>
    )
}

export default Result;
