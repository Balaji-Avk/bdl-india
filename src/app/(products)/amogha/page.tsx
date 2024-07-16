import { NavBar } from "@/components/navbar";
import Image from "next/image";
import amogha from "/public/amogha.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import amoghaColor from "/public/amogha_color.png"

export default function Amogha(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5">
                        AMOGHA - III ATGM
                    </div>
                </div>
                
                <div className="delay-1000 absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        Amogha-III is a third generation fire-and-forget Anti-Tank Guided Missile designed and developed by the in - house R&D Division of BDL.
                    </div>

                    <div className="absolute right-80 top-20">
                        <Image className="" src={amogha} height={300} width={300} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                Amogha - III
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Range" value="200 - 2500 m"/>
                                <TRow rowKey="Attack mode" value="Top / direct attack"/>
                                <TRow rowKey="Portability" value="Man-portable"/>
                                <TRow rowKey="Launch type" value="soft launch"/>
                                <TRow rowKey="Dual Mode Imaging Infra-Red (IIR) Seeker"/>
                                <TRow rowKey="Aerodynamic and Thrust Vector Control"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    
                    <div className="absolute right-80 top-20">
                        <Image className="" src={amoghaColor} height={300} width={300} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}