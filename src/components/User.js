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
        <div className="user">
            <p>{user.login}</p>
            <button onClick={listRepos}>
                {!clicked ? 'View' : 'Hide'} {user.login}'s repository list
            </button>
            {clicked && repos?.data?.map(repo => (
                <Repo repo={repo} />
            ))}
        </div>
    )
}

export default User;
