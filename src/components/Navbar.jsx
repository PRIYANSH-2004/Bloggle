import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedOut, SignedIn , SignInButton, UserButton} from '@clerk/clerk-react';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image src='logo.png' alt='Bloggle Logo' w={40} h={40}></Image>
                <span>
                    Bloggle
                </span>
            </Link >

            {/* MOBILE MENU */}
            <div className="md:hidden">
                <div className="cursor-pointer text-2xl font-bold"
                    onClick={()=>{setOpen((prev)=> !prev)}}
                >
                    {open ? 'X' : "☰" }
                </div>
                {/*  to show buttons when menu is clicked */}
                {/* MOBILE LINK LIST */}
                {open && (
                <div className="w-full h-screen flex flex-col items-center gap-8 font-medium text-2xl justify-center absolute top-16 right-0 bg-white shadow-lg transition-all ease-in-out">
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </div>
                 )}
            </div>
            {/* DESKTOP MENU*/}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                {/* Desktop */}
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">about</Link>
                <SignedOut>
                    
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl  bg-blue-800 text-white">Login 👋</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};
export default Navbar