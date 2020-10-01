import React, { useState } from 'react';
import axios from '../axios';
import Repo from './Repo';

function User({ user }) {
    const [repos, setRepos] = useState({});

    const listRepos = () => {
        axios({
            url: '/users/' + user.login + '/repos',
        }).then((result) => setRepos(result))
          .catch(error => console.log(error));
    }

    console.log(repos);

    return (
        <div className="user">
            <p>{user.login}</p>
            <button onClick={listRepos}>View {user.login}'s repository list</button>
            {repos?.data?.map(repo => (
                <Repo repo={repo} />
            ))}
        </div>
    )
}

export default User;
