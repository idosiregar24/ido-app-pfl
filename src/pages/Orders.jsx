import React, { useState } from "react";
import { MdAdd, MdMoreVert, MdFilterList, MdSearch } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";
import { ordersData } from "../data";

export default function Orders() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState(ordersData);

    const getStatusStyle = (status) => {
        switch (status) {
            case "Completed": return "bg-green-100 text-green-700";
            case "Pending": return "bg-yellow-100 text-yellow-700";
            case "Cancelled": return "bg-red-100 text-red-700";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div id="orders-container" className="flex flex-col space-y-6">
            <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-hijau hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center transition-all shadow-lg active:scale-95"
                >
                    <MdAdd className="mr-2 text-xl" />
                    Add Orders
                </button>
            </PageHeader>

            {/* Filters and Search */}
            <div className="px-4 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mx-4">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            type="text" 
                            placeholder="Search orders..." 
                            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-hijau/20 w-64 transition-all outline-none"
                        />
                    </div>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-hijau transition-colors px-3 py-2 rounded-lg hover:bg-green-50">
                        <MdFilterList className="text-xl" />
                        <span className="font-medium">Filters</span>
                    </button>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                    Showing {orders.length} orders
                </div>
            </div>

            {/* Table */}
            <div className="mx-4 bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Order ID</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Customer</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Date</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Status</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider text-right">Price</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order) => (
                            <tr key={order.orderId} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-900">{order.orderId}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-800">{order.customerName}</span>
                                        <span className="text-xs text-gray-400">{order.customer.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{order.orderDate}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusStyle(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-bold text-gray-900">
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(order.totalPrice)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all">
                                        <MdMoreVert className="text-xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Order Modal */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Add New Order"
            >
                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Order ID</label>
                            <input type="text" placeholder="ORD-XXX" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Order Date</label>
                            <input type="date" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Customer Name</label>
                        <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all">
                            <option value="">Select Customer</option>
                            {orders.map(o => (
                                <option key={o.customer.customerId} value={o.customer.customerId}>{o.customerName}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Status</label>
                            <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all">
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Total Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">Rp</span>
                                <input type="number" placeholder="0" className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex space-x-3">
                        <button 
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="flex-1 px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="flex-1 px-6 py-3 bg-hijau text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg"
                        >
                            Save Order
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}