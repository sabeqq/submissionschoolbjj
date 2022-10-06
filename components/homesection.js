import Image from "next/image"
import heroimage from '../public/landing.png'


export default function homesection() {
    return (
      <section className="py-16 h-100 whitespace-normal	mt-24">

        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 grid md: grid-cols-2 h-90" >
          <div className="page_title ">
            <div className="page_name">
               <h1 className="text-2xl md:text-6xl font-bold font-sans md:font-sans	"> Submission School</h1>
                <h2 className="text-2xl md:text-6xl font-bold font-sans md:font-sans	mb-5"> Brazilian Jiu Jitsu</h2>
            </div>
                    <p>Extra peice of writing to go here</p>
            <div className="page_button mt-2 mb-2	 ">
              <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded mt-5	">
                 Join Now!
              </button>
            </div>

          </div>
          <div className="page_image my-10 text-center ">
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
  