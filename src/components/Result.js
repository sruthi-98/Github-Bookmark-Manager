import React from 'react';
import Repo from './Repo';
import User from './User';

function Result({result, searchType}) {

    const getResult = () => {
        switch (searchType) {
            case 'users':
                return  (result?.data?.items.map((item) => {
                    return ( 
                        <User user={item} />
                )}));

            case 'repo':
                return  (result?.data?.items.map((item) => {
                    return (
                       <Repo repo={item} />
                )}));

            default:
                break;
        }
    }

   const displayResult = getResult();

    console.log(result);

    return (
        <div className="result">
            {displayResult}
        </div>
    )
}

export default Result;
