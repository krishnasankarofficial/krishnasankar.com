import Link from "next/link";
import Logo from "./Logo";
import { Call, EmailOutlined, Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer className="w-full mt-12 flex flex-col items-center justify-between px-12  py-4 text-black">
            <div className="w-full flex items-start justify-between">
                <div className="flex-1 flex flex-col">
                    <Logo size="lg" />
                    <Link href={'mailto:krishnasankarofficial@gmail.com'}>
                        krishnasankarofficial@gmail.com
                    </Link>
                    <Link href={'tel:917306310132'}>
                        +(91) 730 631 0132
                    </Link>
                    <p className="mt-6 font-raleway font-semibold text-3xl">
                        With Great Power, <br></br> Comes Great Responsiblity.
                    </p>
                    <span>Stan Lee, 1962</span>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <div className="w-full flex items-start justify-between gap-24">
                         <div className="flex flex-col gap-2">
                            <span className="font-bold font-raleway text-xl">Links</span>
                            <Link href={''}>Home</Link>
                            <Link href={''}>About</Link>
                            <Link href={''}>Blogs</Link>
                         </div>
                         <div className="flex flex-col gap-2">
                            <span className="font-bold font-raleway text-xl">Services</span>
                            <Link href={''}>Website</Link>
                            <Link href={''}>E-Commerce</Link>
                            <Link href={''}>Maintenance</Link>
                            <Link href={''}>UI/UX</Link>
                         </div>
                         <div className="flex flex-col gap-2">
                            <span className="font-bold font-raleway text-xl">Legal</span>
                            <Link href={''}>Privacy</Link>
                            <Link href={''}>Terms of use</Link>
                            <Link href={''}>Cookies</Link>
                         </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-black rounded-full  my-4"></div>
            <div className="w-full flex items-center justify-between">
                <div className="flex-1 flex items-center justify-between gap-4">
                    &copy; Krishnasankar 2025, All rights reserved.
                </div>
                <div className="flex items-center justify-evenly gap-6">
                    <Link 
                        href={''}
                        className="bg-black p-1 rounded-xl text-white flex items-center justify-center text-sm"
                        >
                        <Instagram />
                    </Link>
                    <Link 
                        href={''}
                        className="bg-black p-1 rounded-xl text-white flex items-center justify-center text-sm"
                        >
                        <Facebook />
                    </Link>
                    <Link 
                        href={''}
                        className="bg-black p-1 rounded-xl text-white flex items-center justify-center text-sm"
                        >
                        <WhatsApp />
                    </Link>
                </div>
            </div>
        </footer>
    )
}