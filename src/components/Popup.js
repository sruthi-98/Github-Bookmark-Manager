import React from 'react';

function Popup({ repo, titleRef, changeHandler, addRepo }) {
    
    return (
        <div className="fixed z-10 h-screen w-screen bg-black bg-opacity-75 top-0 left-0">
            <div className="popup absolute flex flex-col bg-orange-100 h-auto w-3/5 lg:w-1/4 border border-solid border-black p-12">
                <p className="flex text-lg">Enter a title (optional):</p>
                <input 
                    type="text"
                    ref={titleRef}
                    onChange={changeHandler} 
                    className="block w-full md:flex-auto border border-solid border-gray-500 placeholder-black p-2 mb-4 rounded"
                />
                <button 
                    onClick={e => addRepo(repo, e)}
                    className="bg-orange-700 hover:bg-orange-800 font-semibold text-white py-2 px-5 rounded" 
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Popup;
