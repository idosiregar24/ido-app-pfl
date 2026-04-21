export default function NotFound() {
    return (
        <div id="dashboard-container" className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col justify-center items-center">
                {/* Error Content */}
                <main className="flex-1 flex flex-col justify-center items-center text-center">
                    
                    <h1 className="text-7xl font-bold text-green-500 mb-4">
                        404
                    </h1>

                    <p className="text-xl text-gray-700 mb-2">
                        Halaman Tidak Ditemukan
                    </p>

                    <p className="text-gray-500 mb-6">
                        Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
                    </p>

                    <button
                        onClick={() => window.location.href = "/"}
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                    >
                        Kembali ke Dashboard
                    </button>
                </main>
            </div>
        </div>
    );
}