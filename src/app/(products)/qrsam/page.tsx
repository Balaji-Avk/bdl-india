import { NavBar } from "@/components/navbar";
import Image from "next/image";
import qrsam from "/public/qrsam.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import qrsamColor from "/public/qrsam_color.png"

export default function Qrsam(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5 px-20">
                    QUICK REACTION SURFACE -TO- AIR MISSILE (Q R SAM)
                    </div>
                </div>
                <div className="fade-in delay-1000 absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        QUICK REACTION SURFACE TO AIR MISSILE (QRSAM) is a quick reaction Surface to Air Missile capable of Search on Move, Track on Move and Fire on Short halts.
                    </div>

                    <div className="absolute right-80 top-20">
                        <Image className="" src={qrsam} height={300} width={300} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                Q R SAM
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Length" value="4364 mm"/>
                                <TRow rowKey="Weight" value="270 kgs"/>
                                <TRow rowKey="Range & Altitude" value="05 to 30 Km & 6 Km"/>
                                <TRow rowKey="SSKP" value="> 80%"/>
                                <TRow rowKey="Length & Dia" value="4.4 m & 0.225 m"/>
                                <TRow rowKey="Warhead" value="Pre-Fragmented & High Energy"/>
                                <TRow rowKey="Launch" value="Canisterized Inclined Launch"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    
                    <div className="absolute right-80 top-20">
                        <Image className="" src={qrsamColor} height={300} width={300} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}