import React, { useState } from "react";
import { MdAdd, MdMoreVert, MdSearch, MdEmail, MdPhone, MdCardMembership } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import Modal from "../components/Modal";
import { customersData } from "../data";

export default function Customers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customers, setCustomers] = useState(customersData);

    const getLoyaltyStyle = (loyalty) => {
        switch (loyalty) {
            case "Gold": return "text-yellow-600 bg-yellow-50 ring-yellow-500/20";
            case "Silver": return "text-slate-600 bg-slate-50 ring-slate-500/20";
            case "Bronze": return "text-orange-600 bg-orange-50 ring-orange-500/20";
            default: return "text-gray-600 bg-gray-50 ring-gray-500/20";
        }
    };

    return (
        <div id="customers-container" className="flex flex-col space-y-6">
            <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-hijau hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center transition-all shadow-lg active:scale-95"
                >
                    <MdAdd className="mr-2 text-xl" />
                    Add Customer
                </button>
            </PageHeader>

            {/* Search and Count */}
            <div className="px-4 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mx-4">
                <div className="relative w-full max-w-md">
                    <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    <input 
                        type="text" 
                        placeholder="Search customers..." 
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-hijau/20 transition-all outline-none"
                    />
                </div>
                <div className="text-gray-400 text-sm font-medium">
                    Total: <span className="text-gray-900 font-bold">{customers.length}</span> Members
                </div>
            </div>

            {/* Customer Grid */}
            <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((customer) => (
                    <div key={customer.customerId} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-14 h-14 bg-hijau/10 rounded-full flex items-center justify-center text-hijau text-2xl font-bold">
                                {customer.customerName.charAt(0)}
                            </div>
                            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-bold ring-1 ring-inset ${getLoyaltyStyle(customer.loyalty)}`}>
                                <MdCardMembership className="mr-1" />
                                {customer.loyalty}
                            </span>
                        </div>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-hijau transition-colors">{customer.customerName}</h3>
                                <p className="text-sm text-gray-400 font-medium">{customer.customerId}</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center text-gray-500 text-sm">
                                    <MdEmail className="mr-3 text-lg text-gray-300" />
                                    {customer.email}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <MdPhone className="mr-3 text-lg text-gray-300" />
                                    {customer.phone}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-50 flex space-x-2">
                            <button className="flex-1 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-lg transition-all">View Details</button>
                            <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                                <MdMoreVert className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Customer Modal */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Add New Customer"
            >
                <form className="space-y-5">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Full Name</label>
                        <input type="text" placeholder="John Doe" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Customer ID</label>
                            <input type="text" placeholder="CUST-XXX" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Loyalty Tier</label>
                            <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all">
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Phone Number</label>
                        <input type="tel" placeholder="0812..." className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
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
                            Save Customer
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}