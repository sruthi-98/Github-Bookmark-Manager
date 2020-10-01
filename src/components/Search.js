import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios';
import Result from './Result';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("users");
    const [result, setResult] = useState({});
    const [pageNumber, setPageNumber] =  useState(1);
    const isInitialMount = useRef(true);

    // To not fetch results on the first mount but on every change in page number
    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            fetchResult();
        }
    }, [pageNumber]);

    const findSearchType = () => {
        const dropdown = document.getElementsByClassName('search__dropdown')[0]
        setSearchType(dropdown.value);
    }

    const fetchResult = () => {
        
        switch (searchType) {
            case 'users':
                axios({
                    url: '/search/users',
                    params: {
                        q: searchValue,
                        page: pageNumber,
                        per_page: 20
                    }
                }).then((result) => setResult(result))
                  .catch(error => console.log(error));
                break;

            case 'repo':
                axios({
                    url: '/search/repositories',
                    params: {
                        q: searchValue,
                        page: pageNumber,
                        per_page: 20
                    }
                }).then((result) => setResult(result))
                  .catch(error => console.log(error));
                break;
        
            default:
                break;
        }
    }

    return (
        <div className="search">
            <div className="search__container">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search"
                    className="search__searchBar"
                    onChange={e => setSearchValue(e.target.value)}
                />

                <select className="search__dropdown" onChange={findSearchType}>
                    <option value="users">{searchValue} in Users</option> 
                    <option value="repo">{searchValue} in Repositories</option>
                </select>

                <button 
                    className="search__searchButton"
                    onClick={fetchResult}
                >
                    Search
                </button>
            </div>

            <Result result={result} searchType={searchType}/>

            {
                Object.keys(result).length !== 0 && 
                <div className="search__pageHandler">
                    <button onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}>Prev</button>
                    <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                </div>
            }

        </div>
    )
}

export default Search;
