import React, { useState } from 'react';

function AddTitle() {
    const [title, setTitle] = useState('');

    return (
        <div>
            <div>
                <p>Enter a title:</p>
                <input 
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <button>Save</button>
            </div>
        </div>
    )
}

export default AddTitle;
