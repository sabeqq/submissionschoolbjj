import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from "next/image"
import logo from '../public/SSlogo.jpg'
import { useState } from "react"
// import { Link } from "react-scroll/modules"

export default function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <header className="fixed left-0 top-0 w-full z-10 text-black bg-white shadow-md ">
            <div className="max-w-[1500px] m-auto flex justify-between items-center p-4">
                <Image
                    src={logo}
                    alt=""
                    height="75px"
                    width="75px"
                />
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:text-orange-500" to="homesection" spy={true} smooth={true} offset={50} duration={500}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 hover:text-orange-500" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        <Link href="#about">About</Link>
                    </li>
                    <li className="p-4 hover:text-orange-500" to="schedule" spy={true} smooth={true} offset={50} duration={500}>
                        <Link href="/">Schedule</Link>
                    </li>
                    <li className="p-4 hover:text-orange-500" to="price" spy={true} smooth={true} offset={50} duration={500}>
                        <Link href="/">Price</Link>
                    </li>
                    <li className="p-4 hover:text-orange-500" to="contact" spy={true} smooth={true} offset={50} >
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className="block sm:hidden z-10" >
                    {nav ? <AiOutlineClose className="fill-white" size={20} /> : <AiOutlineMenu className="" size={20} />}

                </div>
                <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white" : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white"}>
                    <ul>
                        <li className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">About</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">Schedule</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">Price</Link>
                        </li>
                        <li className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </header>
    )
}
