import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-10 w-full flex items-center justify-center">
            <nav className="w-[80%] bg-black bg-opacity-20 p-6 z-50 backdrop-blur-sm flex items-center justify-between rounded-full">
                <Link href={'/'} className="text-4xl ml-6 font-anthony">Krishnasankar</Link>
                <div className="flex items-center justify-between gap-4">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Portfolio</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
                <button 
                    className="bg-gradient-to-tr from-green-500 to-cyan-500 text-black rounded-full font-semibold px-4 py-2">
                    Hire Me
                </button>
            </nav>
        </header>
    )
}