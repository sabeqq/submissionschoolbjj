import Image from 'next/image';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import heroimage from '../public/SSlogo.jpg';

export default function homesection2() {
    const scrollToContact = () => {
        scroll.scrollTo('contact', {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <section id="home" className="py-8 h-100 whitespace-normal mt-24">
            <div className="container px-6 py-4 mx-auto">
                <div className="grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2 gap-y-10 lg:gap-y-0">
                    <div className="flex items-center text-center sm:text-left">
                        <div className="S">
                            <div className="lg:max-w-lg">
                                <h1 className="text-6xl font-bold text-gray-800 dark:text-black lg:text-8xl md:text-8xl">Submission School</h1>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-black lg:text-3xl md:text-4xl mt-6 ">Brazilian Jiu Jitsu School</h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full px-10 py-6 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-400 rounded-md lg:w-auto hover:bg-orange-500 focus:outline-none focus:bg-blueorange-500 font-semibold"
                                    >
                                        Join Now
                                    </button>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center ">
                        <Image
                            src={heroimage}
                            className="w-full h-full rounded-lg lg:max-w-2xl mix-blend-multiply	"
                            alt=""
                            height="700px"
                            width="700px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
