import React, { useState } from 'react'

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [isElipsisMenuOpen, setIsElipsisMenuOpen] = useState(false);
    const [boardType, setBoardType] = useState("add");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  return (
    <div className=" p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
    <header className=" flex justify-between dark:text-white items-center  ">
      {/* Left Side  */}
      <div className=" flex items-center space-x-2  md:space-x-4">
        {/* <img src={} alt=" Logo " className=" h-6 w-6" /> */}
        <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">
          kanban
        </h3>
        <div className=" flex items-center ">
          <h3 className=" truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans  ">
            {/* {board.name} */}
            boardName
          </h3>
          <img
            src={openDropdown ? "iconUp ": "iconDown"}
            alt=" dropdown icon"
            className=" w-3 ml-2 md:hidden"
            // onClick={onDropdownClick}
          />
        </div>
      </div>
        </header>
        </div>
  );
}
