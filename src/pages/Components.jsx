import React from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Components() {
    return (
        <div id="components-page-container" className="flex flex-col space-y-6">
            {/* 1. Page Header Component */}
            <PageHeader title="Components" breadcrumb={["Dashboard", "Order List"]} />

            {/* Content area: left-aligned with page padding matching the dashboard layout */}
            <div className="px-4 space-y-6">
                
                {/* 2. Buttons Component Row */}
                <div className="flex gap-3 flex-wrap">
                    <Button type="primary">Edit</Button>
                    <Button type="success">Simpan</Button>
                    <Button type="danger">Hapus</Button>
                </div>

                {/* 3. Avatars Component Row */}
                <div className="flex gap-3">
                    <Avatar name="F" />
                    <Avatar name="H" />
                    <Avatar name="S" />
                </div>

                {/* 4. Card Component Showcase */}
                <div>
                    <Card>
                        <h2 className="text-xl font-bold mb-2">Judul Card</h2>
                        <p className="text-gray-600">Ini adalah isi dari card.</p>
                    </Card>
                </div>

                {/* 5. ProductCard Component Showcase */}
                <div className="max-w-md">
                    <ProductCard 
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
                        title="Product Nike"
                        category="Shoes"
                        price="Rp 1.500.000"
                        description="Ini adalah deskripsi produk sepatu Nike."
                    />
                </div>

                {/* 6. Badges Component Showcase */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-800 text-sm">Badge Types</h3>
                    <div className="flex gap-3 flex-wrap">
                        <Badge type="primary">Primary</Badge>
                        <Badge type="secondary">Secondary</Badge>
                        <Badge type="success">Success</Badge>
                        <Badge type="danger">Danger</Badge>
                        <Badge type="warning">Warning</Badge>
                    </div>
                </div>

                {/* 7. Table Component Showcase */}
                <div className="space-y-3 pt-4">
                    <h3 className="font-bold text-gray-800 text-sm">Table List</h3>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <Table headers={["No", "Nama", "Peran", "Status"]}>
                            <tr className="hover:bg-gray-50 border-b border-gray-100 transition-colors">
                                <td className="border-r px-4 py-3 text-sm text-gray-500">1</td>
                                <td className="border-r px-4 py-3 text-sm font-semibold text-gray-800">Ido Siregar</td>
                                <td className="border-r px-4 py-3 text-sm text-gray-600">Developer</td>
                                <td className="px-4 py-3 text-sm">
                                    <Badge type="success">Active</Badge>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="border-r px-4 py-3 text-sm text-gray-500">2</td>
                                <td className="border-r px-4 py-3 text-sm font-semibold text-gray-800">Fikri Muhaffizh</td>
                                <td className="border-r px-4 py-3 text-sm text-gray-600">Designer</td>
                                <td className="px-4 py-3 text-sm">
                                    <Badge type="warning">Pending</Badge>
                                </td>
                            </tr>
                        </Table>
                    </div>
                </div>
            </div>

            {/* 8. Container Component Showcase (Wrapping existing components) */}
            <div className="border-t border-gray-200 bg-white py-4">
                <Container className="max-w-4xl">
                    <Card>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Container & Card Wrapper</h3>
                                <p className="text-xs text-gray-500">Kedua komponen ini (Card & Button) dibungkus di dalam komponen Container.</p>
                            </div>
                            <Button type="primary">Tombol Container</Button>
                        </div>
                    </Card>
                </Container>
            </div>

            {/* 9. Footer */}
            <div className="-mx-4 -mb-4 mt-10">
                <Footer />
            </div>
        </div>
    );
}
