import { NavBar } from "@/components/navbar";
import Image from "next/image";
import nag from "/public/nag.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import nagColor from "/public/nagColor.png"

export default function Nag(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5">
                        NAG ATGM
                    </div>
                </div>
                
                <div className="delay-1000 absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        NAG is a third generation Anti-Tank Guided Missile with Fire and Forget top attack capability.
                    </div>

                    <div className="absolute right-80 top-20">
                        <Image className="" src={nag} height={100} width={250} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                NAG ATGM
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Length" value="1832 mm"/>
                                <TRow rowKey="Guidance" value="Passive Homing through IIR Seeker"/>
                                <TRow rowKey="Control" value="Aerodynamic Tail Fin Control"/>
                                <TRow rowKey="Warhead" value="Tandem"/>
                                <TRow rowKey="Max Range" value="4000 metres"/>
                                <TRow rowKey="Min Range" value="500 meters"/>
                                <TRow rowKey="Missile Speed" value="220 - 230 m / sec"/>
                                <TRow rowKey="All Up Weight" value="42 Kg"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    
                    <div className="absolute right-80 top-20">
                        <Image className="" src={nagColor} height={100} width={250} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}