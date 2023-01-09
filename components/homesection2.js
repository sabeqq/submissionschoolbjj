import Image from "next/image"
import heroimage from '../public/landing.png'


export default function homesection2() {
    return (
        <section className="py-8 h-100 whitespace-normal	mt-24 " id="homesection">
            <div className="container px-6 py-4 mx-auto">

                <div className="grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2 gap-y-10 lg:gap-y-0">
                    <div className="flex items-center text-center sm:text-left">
                        <div className="">

                            <div className="lg:max-w-lg">
                                <h1 className="text-6xl font-bold text-gray-800 dark:text-black lg:text-8xl md:text-8xl">Submission School</h1>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-black lg:text-3xl md:text-4xl ">Brazilian Jiu Jitsu School</h2>

                                <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                                <button className="w-full px-10 py-6 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-400 rounded-md lg:w-auto hover:bg-orange-500 focus:outline-none focus:bg-blue-500 font-semibold" >Join Now</button>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center shadow-2xl">
                        <Image src={heroimage}
                            className="w-full h-full rounded-lg  lg:max-w-2xl "
                            alt=""
                            height="745px"
                            width="745px"
                        />
                    </div>
                </div>
            </div>

        </section >
    )
}
