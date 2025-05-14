import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                <p className="mt-4 text-gray-600">Loading data...</p>
            </div>
        </div>
    );
};

export default Loading;