import Image from "next/image"
import heroimage from '/public/landing.png'


export default function homesection2() {
    return (
        <section className="py-16 h-100 whitespace-normal	mt-24 " id="homesection">
            <div className="container px-6 py-4 mx-auto">

                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="">

                            <div className="lg:max-w-lg">
                                <h1 className="text-6xl font-bold text-gray-800 dark:text-black lg:text-8xl md:text-8xl">Submission School</h1>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-black lg:text-3xl md:text-4xl ">Brazilian Jiu Jitsu School</h2>

                                <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                                <button className="w-full px-10 py-6 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-400 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500" >Join Now</button>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Image src={heroimage}
                            className="w-full h-full rounded-lg shadow-2xl lg:max-w-2xl "
                            alt=""
                            height=""
                            width=""
                        />
                    </div>
                </div>
            </div>

        </section >
    )
}
