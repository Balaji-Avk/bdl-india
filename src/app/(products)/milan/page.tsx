import { NavBar } from "@/components/navbar";
import Image from "next/image";
import milan from "/public/milan.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import milanColor from "/public/milan_color.png"

export default function Milan(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5">
                        MILAN - 2T ATGM
                    </div>
                </div>
                <div className="absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        MILAN - 2T is a man portable (Infantry) second generation ATGM, to destroy Tanks fitted with Explosive Reactive Armour, moving and stationary targets.
                    </div>

                    <div className="absolute right-80 top-20">
                        <Image className="" src={milan} height={300} width={300} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                MILAN - 2T ATGM
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Range" value="25 - 1850 m"/>
                                <TRow rowKey="Weight" value="7.1 kg"/>
                                <TRow rowKey="Length" value="1123 mm"/>
                                <TRow rowKey="Caliber" value="115 mm"/>
                                <TRow rowKey="Penetration" value=">850mm behind ERA"/>
                                <TRow rowKey="Flight Time" value="12.5 s"/>
                                <TRow rowKey="Reliability" value="95%"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    <div className="absolute right-80 top-20">
                        <Image className="" src={milanColor} height={300} width={300} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}