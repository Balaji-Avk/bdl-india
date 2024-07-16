import Image from "next/image"
import { Menubtn } from "./btn"
import logo from "/public/image.png"
import Link from "next/link"
export const NavBar = ()=>{
    return (
        <div className="fixed z-10 my-4 py-4 px-5 bg-black items-center align-middle text-center left-10 right-10 flex justify-between text-slate-50 ring-opacity-60 hover:ring-opacity-100 ring-white ring-1 border-white rounded-lg h-22">
            <div className="mx-1 flex items-center">
                <div className="flex flex-col items-center">
                    <Image 
                        src ={logo}
                        width={100}
                        height={100}
                        alt="logo"
                    />
                    <div className="text-xs">
                        <p>शांति का आधार अस्त्र-बल</p>
                        <p>The Force Behind Peace</p>
                    </div>
                </div>
                <div className="pl-2">
                    <p className="ml-2 text-md">BHARAT DYNAMICS LIMITED</p>
                    <p className="text-xs">A Govt of India Enterprise, Ministry of Defence</p>
                    <p className="text-xs">CIN:L24292TG1970GOI001353</p>
                </div>
            </div>
            <div className="mx-1 flex  align-middle items-center">
                <Menubtn href="/" title="Home"/> 
                <Menubtn href="/amogha" title="AMOGHA"/> 
                <Menubtn href="/qrsam" title="Q R SAM"/> 
                <Menubtn href="/milan" title="MILAN"/>
                <Menubtn href="/nag" title="NAG"/>
                <Menubtn href="/konkurs" title="KONKURS"/>
                <Menubtn href="/unifiedlauncher" title="UNIFIED LAUNCHER"/>
                <div className="group relative pl-2 align-middle">
                    <div className="cursor-pointer flex hover:text-slate-200 group items-center">
                        <span className="pr-1">About us</span>
                        <svg className="rotate-180 transition-all group-hover:rotate-0" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
                    </div>
                    <div className="absolute bg-stone-900 top-6 -right-20 hidden w-60 flex-col gap-1 rounded-lg transition-all  group-hover:flex">
                        <Link href="/companyprofile" className="text-slate-200 hover:text-white border-b-[1px] border-solid border-slate-400 py-2">Company Profile</Link>
                        <Link href="/missionvisionvalues" className="text-slate-200 hover:text-white border-b-[1px] border-solid border-slate-400 pb-2">Mission , Vision and Values</Link>
                       {/* <Link href="/videogallery" className="text-slate-200 hover:text-white border-b-[1px] border-solid border-slate-400 pb-2">Video Gallery</Link>    */}
                        <Link href="/careers" className="text-slate-200 hover:text-white pb-2">Careers</Link>
                    </div>
                </div>
            </div>

            <div className="mx-2 flex justify-between">
                <Menubtn href="/login" title="Login"/> 
                <Menubtn href="/signup" title="Signup" variant="destructive"/> 
            </div>

        </div>
    )
}