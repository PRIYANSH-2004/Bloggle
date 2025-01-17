import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import Image from './Image';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <Image src='logo.png' alt='Bloggle Logo' w={40} h={40}></Image>
                <span>
                    Bloggle
                </span>
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <div className="cursor-pointer text-2xl font-bold"
                    onClick={()=>{setOpen((prev)=> !prev)}}
                >
                    {open ? 'X' : "☰" }
                </div>
                {/*  to show buttons when menu is clicked */}
                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-2xl justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"} `} >
                    {/* <h1>menu</h1> */}
                    <a href=''>Home</a>
                    <a href=''>Trending</a>
                    <a href=''>Most Popular</a>
                    <a href=''>about</a>
                    <a href=''>
                        <button className="py-2 px-4 rounded-3xl  bg-blue-800 text-white">Login 👋</button>
                    </a>
                </div>
            </div>
            {/* DESKTOP MENU*/}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                {/* Desktop */}
                <a href=''>Home</a>
                <a href=''>Trending</a>
                <a href=''>Most Popular</a>
                <a href=''>about</a>
                <a href=''>
                    <button className="py-2 px-4 rounded-3xl  bg-blue-800 text-white">Login 👋</button>
                </a>
            </div>
        </div>
    );
};
export default Navbar