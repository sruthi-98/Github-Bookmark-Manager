import React, { useState } from 'react';
import axios from '../axios';
import Repo from './Repo';

function User({ user }) {
    const [repos, setRepos] = useState({});
    const [clicked, setClicked] = useState(false);

    const listRepos = () => {
        setClicked(!clicked);
        axios({
            url: '/users/' + user.login + '/repos',
        }).then((result) => setRepos(result))
          .catch(error => console.log(error));
    }

    return (
        <div className="bg-white border border-solid border-gray-400 shadow-md p-5 m-5 rounded">
            <p className="mb-4">
                <strong>User:</strong> {user.login}
            </p>
            <button 
                onClick={listRepos}
                className="bg-transparent border border-solid border-indigo-800 font-semibold text-indigo-800 p-2 rounded hover:shadow-lg"
            >
                {!clicked ? 'View' : 'Hide'} <strong>{user.login}</strong>'s repository list
            </button>
            <div className="">
                {clicked && repos?.data?.map(repo => (
                    <Repo repo={repo} />
                ))}
            </div>
        </div>
    )
}

export default User;
