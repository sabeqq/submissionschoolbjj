import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function price() {
    const scrollToContact = () => {
        scroll.scrollTo('contact', {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <section id="price" className="py-8 h-100 whitespace-normal text-center">
            <h2 className="text-4xl md:text-4xl font-bold font-sans md:font-sans mb-5 text-center ">Price Plan</h2>
            <div className="container px-6 py-4 mx-auto">
                <div className="max-w-6xl m-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-x-64 justify-items-center ">
                    {/* Your price cards go here */}
                    {[
                        { class: 'Class A', price: '£10/session' },
                        { class: 'Class B', price: '£20/session' },
                        { class: 'Class C', price: '£30/session' },
                        { class: 'Class D', price: '£40/session' },
                        { class: 'Class E', price: '£50/session' },
                    ].map((card, index) => (
                        <div key={index} className="lg:w-96 md:w-96 w-full p-4">
                            <div className="p-8 rounded-xl bg-white border-2 border-black">
                                <h4 className="text-xl font-bold mb-2">{card.class}</h4>
                                <h5 className="text-3xl font-bold py-2 text-black ">{card.price}</h5>
                                <hr />
                                <ScrollLink to="contact" smooth={true} duration={500}>
                                    <button
                                        onClick={scrollToContact}
                                        className="my-4 px-4 py-2 block w-full text-white bg-orange-400 hover:bg-orange-500  rounded"
                                    >
                                        Book Now
                                    </button>
                                </ScrollLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
