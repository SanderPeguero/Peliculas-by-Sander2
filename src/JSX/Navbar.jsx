import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai';
import { Search } from "./Search.jsx";
import styles from "../CSS/Navbar.module.css";

import logo from "../Images/Logo.png";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="w-full flex lg:justify-center justify-between items-center p-4">

            <div className="lg:flex-[0.5] flex-initial justify-rigt items-center">
                <a href="/">
                    <img src={ logo } alt="logo" className="w-14 cursor-pointer"/>
                </a>
            </div>

            <ul className="text-white lg:flex hidden list-none flex-row justify-between items-end flex-initia;">
                    
                <li className="mx-4 cursor-pointer">
                    SanderCoin
                </li>
                <li className="mx-4 cursor-pointer">
                    Chat
                </li>
                <li className="mx-4 cursor-pointer">
                    Exchange
                </li>
                <li className="mx-4 cursor-pointer">
                    Images
                </li>   
                <li className="mx-4 cursor-pointer">
                    Movies
                </li>
                <li className="mx-4 cursor-pointer">
                    Music
                </li>
  
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
                        flex flex-col justify-start items-end rounded-lg blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-3/12  my-2">

                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>

                        </li>

                        <li className={styles.NavbarItem}>
                            SanderCoin
                        </li>
                        <li className={styles.NavbarItem}>
                            Chat
                        </li>
                        <li className={styles.NavbarItem}>
                            Exchange
                        </li>
                        <li className={styles.NavbarItem}>
                            Images
                        </li>   
                        <li className={styles.NavbarItem}>
                            Movies
                        </li>
                        <li className={styles.NavbarItem}>
                            Music
                        </li>
                    </ul>
                )}
            </div>

        </nav>
    );
}

export default Navbar;