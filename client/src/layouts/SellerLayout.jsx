// src/layouts/SellerLayout.jsx
import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const SellerLayout = () => {
    const { axios } = useAppContext();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const verifySeller = async () => {
            try {
                const { data } = await axios.get('/api/seller/verify');
                if (data.success) {
                    setIsAuthenticated(true);
                } else {
                    toast.error("Please log in as a seller.");
                    navigate('/seller/login');
                }
            } catch (error) {
                toast.error("Session expired. Please log in again.");
                navigate('/seller/login');
            }
        };
        verifySeller();
    }, [axios, navigate]);

    // Render a loading state or null while checking authentication
    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Seller Panel</h2>
                <nav className="flex flex-col space-y-2">
                    <Link to="/seller/orders" className="hover:bg-gray-700 p-2 rounded">Orders</Link>
                    <Link to="/seller/add" className="hover:bg-gray-700 p-2 rounded">Add Product</Link>
                    <Link to="/seller/approve" className="hover:bg-gray-700 p-2 rounded">Approve Products</Link>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
                <Outlet /> {/* This will render the specific seller page */}
            </main>
        </div>
    );
};

export default SellerLayout;