import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

export default function     Shop() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProductsNow();
    }, []);

    async function getAllProductsNow() {
        try {
            const res = await axios.get("https://localhost:7014/api/Product/GetAllProducts");
            setAllProducts(res.data.data || []);
            console.log("Products:", res.data.data);
        } catch (error) {
            console.error("API fetch error:", error);
            setAllProducts([]);
        }
    }

    return (
        <section className="w-10/12 bg-gray-50 py-8">
            <div className="grid grid-cols-4 gap-6">
                {allProducts.map((item, index) => (
                    <div key={item.prodID} className="border border-gray-300 p-4">
                        <h3>{item.prodName}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}