import Image from "next/image"
import heroimage from '../public/heroimg.jpg'


export default function schedule() {
  return (
    <section id="schedule" className="py-8  whitespace-normal ">

      <div className="container px-6 py-4 mx-auto" >
        <h2 className="text-4xl md:text-4xl font-bold font-sans md:font-sans mb-5 text-center"> Weekly Schedule</h2>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden rounded-lg border-2 border-black" >
                <table className="min-w-full text-center ">
                  <thead className=" sticky top-0 ">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 bg-orange-400 p position: sticky left:0 z-2 ;">

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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
                      </td>
                    </tr >
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        4
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        5
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        6
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        7
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        8
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
