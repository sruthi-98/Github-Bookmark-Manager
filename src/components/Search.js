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
        <div className="h-screen p-5">
            <div className="flex bg-white h-auto w-full px-4 py-2 rounded">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="Search"
                    onChange={e => setSearchValue(e.target.value)}
                    className="flex-auto border border-solid border-gray-500 placeholder-black m-2 p-2 rounded"
                />

                <select 
                    onChange={findSearchType}
                    className="search__dropdown flex-auto bg-gray-200 border border-gray-200 text-gray-700 m-2 p-2" 
                >
                    <option value="users">{searchValue} in Users</option> 
                    <option value="repo">{searchValue} in Repositories</option>
                </select>

                <button 
                    className="bg-indigo-700 hover:bg-indigo-800 font-semibold text-white w-1/12 m-2 p-2 rounded"
                    onClick={fetchResult}
                >
                    Search
                </button>
            </div>

            <Result result={result} searchType={searchType}/>

            {
                Object.keys(result).length !== 0 && 
                <div className="flex justify-end p-3">
                    <button 
                        onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    >
                        Prev
                    </button>
                    <button 
                        onClick={() => setPageNumber(pageNumber + 1)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    >
                        Next
                    </button>
                </div>
            }

        </div>
    )
}

export default Search;
