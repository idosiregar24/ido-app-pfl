import React, { useState, useEffect } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

import avatarImage from "../assets/placeholder.png";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
 
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showModal]);

    return (
        <div>
            <div id="header-container" className="flex justify-between items-center p-4 bg-white border-b border-gray-100 shadow-sm">
                
                <div id="search-bar" className="relative w-full max-w-lg cursor-pointer" onClick={() => setShowModal(true)}>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search Here..."
                        readOnly
                        className="border border-gray-200 p-2 pr-10 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 w-full rounded-lg outline-none cursor-pointer"
                    />
                    <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div id="icons-container" className="flex items-center space-x-4">
                    
                    <div id="notification-icon" className="relative p-3 bg-blue-50 hover:bg-blue-100 transition duration-200 rounded-xl text-blue-500 cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-0.5 text-[10px] font-bold border-2 border-white">
                            50
                        </span>
                    </div>
                    
                    <div id="chart-icon" className="p-3 bg-blue-50 hover:bg-blue-100 transition duration-200 rounded-xl cursor-pointer">
                        <FcAreaChart />
                    </div>
                    
                    <div id="settings-icon" className="p-3 bg-red-50 hover:bg-red-100 transition duration-200 rounded-xl text-red-500 cursor-pointer">
                        <SlSettings />
                    </div>

                    <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-200">
                        <span id="profile-text" className="text-gray-700 hidden md:block">
                            Hello, <b className="text-gray-900">Fikri Muhaffizh</b>
                        </span>
                        <img
                            id="profile-avatar"
                            src={avatarImage}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 hover:border-blue-400 transition duration-200 cursor-pointer"
                            alt="Profile Avatar"
                        />
                    </div>
                    
                </div>
            </div>

            {showModal && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 z-50 transition-opacity"
                    onClick={() => setShowModal(false)}
                >
                    <div 
                        className="bg-white rounded-xl shadow-2xl w-11/12 max-w-2xl overflow-hidden transform transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center p-4 border-b border-gray-100">
                            <FaSearch className="text-gray-400 text-xl mr-4" />
                            <input 
                                className="text-xl w-full outline-none text-gray-700 bg-transparent placeholder-gray-400" 
                                placeholder="Cari sesuatu..." 
                                autoFocus 
                            />
                            <button 
                                onClick={() => setShowModal(false)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        
                        <div className="p-4 bg-gray-50 flex justify-between items-center text-xs text-gray-500">
                            <span>Ketik untuk mulai mencari</span>
                            <span>Tekan <kbd className="bg-white border border-gray-200 rounded px-2 py-1 shadow-sm font-sans">Esc</kbd> untuk menutup</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}