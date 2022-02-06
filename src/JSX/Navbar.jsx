import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';
import { Search } from "./Search.jsx";

import logo from "../Images/Logo.png";

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex lg:justify-center justify-between items-center p-4">
            <div className="lg:flex-[0.5] flex-initial justify-center items-center">
                <a href="/">
                    <img src={ logo } alt="logo" className="w-14 cursor-pointer"/>
                </a>
            </div>
            <ul className="text-white lg:flex hidden list-none flex-row justify-between items-end flex-initia;">
                {["SanderCoin","Market", "Exchange", "Images", "Movies", "Music"].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))}
                <div className="text-black">
                    <Search/>
                </div>
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                   Login 
                </li>  
            </ul>
            <div className="flex relative">
                {toggleMenu 
                    ? <div></div>
                    : <HiMenuAlt4 fontSize={28} className="text-white lg:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>    
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 lg:hidden list-none 
                            flex flex-col justify-start items-end rounded-lg blue-glassmorphism text-white animate-slide-in
                        "
                    >
                        <li className="text-xl w-3/12  my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                             <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;