import React, { useState } from 'react';
import axios from '../axios';
import ListRepoButton from './ListRepoButton';
import Repo from './Repo';

function User({ user }) {
    const [repos, setRepos] = useState({});
    const [clicked, setClicked] = useState(false);

    const listRepos = () => {
        axios({
            url: '/users/' + user.login + '/repos',
        }).then((result) => {
            setRepos(result);
            setClicked(!clicked);
        })
          .catch(error => console.log(error));
    }

    return (
        <div className="bg-white border border-solid border-gray-400 shadow-lg p-5 m-5 rounded">
            <p className="mb-4">
                <strong>User:</strong> {user.login}
            </p>
            <ListRepoButton clickHandler={listRepos} clicked={clicked} login={user.login} />
            <div key={user.id} >
                {clicked && repos?.data.length === 0 && <p className="text-lg p-2 mt-2">No repositories !!!!!</p>}
                
                {clicked && repos?.data?.map(repo => (
                    <Repo key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    )
}

export default User;
