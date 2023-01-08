import Image from "next/image"
// import aboutimg from '../public/about1.jpg'
// import aboutimg2 from '../public/about2.jpg'
// import aboutimg3 from '../public/about3.jpg'


export default function about() {
  return (
    <section className="py-16 h-90 whitespace-normal">

      <main className="container px-6 py-4 mx-auto">
        <div className="max-w-[1400px]  grid grid-cols-1 lg:max-w-[1400px] lg:gap-x-20 lg:grid-cols-2">

          <div className="grid gap-4 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:mb-0 ">
            <picture>
              <img src="/about1.png" height={200} width={420} alt="" className="w-full h-60 shadow-2xl object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
            </picture>
            <picture>

              <img src="/about2.png" alt="" className="hidden w-full h-52 shadow-2xl object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            </picture>
            <picture>

              <img src="/about3.png" alt="" className="hidden w-full h-52 shadow-2xl object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            </picture>

          </div>
          <div className="">
            <div className="">
              <h1 className="text-1xl text-black md:text-4xl font-bold font-sans md:font-sans mb-5">About Us</h1>
              <p className="text-sm leading-4 font-medium text-black sm:text-black-500 dark:sm:text-black-400">Submission School BJJ</p>
            </div>

            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-black flex items-center">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current text-black">
                  <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span classNameName="text-black">5 <span className="text-slate-400 font-normal">(128)</span></span>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center text-black">
                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-black" aria-hidden="true">
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                London, United Kingdom
              </dd>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <button type="button" className="bg-orange-400 text-white text-sm leading-6 font-medium py-4 px-6 rounded-lg">Read More</button>
            </div>

            <p className="mt-4 text-black leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 w-auto ">
              This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.
            </p>

          </div>
        </div>
      </main>

    </section>
  )
}
