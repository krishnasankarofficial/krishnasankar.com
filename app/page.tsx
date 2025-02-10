import Hero from './ui/Hero';

export default function Home() {
  return (
    <div className="relative w-screen h-full flex flex-col items-center justify-evenly gap-4 animate-white_to_black">
      <Hero />
      <Hero />
    </div>  
  );
}
