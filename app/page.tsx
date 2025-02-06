import Image from "next/image";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 relative animate-white-to-black">
      <div className="p-6 rounded-xl flex flex-col justify-center items-center">
        <Hero />
      </div>
    </div>  
  );
}
