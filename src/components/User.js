import React, { useState } from 'react';
import axios from '../axios';

function User({ user }) {
    const [repo, setRepo] = useState({});

    const listRepo = () => {
        axios({
            url: '/users/' + user.login + '/repos',
        }).then((result) => console.log(result))
          .catch(error => console.log(error));
    }

    return (
        <div className="user">
            <p>{user.login}</p>
            <button onClick={listRepo}>View {user.login}'s repository list</button>
        </div>
    )
}

export default User;
