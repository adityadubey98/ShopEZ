// src/pages/seller/ApproveProducts.jsx

import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ApproveProducts = () => {
    const { axios } = useAppContext();
    const [products, setProducts] = useState([]);

    const fetchPendingProducts = async () => {
        try {
            const { data } = await axios.get('/api/product/pending');
            if (data.success) {
                setProducts(data.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to fetch products');
        }
    };

    useEffect(() => {
        fetchPendingProducts();
    }, []);

    const handleApprove = async (productId) => {
        try {
            const { data } = await axios.patch(`/api/product/${productId}/approve`);
            if (data.success) {
                toast.success(data.message);
                // Refresh the list after approval
                fetchPendingProducts();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('An error occurred while approving.');
        }
    };

    return (
        <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll p-4 md:p-10'>
            <h2 className="text-lg font-medium mb-4">Products Awaiting Approval</h2>
            <div className="space-y-4">
                {products.length > 0 ? products.map((product) => (
                    <div key={product._id} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                            <img src={product.image[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4 float-left" />
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-gray-600">Category: {product.category}</p>
                            <p className="text-lg font-bold text-green-600">${product.price}</p>
                        </div>
                        <button
                            onClick={() => handleApprove(product._id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            Approve
                        </button>
                    </div>
                )) : (
                    <p>No products are currently pending approval.</p>
                )}
            </div>
        </div>
    );
};

export default ApproveProducts;