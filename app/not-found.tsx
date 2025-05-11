"use client"


import { useRouter } from "next/navigation";

export default function PageNotFound() {
    const router = useRouter();

    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="py-4 text-4xl md:text-5xl lg:text-6xl font-extrabold font-raleway bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent">
                404 - Page Not Found
            </h1>
            <button
                onClick={() => router.back()}
                className="bg-gradient-to-t from-black to-gray-700 text-white cursor-pointer rounded-full font-semibold px-4 py-2 shadow-sm"
            >
                Go Back
            </button>
        </section>
    );
}