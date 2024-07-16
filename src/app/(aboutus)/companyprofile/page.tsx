import { NavBar } from "@/components/navbar"
import Image from "next/image"
import bdl from "/public/bdlOfficeLogo.jpg"
import bdlOffice from "/public/bdlOffice.jpg"
import bdlfront from "/public/bdlfront.jpeg"

export default function CompanyProfile(){
    return(
        <div className="bg-black">
            <NavBar />
            <div className="pt-32 container mx-auto p-8 rounded shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center py-2 ">Company Profile</h1>
                <div className="space-y-4">
                <div className="flex flex-col items-center p-2">
                    <Image src={bdl} height={"500"} width={"500"} alt=""/>
                </div>
                <p>1. Headquartered in Hyderabad, Bharat Dynamics Limited (BDL), was incorporated on 16 July, 1970 as a Public Sector Undertaking under the Ministry of Defence, Government of India to be the manufacturing base for guided missile systems and allied equipment for the Indian Armed Forces.</p>
                <p>Since its inception, BDL has been working in collaboration with DRDO & foreign Original Equipment Manufacturers (OEMs) for manufacture and supply of various missiles and allied equipment to Indian Armed Forces.</p>
                <p>2. The lead taken by the Nation to develop indigenous, sophisticated and contemporary missiles through the Integrated Guided Missile Development Programme (IGMDP), gave BDL an opportunity to be closely involved in the programme, wherein it was identified as the Prime Production Agency. This opened up a plethora of opportunities to assimilate advanced manufacturing and programme management technologies and skills.</p>
                <p>3. Today, BDL has evolved as one among the few industries in the world having state-of-the-art facilities for manufacture and supply of Guided Missiles, Underwater Weapons, Air- borne products and allied defence equipment for the Indian Armed Forces. The Company also offers Product Life Cycle Support and Refurbishment / Life Extension of vintage Missiles.</p>
                <p>4. BDL has graduated from being a missile manufacturer to a Weapon System Integrator and has emerged as a complete solution provider for the Indian Armed Forces.</p>
                <p>5. BDL has four manufacturing units, out of which three are located in Telangana State (Hyderabad, Bhanur and Ibrahimpatnam) and one Andhra Pradesh (Visakhapatnam). As a part of its expansion plan, BDL is setting up one unit at Amravati in Maharashtra to cater to the growing demands of the Armed Forces.</p>
                <p>6. BDL, with the support of DRDO, has been manufacturing various types of indigenously designed and developed missiles and underwater weapons. One such product being produced by BDL is the Akash Weapon System, a Surface-to-Air indigenous Missile, involving of a large number of supply chain partners from the industry. Similarly, The Heavy Weight Torpedo and Light Weight Torpedo developed by NSTL, DRDO, are being manufactured by BDL at its Visakhapatnam Unit with active participation from the industry. The Light Weight Torpedo is also being exported.</p>
                <p>7. BDL is now set to produce the world class ‘Beyond Visual Range’ Astra Weapon System for the Indian Armed Forces. The weapon system has been developed by DRDO.</p>
                <div className="flex flex-col items-center p-2">
                    <Image src={bdlOffice} height={"500"} width={"500"} alt=""/>
                </div>
                <p>8. The announcements made by Government of India on ‘Atmanirbhar Bharat’’ cover a wide range of opportunities for the Indian industry paving way for a self-reliant India in the coming years. To take forward the ‘Atmanirbhar Bharat’ initiative of the Government, BDL has taken up several measures such as creation of Seeker Facility Centre and Warheads production facility at BDL, launch of indigenously designed and developed equipment by BDL namely, Konkurs Launcher Test Equipment and Konkurs Missile Test Equipment, setting up of new facilities like Surface – Mount Technology, ‘High Performance Computing facility’ at BDL premises, issue of ‘Expression of Interest’ for the items to be indigenized. These measures will not only contribute towards the realization of ‘Atmanirbhar Bharat’, but also result in substantial saving of foreign Exchange for the Nation.</p>
                <p>9. Among the various policies announced by the Government in Defence sector, the creation of negative list of imports will also develop the defence manufacturing sector. In this direction, BDL has successfully achieved significant levels of indigenization for the &quot; all-time import items &quot; of the weapon systems being currently supplied to the Indian Army. BDL is also offering various items for indigenization of various missiles to the industry including MSMEs.</p>
                <p>10. The Company is also extending its technical support to its vendors including providing test facilities available with BDL. The procedures have been streamlined to encourage active participation of ‘start ups’. BDL is also working with DRDO for Transfer of Technology for products like Infra-Red Flares, which are a part of Counter Measures Dispensing System to be manufactured and offer to Indian Armed Forces as a ‘comprehensive counter measure solution’. These items are currently under import category.</p>
                <p>11. BDL has been constantly upgrading its manufacturing technologies and processes to state-of-the-art including industry 4.0, Robotics operated workshops, latest Surface Mounted Devices assembly lines and has always maintained highest quality standards in its products by adopting to best QA practices like AS 9100, Zero defect, etc. The pursuit has resulted into reduction in production cost, benchmarking of productivity norms and modernization of management system and less dependence on imported technology.</p>
                <p>12. Innovation always has been a key to success and growth of any company and BDL has always considered innovation as a part of its R&D efforts. Synergy is being maintained between the industry and academia to sustain balance between experience and knowledge industry. BDL is encouraging startup companies to participate in the innovation programmes of the Company. This is being done in line with the policies of the Government of India under iDEX (i.e., Innovation for Defence Excellence) and in association with Telangana State Government.</p>
                <p>13. Recent trends indicate rapid strides are being made by countries over the globe in utilizing Artificial Intelligence (AI) based technologies for development of Next Generation of weapon systems. Taking cognizance of this fact, BDL has started undertaking development of products for the Armed Forces with AI Technologies with active participation of startups.</p>
                <p>14. As a part of its R & D efforts, BDL has developed Amogha - III, the third generation Anti-Tank Guided Missile. The missile will be offered after successful completion of user trials to the Indian Armed Forces as well as export market.</p>
                <p>15. The Company has entered into an MoU with International Institute of Information Technology (IIIT), Hyderabad, India for joint development of AI based technologies for its range of products. Thrust is being given to explore tie-ups with other foreign OEMs for new missiles and underwater weapon programmes with potential Transfer of Technology and meeting the ‘Make in India” criteria.</p>
                <p>16. BDL has also signed MoUs with several foreign firms as well as Indian organizations including start-ups to promote various areas of mutual business interests.</p>
                <p>17. The ‘ease of doing business’ approach adopted by the Government of India has paved the way to create a congenial ecosystem for the company to manufacture products indigenously and offer its products / services to the customers, both, the Indian Armed Forces and the global buyers.</p>
                <p>18. The Company has been listed in the Stock Market in March 2018 in Bombay Stock Exchange and National Stock Exchange.</p>
                <div className="flex flex-col items-center p-2">
                    <Image src={bdlfront} height={"500"} width={"500"} alt=""/>
                </div>
                <p>19. BDL, with its over five decades of missile and allied defence equipment manufacturing experience, skill-sets developed and state-of-the-art infrastructure, is poised to enter new avenues of manufacturing covering a wide range of weapon systems such as Air-to-Air Missiles, Air-to-Surface Missiles, Air Defence Systems, Underwater Weapons and Mines.</p>
                <p>20. The quest for technological excellence has been the guiding principle of BDL and living up to the sobriquet, ‘THE FORCE BEHIND PEACE’.</p>
                </div>
            </div>
        </div>
    )
}