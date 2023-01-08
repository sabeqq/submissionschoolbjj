import Image from "next/image"
import heroimage from '../public/landing.png'


export default function homesection() {
  return (
    <section className="py-16 h-100 whitespace-normal	mt-24 " id="homesection">

      <div className="max-w-6xl m-auto p-4 grid md:grid-cols-2 gap-16 h-90" >
        <div className="flex items-center">
          <div className="page_title ">
            <div className="page_name">
              <h1 className="text-6xl md:text-6xl font-bold font-sans md:font-sans sm:text-8xl	"> Submission School</h1>
              <h2 className="text-2xl md:text-6xl font-bold font-sans md:font-sans	mb-5"> Brazilian Jiu Jitsu</h2>
            </div>
            <p>Extra peice of writing to go here</p>
            <div className="page_button mt-2 mb-2	 ">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-16  xl:py-4 xl:px-10 rounded mt-5  ">
                Join Now!
              </button>
            </div>

          </div>

        </div>
        <div className="page_image  text-center ">
          <Image src={heroimage}
            className="rounded-lg "
            alt=""
            height=""
            width=""
          />
        </div>

      </div>
    </section>
  )
}
