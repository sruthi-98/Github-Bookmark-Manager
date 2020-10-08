import React, { useState, useEffect, useRef } from 'react';
import axios from '../axios';
import PageButtons from './PageButtons';
import Result from './Result';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchDropdown from './SearchDropdown';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("users");
    const [result, setResult] = useState({});
    const [pageNumber, setPageNumber] =  useState(1);
    const [loading, setLoading] = useState(false);

    const isInitialMount = useRef(true);

    const isResult = Object.keys(result).length !== 0 && result?.data?.items.length !== 0 && !loading;
    const pageLimit = Math.ceil(result?.data?.total_count / 20);

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
    const updateState = (event) => {
        event.preventDefault();

        // Validate search query
        const searchBar = document.getElementById("searchBar");
        if(searchBar.value !== '') {
            const dropdown = document.getElementsByClassName('search__dropdown')[0];
            setSearchType(dropdown.value);
        }
    }

    const fetchResult = () => { 
        setLoading(true);

        const url = searchType === 'repo' ? '/search/repositories' : '/search/users';
        axios({
            url: url,
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
    }

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const onChange = () => {
        const searchBar = document.getElementById("searchBar");
        if(searchBar.value !== '') {
            setSearchValue(searchBar.value);
        }
    }

    return (
        <div className="h-auto p-5">
            
            <form className="block md:flex bg-white h-auto w-full px-4 py-2 rounded" onSubmit={updateState}>
                <SearchBar onChange={onChange} />
                <SearchDropdown />
                <SearchButton />
            </form>

            {/* Display page number when results are fetched and disable when result list is empty */}
            {
                isResult &&
                <p className="m-2 px-4 py-2">
                    Showing page <strong>{pageNumber}</strong> of <strong>{pageLimit}</strong>.
                </p>
            }

            {/* Display a loader animation when results are being fetched */}
            {
                loading ? 
                <svg className="loader fixed animate-spin h-10 w-10 rounded-full top-0 left-0"></svg>: 
                <Result result={result} searchType={searchType}/>
            }

            {/* Display page buttons when results are fetched */}
            {isResult && <PageButtons pageNumber={pageNumber} pageLimit={pageLimit} prevPage={prevPage} nextPage={nextPage} />}

        </div>
    )
}

export default Search;
