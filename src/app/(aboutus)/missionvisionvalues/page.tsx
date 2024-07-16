import { NavBar } from "@/components/navbar";

export default function MissionVisionValues(){
    return (
        <div className="bg-black h-screen">
            <NavBar />
            <div className="container pt-36 rounded shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center">Mission, Vision & Values</h1>
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">VISION</h2>
                <p className="text-lg">
                    To be a world-class enterprise producing international standard quality products for the Defence industry.
                </p>
                </section>

                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">MISSION</h2>
                <p className="text-lg">
                    To establish itself as a leading manufacturer in the aerospace & underwater weapons industry and emerge as a world class sophisticated, State-of-the-art, global enterprise, providing solutions to the security system needs of the country.
                </p>
                </section>

                <section>
                <h2 className="text-2xl font-bold mb-4">VALUES</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Zeal to excel and zest for change</li>
                    <li className="mb-2">Integrity and fairness in all matters</li>
                    <li className="mb-2">Respect for dignity and potential of individuals</li>
                    <li className="mb-2">Strict adherence to commitments</li>
                    <li className="mb-2">Ensure speedy response</li>
                    <li className="mb-2">Foster learning, creativity and teamwork</li>
                    <li className="mb-2">Loyalty and pride in the CPSE</li>
                </ul>
                </section>
            </div>
        </div>
    )
}