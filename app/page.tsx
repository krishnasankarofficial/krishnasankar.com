import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-green-500 to-cyan-500 text-black">
      <div className="p-6 rounded-xl flex flex-col justify-center items-center relative border">
        <div className="w-full h-full absolute top-0 left-0 bg-white z-0 rounded-xl opacity-30 blur-sm"></div>
        <h1 className="text-6xl font-extrabold font-raleway z-10">Krishnasankar | Freelance Web Developer</h1>
        <p className="z-10">
          Krishnasankar is a freelance web developer specializing in modern web technologies and responsive design. 
          Discover his portfolio and services.
        </p>
      </div>
    </div>  
  );
}
