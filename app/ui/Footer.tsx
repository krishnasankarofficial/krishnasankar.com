import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-between px-6  py-4">
            <span>KS</span>
            <div className="flex items-center justify-between gap-4">
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Portfolio</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>Contact</Link>
            </div>
            <button>Hire Me</button>
        </footer>
    )
}