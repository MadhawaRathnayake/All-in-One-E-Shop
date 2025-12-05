// ...existing code...
import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
    const slides = [
        {
            title: "Spring Collection",
            subtitle: "New arrivals · Limited edition",
            img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80&auto=format&fit=crop"
        },
        {
            title: "Casual Comfort",
            subtitle: "Everyday essentials for your wardrobe",
            img: "https://images.unsplash.com/photo-1520975668936-c66d6ac3f5b9?w=1600&q=80&auto=format&fit=crop"
        },
        {
            title: "Urban Style",
            subtitle: "Modern looks, timeless feel",
            img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1600&q=80&auto=format&fit=crop"
        }
    ];

    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const pauseRef = useRef(false);

    useEffect(() => {
        startAuto();
        return () => stopAuto();
    }, []);

    useEffect(() => {
        if (index >= slides.length) setIndex(0);
    }, [slides.length, index]);

    function startAuto() {
        stopAuto();
        intervalRef.current = setInterval(() => {
            if (!pauseRef.current) {
                setIndex((i) => (i + 1) % slides.length);
            }
        }, 4500);
    }

    function stopAuto() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function goTo(i) {
        setIndex(i);
        startAuto();
    }

    function prev() {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
        startAuto();
    }

    function next() {
        setIndex((i) => (i + 1) % slides.length);
        startAuto();
    }

    return (
        <section className="relative w-full h-[90vh] overflow-hidden rounded-lg shadow-lg select-none bg-red"
            onMouseEnter={() => (pauseRef.current = true)}
            onMouseLeave={() => (pauseRef.current = false)}>
            <div className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}>
                {slides.map((s, i) => (
                    <div key={i} className="min-w-full relative">
                        <img
                            src={s.img}
                            alt={s.title}
                            className="absolute inset-0 w-full h-[90vh] object-cover"
                            draggable={false}/>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 h-[90vh] flex flex-col justify-center items-start p-6 md:p-12 text-white">
                            <h2 className="text-2xl md:text-6xl font-semibold">{s.title}</h2>
                            <p className="mt-2 text-sm md:text-lg opacity-90">{s.subtitle}</p>
                            <button
                                className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium"
                                onClick={() => console.log("CTA clicked", s.title)}>
                                Shop now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button
                aria-label="Previous slide"
                onClick={prev}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
                ‹
            </button>
            <button
                aria-label="Next slide"
                onClick={next}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            >
                ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}