import React, { useState, useEffect } from 'react';
import axios from '../axios';
import PageButtons from './PageButtons';
import Result from './Result';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchDropdown from './SearchDropdown';
import useDebounce from '../useDebounce';

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("users");
    const [result, setResult] = useState({});
    const [pageNumber, setPageNumber] =  useState(1);
    const [loading, setLoading] = useState(false);

    const isResult = Object.keys(result).length !== 0 && result?.data?.items.length !== 0 && !loading;
    const pageLimit = Math.ceil(result?.data?.total_count / 20);
    const debouncedSearchValue = useDebounce(searchValue, 1000);

    // To not fetch results on the first mount but on every state update
    useEffect(() => {
        const fetchResult = () => {  
            const url = searchType === 'repo' ? '/search/repositories' : '/search/users';
            axios({
                url: url,
                params: {
                    q: debouncedSearchValue,
                    page: pageNumber,
                    per_page: 20,
                },
            }).then((result) => {
                    setResult(result);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);  
                setResult({});
            });
        }
        if (debouncedSearchValue) {
            setLoading(true);
            fetchResult();
        }
    }, [pageNumber, searchType, debouncedSearchValue]);

    // State gets updated on button click to prevent re render 
    const updateState = (event) => {
        event.preventDefault();
        const dropdown = document.getElementsByClassName('search__dropdown')[0];
        setSearchType(dropdown.value);
    }

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const onChange = (event) => {
        setSearchValue(event.target.value);
    }

    const updateValue = () => {
        const dropdown = document.getElementsByClassName('search__dropdown')[0];
        setSearchType(dropdown.value);
    }

    return (
        <div className="h-auto p-5">
            
            <form className="block md:flex bg-white h-auto w-full px-4 py-2 rounded" onSubmit={updateState}>
                <SearchBar onChange={onChange} />
                <SearchDropdown onChange={updateValue} />
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
