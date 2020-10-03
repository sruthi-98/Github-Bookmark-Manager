import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios';
import Result from './Result';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("users");
    const [result, setResult] = useState({});
    const [pageNumber, setPageNumber] =  useState(1);
    const [loading, setLoading] = useState(false);
    const isInitialMount = useRef(true);
    // const searchType = useRef("users");
    const searchRef = useRef('');

    // To not fetch results on the first mount but on every state update
    useEffect(() => {
        if(isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            fetchResult();
        }
    }, [pageNumber, searchValue, searchType]);

    // State gets updated on button click to prevent re render 
    const updateState = () => {
        const dropdown = document.getElementsByClassName('search__dropdown')[0];
        setSearchType(dropdown.value);
        setSearchValue(searchRef.current.value);
    }

    const fetchResult = () => {
        
        if(searchValue === '') {
            alert("Enter valid input !!!!");
        }
        else {
            setLoading(true);
        }

        switch (searchType) {
            case 'users':
                axios({
                    url: '/search/users',
                    params: {
                        q: searchValue,
                        page: pageNumber,
                        per_page: 20
                    }
                }).then((result) => {
                        setResult(result);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setLoading(false);
                    })
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
                }).then((result) => {
                        setResult(result);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setLoading(false);
                    })
                  .catch(error => console.log(error));
                break;
        
            default:
                break;
        }
        
    }

    return (
        <div className="h-auto p-5">
            <div className="block md:flex bg-white h-auto w-full px-4 py-2 rounded">
                <input
                    type="text"
                    ref={searchRef}
                    placeholder="Search"
                    className="block w-full md:flex-auto border border-solid border-gray-500 placeholder-black m-2 p-2 rounded"
                />

                <select 
                    className="search__dropdown block w-full md:flex-auto bg-gray-200 border border-gray-200 text-gray-700 m-2 p-2" 
                > 
                    <option value="users">in Users</option> 
                    <option value="repo">in Repositories</option>
                </select>

                <button 
                    className="bg-orange-600 hover:bg-orange-700 font-semibold text-white md:w-2/12 m-2 p-2 rounded"
                    onClick={updateState}
                >
                    Search
                </button>
            </div>
            

            {/* Display page number when results are fetched and disable when result list is empty */}
            {
                Object.keys(result).length !== 0 && result?.data?.items.length !== 0 && !loading &&
                <p className="m-2 px-4 py-2">
                    Showing page <strong>{pageNumber}</strong> of results.
                </p>
            }

            {/* Display a loader animation when results are being fetched */}
            {
                loading ? 
                <svg className="loader fixed animate-spin h-10 w-10 rounded-full top-0 left-0"></svg>: 
                <Result result={result} searchType={searchType}/>
            }

            {/* Display page buttons when results are fetched */}
            {
                Object.keys(result).length !== 0 && result?.data?.items.length !== 0 && !loading &&
                <div className="flex justify-end p-3 mb-5">
                    <button 
                        id="prev"
                        onClick={() => setPageNumber(pageNumber - 1)}
                        disabled={pageNumber === 1}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    >
                        Prev
                    </button>
                    <button 
                        id="next"
                        onClick={() => setPageNumber(pageNumber + 1)}
                        disabled={pageNumber === Math.ceil(result?.data?.total_count / 20)}
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
