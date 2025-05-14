import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ErrorFetchAlert from './ErrorFetchAlert';

const UserPredictionTable = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComparisonData();
    }, []);

    const fetchComparisonData = async () => {
        axios.get('api/prediction', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
            .then(response => {
                console.log("axios response", response.data);
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Axios error:', error);
                setError('Failed to fetch user data. Please try again later.');
                setLoading(false);
            });
    };


    if (loading) return <Loading />;
    if (error) return <ErrorFetchAlert message={error} onRetry={fetchComparisonData} />;

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        User Login Prediction System
                    </h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full ">
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">

                                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
                                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                        User Login Predictions
                                    </h1>
                                    <table className="min-w-full table-auto">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                    User ID
                                                </th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                    Last Login
                                                </th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                    Predicted Login (Average)
                                                </th>
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
                                                    Predicted Login (Pattern)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userData.map(user => (
                                                <tr key={user.id} className="hover:bg-red-100">
                                                    <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                                        {user.id}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                                        {new Date(user.logins[user.logins.length - 1]).toLocaleString()}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                                        {new Date(user.predicted_login_average).toLocaleString()}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-800 border-b">
                                                        {new Date(user.predicted_login_pattern).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <p className="text-center text-base text-gray-500">
                        &copy; 2025 User Login Prediction System
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default UserPredictionTable;
