import Link from "next/link";

interface LogoProps {
    size?: "lg" | "md" | "sm";
}

export default function Logo({ size }: LogoProps) {
    return (
        <Link 
            href="/" 
            className={`font-anthony translate-y-1 ${size === 'lg' ? 'xl:text-6xl text-5xl' : 'xl:text-5xl text-4xl'}  bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent`}
        >
            Krishnasankar
        </Link>
    );
}
