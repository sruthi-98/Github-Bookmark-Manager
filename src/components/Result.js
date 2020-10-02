import React from 'react';
import Repo from './Repo';
import User from './User';

function Result({result, searchType}) {
    const getResult = () => {
        if(result?.data?.items.length === 0){
            return <p className="text-xl m-2 px-4 py-2">No results !!!</p>
        }
        else {
            switch (searchType) {
                case 'users':
                    return  (result?.data?.items.map((item) => {
                        return ( 
                            <User key={item.id} user={item} />
                    )}));
    
                case 'repo':
                    return  (result?.data?.items.map((item) => {
                        return (
                           <Repo key={item.id} repo={item} />
                    )}));
    
                default:
                    break;
            }
        }
    }

    const displayResult = getResult();

    return (
        <div className="h-auto">
            {displayResult}
        </div>
    )
}

export default Result;
