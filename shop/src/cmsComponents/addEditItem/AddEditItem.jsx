import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddEditItem({ initialData = null, onSave = () => {} }) {
    const [prodName, setProdName] = useState("");
    const [prodDescription, setProdDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [prodQty, setProdQty] = useState(0);
    const [prodPrice, setProdPrice] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Home" },
        { id: 4, name: "Books" },
    ];

    useEffect(() => {
        if (initialData) {
            setProdName(initialData.prodName || "");
            setProdDescription(initialData.prodDescription || "");
            setCategoryId(initialData.categoryId || "");
            setProdQty(initialData.prodQty ?? 0);
            setProdPrice(initialData.prodPrice ?? 0);
        }
    }, [initialData]);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");

        const payload = {
            prodName: prodName || "",
            prodDescription: prodDescription || "",
            prodQty: Number(prodQty) || 0,
            prodPrice: Number(prodPrice) || 0,
            isActive: true,
            createdBy: 1,
        };

        try {
            const res = await axios.post(
                "https://localhost:7014/api/Product/SaveProduct",
                payload
            );
            setMessage("Saved successfully.");
            onSave(res.data);
        } catch (error) {
            console.error("Save error:", error);
            setMessage("Error saving item. Check console for details.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="max-w-3xl bg-white p-6 rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-4">
                {initialData ? "Edit Item" : "Add Item"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <input
                        type="text"
                        value={prodName}
                        onChange={(e) => setProdName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        value={prodDescription}
                        onChange={(e) => setProdDescription(e.target.value)}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    >
                        <option value="">Select category</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Quantity</label>
                        <input
                            type="number"
                            value={prodQty}
                            onChange={(e) => setProdQty(e.target.value)}
                            min={0}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            value={prodPrice}
                            onChange={(e) => setProdPrice(e.target.value)}
                            min={0}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
                    >
                        {isSubmitting ? "Saving..." : "Save"}
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            // simple reset for add mode; for edit mode you might want different behavior
                            if (!initialData) {
                                setProdName("");
                                setProdDescription("");
                                setCategoryId("");
                                setProdQty(0);
                                setProdPrice(0);
                                setMessage("");
                            }
                        }}
                        className="bg-gray-200 text-gray-800 px-3 py-2 rounded"
                    >
                        Reset
                    </button>
                </div>

                {message && <p className="text-sm text-gray-700 mt-2">{message}</p>}
            </form>
        </section>
    );
}