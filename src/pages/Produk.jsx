import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdMoreVert, MdFilterList, MdSearch } from "react-icons/md";
import PageHeader from '../components/PageHeader';
import Modal from "../components/Modal";
import produkData from '../data/Produk.json';

const Produk = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState(produkData);

    // Fungsi untuk styling stok (opsional, memberikan warna berdasarkan jumlah stok)
    const getStockStyle = (stock) => {
        if (stock === 0) return "bg-red-100 text-red-700";
        if (stock < 10) return "bg-yellow-100 text-yellow-700";
        return "bg-green-100 text-green-700";
    };

    return (
        <div id="produk-container" className="flex flex-col space-y-6 p-4">
            <PageHeader title="Produk" breadcrumb={["Dashboard", "Produk"]}>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-hijau hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center transition-all shadow-lg active:scale-95"
                >
                    <MdAdd className="mr-2 text-xl" />
                    Tambah Produk
                </button>
            </PageHeader>

            {/* Filters and Search */}
            <div className="px-4 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mx-4">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                        <input 
                            type="text" 
                            placeholder="Cari produk..." 
                            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-hijau/20 w-64 transition-all outline-none"
                        />
                    </div>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-hijau transition-colors px-3 py-2 rounded-lg hover:bg-green-50">
                        <MdFilterList className="text-xl" />
                        <span className="font-medium">Filter</span>
                    </button>
                </div>
                <div className="text-gray-400 text-sm font-medium">
                    Menampilkan {products.length} produk
                </div>
            </div>

            {/* Table */}
            <div className="mx-4 bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100">
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">ID</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Nama Produk</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Kategori</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider">Brand</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider text-right">Harga</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider text-center">Stok</th>
                            <th className="px-6 py-4 font-bold text-gray-700 uppercase text-xs tracking-wider text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-900">#{item.id}</td>
                                <td className="px-6 py-4">
                                    <Link to={`/products/${item.id}`} className="text-emerald-400 hover:text-emerald-500">
                                        <span className="font-bold text-gray-800">{item.title}</span>
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium">
                                        {item.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{item.brand}</td>
                                <td className="px-6 py-4 text-right font-bold text-gray-900">
                                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price)}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStockStyle(item.stock)}`}>
                                        {item.stock} Qty
                                    </span>
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

            {/* Add Product Modal */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Tambah Produk Baru"
            >
                <form className="space-y-5">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Nama Produk</label>
                        <input type="text" placeholder="Masukkan nama produk" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Kategori</label>
                            <select className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all">
                                <option value="">Pilih Kategori</option>
                                <option value="Elektronik">Elektronik</option>
                                <option value="Pakaian">Pakaian</option>
                                <option value="Makanan">Makanan</option>
                            </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-gray-700">Stok</label>
                            <input type="number" placeholder="0" className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-bold text-gray-700">Harga Jual</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">Rp</span>
                            <input type="number" placeholder="0" className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-hijau/20 outline-none transition-all" />
                        </div>
                    </div>

                    <div className="pt-4 flex space-x-3">
                        <button 
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="flex-1 px-6 py-3 border border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all"
                        >
                            Batal
                        </button>
                        <button 
                            type="submit"
                            className="flex-1 px-6 py-3 bg-hijau text-white font-bold rounded-xl hover:bg-green-600 transition-all shadow-lg"
                        >
                            Simpan Produk
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Produk;