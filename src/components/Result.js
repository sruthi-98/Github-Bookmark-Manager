import React from 'react';
import Repo from './Repo';
import User from './User';

function Result({result, searchType}) {

    const repoResults = () => {
        return  (result?.data?.items.map((item) => {
            return (
               <Repo repo={item} />
        )}));
    }

    const userResults = () => {
        return  (result?.data?.items.map((item) => {
            return ( 
                <User user={item} />
        )}));
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
