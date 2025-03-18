import Clients from '@/components/section/Clients';
import FAQ from '@/components/section/FAQ';
import Hero from '@/components/section/Hero';
import Services from '@/components/section/Services';
import StayHead from '@/components/section/StayHead';

export default function Home() {
  return (
    <div className="relative w-screen flex flex-col items-center justify-evenly gap-12 px-10 md:px-32 lg:px-40">
      <Hero />
      <Services />
      <StayHead />
      <Clients />
      <FAQ />
    </div>  
  );
}
