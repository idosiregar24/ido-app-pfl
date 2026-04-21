import { MdDashboard, MdShoppingCart, MdPeople, MdAnalytics, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Sidebar() {
    const menuClass = `flex cursor-pointer items-center rounded-xl p-4 space-x-2
    text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold`
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <Link id="menu-1" to="/" className={menuClass}>
                            <MdDashboard className="mr-4 text-xl" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link id="menu-2" to="/Orders"className={menuClass}>
                            <MdShoppingCart className="mr-4 text-xl" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link id="menu-3" to="/Customers"className={menuClass}>
                            <MdPeople className="mr-4 text-xl" />
                            <span>Customers</span>
                        </Link>
                    </li> 
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center">
                                <MdAdd className="mr-4 text-xl" />
                                Add Menus
                            </span>
                        </div>
                    </div>
                    <img id="footer-avatar" className="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" alt="Avatar" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}