import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-full flex flex-col items-center justify-evenly gap-4 animate-white_to_black">
      <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-green-500 to-cyan-500 -z-10 blur-3xl opacity-80 animate-scale_n_glow"></div>
      <div className="p-6 rounded-xl flex flex-col justify-center items-center gap-4">
        <h1 className="text-5xl font-bold z-10">Hello!</h1>
        <h2 className="text-7xl font-extrabold font-raleway z-10">It&apos;s me, Krishnasankar</h2>
        <h2 className="text-4xl font-bold z-10">Your go-to Digital Partner</h2>
        <p className="text-xl font-semibold z-10">
          Let&apos;s build something awesome!
        </p>
      </div>
      <div className="animate-bounce flex flex-col gap-2 items-center justify-center">
        <span className='text-xl'>Scroll down</span>
        <KeyboardDoubleArrowDownIcon style={{fontSize:30}}/>
      </div>
    </div>  
  );
}
