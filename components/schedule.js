import Image from "next/image"
import heroimage from '../public/heroimg.jpg'


export default function schedule() {
  return (
    <section id="schedule" className="py-8  whitespace-normal ">

      <div className="container px-6 py-4 mx-auto" >
        <h2 className="text-4xl md:text-4xl font-bold font-sans md:font-sans mb-10 text-center"> Weekly Schedule</h2>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-lg border-2 border-black" >
                <table className="min-w-full text-center ">
                  <thead className=" sticky top-0  ">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400  sticky left:0 z-2 ;">
                        Time
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Monday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Tuesday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Wednesday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Thursday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Friday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Saturday
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400">
                        Sunday
                      </th>
                    </tr>
                  </thead >
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10:30AM - 11:15AM</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Kids class (6 & under)
                      </td>
                    </tr >
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                      11:15AM - 12:15AM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td lassName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td lassName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Kids class +7                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                      12:30AM - 13:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td lassName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Womens BJJ
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        18:00PM - 19:00PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Muay Thais
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        18:30PM - 19:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        GI Foundation
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        19:00PM - 20:00PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        GI Foundation
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4  font-medium whitespace-nowrap">
                        19:30PM - 20:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Intermediate/Advanced GI Class
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      GI Foundation
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4  font-medium whitespace-nowrap">
                        19:00PM - 20:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Intermediate/Advanced GI Class

                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Intermediate/Advanced GI Class

                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        19:15PM - 20:15PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Kids Class +7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td lassName="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        20:00PM - 21:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Open Mat
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                 
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 font-medium whitespace-nowrap">
                        20:30PM - 21:30PM
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        No Gi Class
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Muay Thai
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      No Gi Class

                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
