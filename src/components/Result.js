import React from 'react';
import { useBookmarkValue } from '../BookmarkContext';

function Result({result, searchType}) {
    const [{ bookmark }, dispatch] = useBookmarkValue();

    const addRepo = (name) => {
        dispatch({
            type: 'ADD_BOOKMARK',
            item: {
                repo_name: name
            }
        });

        console.log(bookmark);
    }

    const repoResults = () => {
        return  (result?.data?.items.map((item) => {
            return (
                <div className="result__repo">
                    <p>{item.name}</p>
                    <button onClick={e => addRepo(item.name, e)}>Add</button>
                </div>
        )}));
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
