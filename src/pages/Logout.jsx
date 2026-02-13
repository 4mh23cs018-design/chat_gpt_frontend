import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear local storage
        localStorage.removeItem('access_token');

        // Redirect to login after a short delay
        const timer = setTimeout(() => {
            navigate('/login');
        }, 1500);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
                <h2 className="text-2xl font-semibold text-gray-900">Logging out...</h2>
                <p className="text-gray-500 mt-2">Redirecting you to the login page.</p>
            </div>
        </div>
    );
};

export default Logout;