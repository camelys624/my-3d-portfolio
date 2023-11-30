import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { style } from '../style'
import { navLinks as defaulNavLinks } from '../constants'
import { navLinks as zhNavLinks } from "../constants/Zh"
import { logo, menu, close, translate } from '../assets'
import React from "react"

export default function Navbar(props: any) {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const navLinks = props.translateToggle ? defaulNavLinks : zhNavLinks

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${style.paddingX} w-full flex justify-center item-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl max-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Camel_Y
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {
                        navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`${active === link.title
                                    ? 'text-white'
                                    : 'text-secondary'
                                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                    <li
                        className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
                        onClick={props.setToggle}
                    >
                        <img src={translate} alt="translate" className="w-[28px] h-[28px] object-contain" />
                    </li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>

                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {
                                navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${active === link.title
                                            ? 'text-white'
                                            : 'text-secondary'
                                            } font-poppins text-[16px] font-medium cursor-pointer`}
                                        onClick={() => {
                                            setToggle(!toggle)
                                            setActive(link.title)
                                        }}
                                    >
                                        <a href={`#link.id`}>{link.title}</a>
                                    </li>
                                ))
                            }
                            <li
                                className="text-secondary hover:text-white text-[18px] font-medium crursor-pointer"
                                onClick={props.setToggle}
                            >
                                <img src={translate.src} alt="translate" className="w-[28px] h-[28px] object-contain" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
