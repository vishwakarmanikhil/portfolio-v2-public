'use client';

import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import ThemeSwitch from '../themeComponent/ThemeSwitch';
import IconAssests from '../svgAssests/IconAssests';
import LogoAssets from '../svgAssests/LogoAssets';
import Color from '@/constants/color';

const menuLink = [
    { name: 'About', link: 'about' },
    { name: 'Experience', link: 'experience' },
    { name: 'Work', link: 'work' },
    { name: 'Contact', link: 'contact' },
]

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isDrawerOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Check if the user is scrolling up
            setIsSticky(scrollY > 0 && scrollY < prevScrollY);

            // Update the previous scroll value
            setPrevScrollY(scrollY);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className={classNames(isSticky && style.header__sticky, isDrawerOpen ? ' overflow-visible' : 'overflow-hidden', 'shadow-xl shadow-gray-100/55 dark:shadow-gray-900/55')}>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto py-4 px-4 md:px-12">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" title='Nikhil Vishwakarma'>
                        <LogoAssets.LogoMini height='40' width='40' filledColor={Color.primary} />
                    </Link>
                    <div className='flex'>
                        <div className="flex items-center md:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse pl-5">
                            <div className='w-16'>
                                <ThemeSwitch />
                            </div>
                            <button onClick={toggleDrawer} type="button" className="inline-flex items-center z-10 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" title='Menu toggler' name='Menu toggler'>
                                <span className="sr-only">Open main menu</span>
                                <IconAssests.HumbergMenuOutlineIcon height='20' width='20' filledColor={Color.iconDark} />
                            </button>
                        </div>
                        <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1 pr-5">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {menuLink?.map((data, index) => {
                                    return (
                                        <li key={`desktop-menu-${index}`} data-aos="fade-down" data-aos-delay={`${index * 50}`}>
                                            <a href={`/#${data?.link}`} title={data?.link} className="block py-2 px-3 md:p-0 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white rounded md:bg-transparent">{data?.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="default-sidebar" className={`fixed top-0 right-0 z-40 h-screen w-1/2 transition-transform ${!isDrawerOpen ? 'translate-x-full' : 'transform-none'}`} aria-label="Sidebar">
                <div className="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <button onClick={toggleDrawer} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" title='Close Menu Drawer' name='Close Menu Drawer'>
                        <IconAssests.CloseFilledIcon height='20' width='20' filledColor={Color.iconDark} />
                        <span className="sr-only">Close menu</span>
                    </button>
                    <ul className="space-y-2 pt-10 font-medium">
                        {menuLink?.map((data, index) => {
                            return (
                                <li key={`mobile-menu-${index}`}>
                                    <a href={`/#${data?.link}`} title={data?.link} onClick={toggleDrawer} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 text-md text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white whitespace-nowrap">{data?.name}</span>
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </aside>
        </header>
    );
};

export default Header;