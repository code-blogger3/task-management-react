import React from 'react'
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === "dark" ? "light" : "dark";
  
    useEffect(() => {
  
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
  
  }, [theme, colorTheme]);
  
  const toggleSidebar = () => {
    setIsSideBarOpen((curr) => !curr);
  };
    return <>
  <div    className={
            isSideBarOpen
              ? `min-w-[261px] bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-20`
              : ` bg-[#635FC7] dark:bg-[#2b2c37] dark:hover:bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px] h-[48px] rounded-r-full  `
          }>
  
  <div className=" bg-white  dark:bg-[#2b2c37]    w-full   py-4 rounded-xl">
  
  <h3 className=" dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8 ">
  
  ALL BOARDS 
                </h3>
  </div>
  </div>
  
    </>;
  }
