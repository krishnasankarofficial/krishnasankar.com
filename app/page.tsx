import Hero from './ui/Hero';
import Services from './ui/Services';
import StayHead from './ui/StayHead';
import Megamenu from './ui/Megamenu';

export default function Home() {
  return (
    <div className="relative w-screen h-full flex flex-col items-center justify-evenly gap-12 animate-white_to_black px-40">
      <Hero />
      <StayHead />
      <Services />
    </div>  
  );
}
