import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdStar, MdShoppingCart, MdAdd, MdRemove } from "react-icons/md";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.message);
                    return;
                }
                setProduct(response.data);
                setActiveImage(response.data.thumbnail);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    const handleQuantity = (amount) => {
        setQuantity((prev) => {
            const newQuantity = prev + amount;
            if (newQuantity < 1) return 1;
            if (newQuantity > product.stock) return product.stock;
            return newQuantity;
        });
    };

    if (error) return <div className="text-red-600 p-4">{error}</div>;
    if (!product) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <Link to="/produk" className="flex items-center text-gray-500 hover:text-hijau font-semibold transition-colors">
                    <MdChevronLeft className="text-2xl" />
                    Kembali ke Daftar Produk
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Image Gallery */}
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-2xl shadow-sm p-4">
                        <img
                            src={activeImage}
                            alt={product.title}
                            className="rounded-xl w-full h-80 object-contain transition-all duration-300"
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                        {product.images.map((img, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveImage(img)}
                                className={`bg-white rounded-lg p-1 shadow-sm transition-all duration-200 ${activeImage === img ? 'ring-2 ring-hijau' : 'hover:ring-2 hover:ring-hijau/50'}`}
                            >
                                <img
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-16 object-cover rounded-md"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex flex-col">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium self-start mb-3">{product.category}</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{product.title}</h1>
                    <p className="text-gray-500 font-semibold mb-4">Brand: {product.brand}</p>

                    <div className="flex items-center gap-2 mb-5">
                        <div className="flex text-yellow-400">
                            {[...Array(Math.round(product.rating))].map((_, i) => <MdStar key={i} />)}
                        </div>
                        <span className="text-gray-500 text-sm font-medium">({product.rating.toFixed(1)})</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                    <div className="mt-auto">
                        <div className="flex justify-between items-center mb-5">
                            <p className="text-3xl font-extrabold text-hijau">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(product.price * 15000)}
                            </p>
                            <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
                                {product.stock} Stok Tersisa
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <label className="font-bold text-gray-700">Kuantitas:</label>
                            <div className="flex items-center border border-gray-200 rounded-lg">
                                <button onClick={() => handleQuantity(-1)} className="p-3 text-gray-500 hover:bg-gray-100 transition-colors"><MdRemove /></button>
                                <span className="px-4 font-bold text-gray-800">{quantity}</span>
                                <button onClick={() => handleQuantity(1)} className="p-3 text-gray-500 hover:bg-gray-100 transition-colors"><MdAdd /></button>
                            </div>
                        </div>

                        <button className="w-full bg-hijau hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center transition-all shadow-lg active:scale-95 text-lg">
                            <MdShoppingCart className="mr-3 text-2xl" />
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
