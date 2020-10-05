import React from 'react';

function PageButtons({ pageNumber, pageLimit, prevPage, nextPage}) {
    return (
        <div className="flex justify-end p-3 mb-5">
            <button 
                id="prev"
                onClick={prevPage}
                disabled={pageNumber === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Prev
            </button>
            <button 
                id="next"
                onClick={nextPage}
                disabled={pageNumber === pageLimit}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>
        </div>
    )
}

export default PageButtons;
