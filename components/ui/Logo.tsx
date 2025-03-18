import Link from "next/link";

interface LogoProps {
    size?: "lg" | "md" | "sm";
}

export default function Logo({ size }: LogoProps) {
    return (
        <Link 
            href="/" 
            className={`font-anthony translate-y-1 ${
                size === 'lg' ? 'text-5xl' : 'text-3xl'
            }`}
        >
            Krishnasankar
        </Link>
    );
}
