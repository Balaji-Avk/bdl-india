import { NavBar } from "@/components/navbar";
import Image from "next/image";
import konkurs from "/public/konkurs.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import konkursColor from "/public/konkursColor.png"

export default function Konkurs(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5">           
                        KONKURS - M ATGM
                    </div>
                </div>
                
                <div className="delay-1000 absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        <p className="pb-2">KONKURS-M is a Second Generation, mechanized infantry ATGM, to destroy armored vehicle equipped with Explosive Reactive Armour, moving and stationary targets.</p>
                        <p>A higher homologue of Konkurs missile with improved warhead penetration.</p>
                    </div>

                    <div className="absolute right-80 top-20">
                        <Image src={konkurs} height={300} width={300} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                KONKURS - III
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Range" value="75 - 4000 m"/>
                                <TRow rowKey="Length" value="1260 mm"/>
                                <TRow rowKey="Caliber" value="135 mm"/>
                                <TRow rowKey="Flight time" value="19 s"/>
                                <TRow rowKey="Armour Penetration" value="800 mm behind ERA"/>
                                <TRow rowKey="Weight" value="16.5 kg"/>
                                <TRow rowKey="High hit and kill probability"/>
                                <TRow rowKey="Can be launched either from BMP-II or from ground launcher"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    
                    <div className="absolute right-80 top-20">
                        <Image className="" src={konkursColor} height={300} width={300} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}