import Clients from './ui/Clients';
import FAQ from './ui/FAQ';
import Hero from './ui/Hero';
import Services from './ui/Services';
import StayHead from './ui/StayHead';

export default function Home() {
  return (
    <div className="relative w-screen h-full flex flex-col items-center justify-evenly gap-12 animate-white_to_black px-10 md:px-32 lg:px-40">
      <Hero />
      <Services />
      <StayHead />
      <Clients />
      <FAQ />
    </div>  
  );
}
