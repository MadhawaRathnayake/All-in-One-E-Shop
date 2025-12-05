import React from "react";

const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "inventory", label: "Inventory" },
    { id: "addItem", label: "Add Item" },
    { id: "addCategory", label: "Add Category" },
    { id: "userManagement", label: "User Management" },
    { id: "sales", label: "Sales" },
];

export default function CMSNavigation({ activeSection, setActiveSection }) {
    return (
        <nav aria-label="CMS navigation">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">CMS</h2>
            </div>
            <ul className="space-y-2">
                {navItems.map((item) => {
                    const isActive = item.id === activeSection;
                    return (
                        <li key={item.id}>
                            <button
                                type="button"
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-colors focus:outline-none ${
                                    isActive
                                        ? "bg-gray-700 text-white font-medium"
                                        : "text-gray-200 hover:bg-gray-700/50"
                                }`}
                                aria-pressed={isActive}
                            >
                                {item.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}