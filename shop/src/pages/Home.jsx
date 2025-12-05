import Hero from "../components/hero/Hero";
import Shop from "./Shop/Shop";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <Hero />
            <Shop />
        </main>
    )
}
