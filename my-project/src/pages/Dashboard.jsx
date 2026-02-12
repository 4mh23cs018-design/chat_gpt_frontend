import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        navigate('/logout');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-16">
            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="md:flex md:items-center md:justify-between mb-8">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
                                Welcome back, User!
                            </h2>
                            <p className="mt-1 text-sm text-gray-500">
                                Here's what's happening with your projects today.
                            </p>
                        </div>
                        <div className="mt-4 flex md:mt-0 md:ml-4">
                            <button
                                onClick={handleLogout}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
                            >
                                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Total Projects', value: '12', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z', color: 'text-blue-600', bg: 'bg-blue-100' },
                            { label: 'Active Tasks', value: '24', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'text-green-600', bg: 'bg-green-100' },
                            { label: 'Completed', value: '156', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-purple-600', bg: 'bg-purple-100' },
                            { label: 'System Health', value: '98%', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'text-yellow-600', bg: 'bg-yellow-100' },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white overflow-hidden shadow rounded-2xl border border-gray-100 p-6 hover:shadow-md transition">
                                <div className="flex items-center">
                                    <div className={`flex-shrink-0 rounded-xl p-3 ${stat.bg} ${stat.color}`}>
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
                                        </svg>
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                                            <dd className="text-2xl font-bold text-gray-900">{stat.value}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chart/Activity Preview */}
                    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="bg-white shadow rounded-2xl border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                                            <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-2xl border border-gray-100 p-6 flex items-center justify-center">
                            <p className="text-gray-400 italic">Data visualization coming soon...</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
