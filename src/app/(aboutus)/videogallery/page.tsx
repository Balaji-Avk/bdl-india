import { NavBar } from "@/components/navbar";

export default function VideoGallery(){
    return (
        <div className="bg-black">
            <NavBar />
            <div className="container pt-32 rounded shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center">Video Gallery</h1>
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">53rd Formation Day of BDL</h2>
                <div className="">
                    <video controls src={"../../../public/hostelbooking.mp4"} width={"400"} height={"900"} />
                </div>
                </section>
                <section>
                <h2 className="text-2xl font-bold mb-4">BDL Corporate Film</h2>
                <div className="aspect-w-16 aspect-h-9">
                
                </div>
                </section>
            </div>
        </div>
    )
}