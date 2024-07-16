import { NavBar } from "@/components/navbar";
import Image from "next/image";
import unifiedLauncher from "/public/unifiedLauncher.png"
import scrolldown from "/public/scrolldown.gif"
import TRow from "@/components/ui/tablerow";
import unifiedLauncherColor from "/public/unifiedLauncherColor.png"

export default function UnifiedLauncher(){
    return(
        <div className="bg-black text-white flex flex-col">
            <NavBar />
            
            <div className="h-screen flex flex-col items-center">
                <div className="h-screen pt-56 text-center">
                    <div className="animate-fade text-6xl font-bold p-5">
                        UNIFIED LAUNCHER
                    </div>
                </div>
                
                <div className="delay-1000 absolute bottom-2 flex flex-col items-center">
                    <Image src={scrolldown}  height={90} width={90} alt=""/>
                </div>
            </div>
            <div className="relative">
                <div className="h-screen flex p-18">
                    <div className="pt-28 pl-10 text-wrap max-w-[40rem] text-xl">
                        UNIFIED LAUNCHER is designed for aiming missile 9M111M I 9M113 I 9M113M at a target for launching the missile and guiding in-flight under actual combat conditions, if visual observation of the target is possible.
                    </div>

                    <div className="absolute right-72 top-20">
                        <Image className="" src={unifiedLauncher} height={300} width={500} alt=""/>
                    </div>
                </div>
                <div className="relative h-screen flex p-18 justify-between">
                    <div className="pt-40 pl-40 text-wrap  text-xl">
                        <div>
                            <p className="text-2xl font-light">
                                UNIFIED LAUNCHER
                            </p>
                            <p className="text-4xl font-extrabold">
                                OVERVIEW
                            </p>
                        </div>

                        <table className="my-4 text-lg min-w-[30rem]">
                            <tbody>
                                <TRow rowKey="Aiming and positioning of the missile at a target"/>
                                <TRow rowKey="Launching of the missile"/>
                                <TRow rowKey="Visual detection and subsequent tracking of a target"/>
                                <TRow rowKey="Automatic determination of flying missile coordinates"/>
                                <TRow rowKey="Modulating the commands and the feeding to wire communication line"/>
                                <TRow rowKey="Carrying out guidance for both stationary and moving targets"/>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 box-border h-0.5 w-0.5 opacity-30 rounded-full shadow-[0_0px_400px_400px_rgba(255,255,255,0.2)]">
                    </div>
                    
                    
                    <div className="absolute right-72 top-20">
                        <Image className="" src={unifiedLauncherColor} height={300} width={500} alt=""/>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}