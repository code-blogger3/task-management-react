import React, { useState } from 'react'

export default function AddEditBoardModal({type, setIsBoardModalOpen}) {
  
    const [name, setName] = useState('')
  return (
    <div className='fixed right-0 top-0 px-2 py-4 overflow-scroll scrollbar-hide  z-50 left-0 bottom-0 justify-center items-center flex dropdown '
    onClick={(e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      setIsBoardModalOpen(false);
    }}
    >
 
    <div         className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto my-auto w-full px-8  py-8 rounded-xl"
>
        <h3>
{type === "edit" ? "Edit" : "Add New " } Board
        </h3>

        {/* Board Name */}

        <div>
            <label className='text-sm dark:text-white text-gray-500' >
                Board Name
            </label>
            <input
            className=" bg-transparent  px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder=" e.g Web Design"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="board-name-input"
          />
        </div>
         {/* Board Columns */}


    </div>
    </div>
  )
}
