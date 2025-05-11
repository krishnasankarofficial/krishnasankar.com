import { CallOutlined, Facebook, Instagram, MailOutline, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="relative w-screen h-screen flex items-start justify-center gap-4 px-10 md:px-32 lg:px-40 py-48">
        <div className="flex-1 h-full flex flex-col items-start justify-between gap-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-raleway bg-gradient-to-b from-slate-700 to-black bg-clip-text text-transparent">
                Get in Touch With Me
            </h1>
            <span className="text-xl font-bold mb-4">Let&apos;s Build Something Great Together!</span>
            <p className="mb-4">
                Got a project in mind or need a web solution? Feel free to reach out. <br></br>
                I&apos;m always open to discussing new ideas, collaborations, or freelance opportunities.
            </p>
            <div className="flex items-center gap-2">
                <MailOutline style={{fontSize:20}}/>
                <span className="font-bold">Email:</span>
                <Link target="_blank" href={'mailto:krishnasankarofficial@gmail.com'} className="">krishnasankarofficial@gmail.com</Link>
            </div>
            <div className="flex items-center gap-2">
                <CallOutlined style={{fontSize:20}}/>
                <span className="font-bold">Phone:</span>
                <Link target="_blank" href={'tel:917306310132'} className="">+91 730 631 0132</Link>
            </div>
            <div className="w-full flex items-center justify-between gap-2 pr-12 mt-14">
                <span className="font-bold font-raleway text-2xl">
                    Follow Me on Social Media
                </span>
                <div className="flex items-center gap-2">
                    <div>
                        <Link 
                            target="_blank" 
                            href={'https://www.instagram.com/ki.chu____'}
                            className="bg-gradient-to-t from-slate-900 to-slate-800 p-2 rounded-xl text-white flex items-center justify-center text-sm hover:-translate-y-1 duration-300 active:scale-90"
                            >
                            <Instagram style={{fontSize:20}}/>
                        </Link>
                    </div>
                    <div>
                        <Link 
                            target="_blank" 
                            href={'https://www.facebook.com/krishna.sankar.587/'}
                            className="bg-gradient-to-t from-slate-900 to-slate-800 p-2 rounded-xl text-white flex items-center justify-center text-sm hover:-translate-y-1 duration-300 active:scale-90"
                            >
                            <Facebook style={{fontSize:20}}/>
                        </Link>
                    </div>
                    <div>
                        <Link 
                            target="_blank" 
                            href={'https://wa.me/+917306310132'}
                            className="bg-gradient-to-t from-slate-900 to-slate-800 p-2 rounded-xl text-white flex items-center justify-center text-sm hover:-translate-y-1 duration-300 active:scale-90"
                            >
                            <WhatsApp style={{fontSize:20}}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <form action={''} className="flex-1 h-full flex flex-col items-start justify-between gap-4">
            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold font-raleway bg-gradient-to-b from-slate-700 to-black bg-clip-text text-transparent">
                Fill in the blanks
            </h2>
            <label className="flex flex-row gap-2 w-full">
                My name is 
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    placeholder="First name*" 
                    required /> 
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder="Last name*"
                    required />
            </label>
            <label className="flex flex-row gap-2 w-full">
                I&apos;m from 
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="text" 
                    name="company" 
                    id="company" 
                    placeholder="Company(Optional)" />
            </label>
            <label className="flex flex-row gap-2 w-full">
                Here is my Email ID
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email*" 
                    required />
            </label>
            <label className="flex flex-row gap-2 w-full">
                Here is my Phone Number
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="phone" 
                    name="phone" 
                    id="phone" 
                    placeholder="Phone" />
            </label>
            <label className="flex flex-row gap-2 w-full">
                I would like to discuss about
                <input 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    placeholder="Subject" />
            </label>
            <label className="flex flex-row gap-2 w-full">
                Here is my message
                <input
                    type="text" 
                    className="bg-transparent outline-none ring-0 focus:outline-none border-b border-dashed border-black placeholder:text-slate-700 flex-1" 
                    name="message" 
                    id="message" 
                    placeholder="Message"
                ></input>
            </label>
            <label className="flex flex-row gap-2 w-full mt-6">
                <button type="submit" className="flex-1 px-6 py-3 font-medium rounded-2xl bg-gradient-to-t from-slate-900 to-slate-800 text-white hover:scale-105 active:scale-90 shadow-xl duration-300">
                    Send Message
                </button>    
            </label>
      </form>
    </section>
  );
}