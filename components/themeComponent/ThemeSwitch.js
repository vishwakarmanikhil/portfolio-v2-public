'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import IconAssests from '../svgAssests/IconAssests';
import "./style.css";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme();

  const themeChangeHandler = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }


  if (resolvedTheme) {
    const isDarkMode = resolvedTheme === 'dark';
    return (
      <div className='theme-changer__wrap relative'>
        <div className={'toggle__switch'} onClick={() => themeChangeHandler()}></div>
        <div className="relative inline-block">
          <div className="relative flex justify-between items-center text-xl">
            <input id='themeSwitch' aria-label="themeSwitch" checked={isDarkMode} onChange={() => { }} type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-16 h-8 flex items-center flex-shrink-0 p-1 bg-sky-400 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-8"></span>
          </div>
          {!isDarkMode &&
            <span className="peer-checked:text-blue-600 text-gray-500 text-gray-500 w-6 h-6 absolute top-1 start-1 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
              <div className='toggle__circle day'></div>
            </span>
          }
          {isDarkMode &&
            <span className="peer-checked:text-white w-6 h-6 absolute top-1 end-1 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
              <div className='toggle__circle night'>
                <IconAssests.MoonFilledIcon height='22' width='22' filledColor={"#A5B0C2"} />
              </div>
            </span>
          }
        </div>
      </div>
    );
  }
}