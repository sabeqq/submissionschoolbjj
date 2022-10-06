import Image from "next/image"
import aboutimg from '../public/about.jpg'

export default function about() {
  return (
    <section className="py-1 h-90 whitespace-normal mb-16">

        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 grid md: grid-cols-2 h-90 " >
        <div className="about_image my-10 drop-shadow-2xl">
                    <Image src={aboutimg}
                    className="rounded-lg shadow-xl"
                     alt=""
                     height="300px"
                     width="500px"
                     />
          </div>
         
          <div className="about">
            <div className="about_title">
                <h2 className="text-1xl md:text-4xl font-bold font-sans md:font-sans mb-5"> About</h2>
            </div>
            <div className="about_description">
                <p>This section will have text that will talk about the what the gym does. This section will have text that will talk about the what the gym does. This section will have text that will talk about the what the gym does. This section will have text that will talk about the what the gym does. This section will have text that will talk about the what the gym does.</p>
             </div>

          </div>
   

</div>
      </section>    
  )
}
