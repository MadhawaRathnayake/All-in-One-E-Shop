import { useState } from "react";
import Inventory from "../../cmsComponents/inventory/Inventory";
import CMSNavigation from "../../cmsComponents/navigation/CMSNavigation";
import Dashboard from "../../cmsComponents/dashboard/dashboard";
import AddEditItem from "../../cmsComponents/addEditItem/AddEditItem";

export default function CMS(){
    const [activeSection, setActiveSection] = useState("dashboard");

    const renderContent = () => {
        switch(activeSection) {
            case "dashboard":
                return <Dashboard />;
            case "inventory":
                return <Inventory />;
            case "addItem":
                return <AddEditItem />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <main className="flex h-screen">
            <section className="w-1/5 bg-gray-800 text-white p-6">
                <CMSNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
            </section>
            <section className="w-4/5 bg-gray-50 p-8 overflow-auto">
                {renderContent()}
            </section>
        </main>
    )
}