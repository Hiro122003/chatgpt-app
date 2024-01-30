import React from 'react';
import { BiLogOut } from "react-icons/bi";
import { GoPlusCircle } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="bg-custom-gradient h-full overflow-y-auto px-5 flex flex-col ">
      <div className="flex-grow ">
        <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md hover:bg-blue-500 hover:bg-opacity-500">
          {/* <span className="text-white p-4 text-2xl">+</span> */}
          <GoPlusCircle size={18} color='white'/>
          <h1 className="text-white xs:font-thin md:font-semibold sm:text-sm sm:p-2 md:text-md p-3 lg:text-xl lg:p-4 xl:text-2xl whitespace-nowrap">
            New Chat
          </h1>
        </div>
        <ul>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
          <li className="cursor-pointer border-b-2 text-slate-100 text-md p-3 hover:bg-blue-500 hover:bg-opacity-500 transition ease-in-out duration-500">
            Room 1
          </li>
        </ul>
      </div>
      <div className='flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150 rounded-md'>
        <BiLogOut size={24}/>
        <span className='whitespace-nowrap sm:text-sm lg:text-xl'>ログアウト</span>
      </div>
    </div>
  );
};

export default Sidebar;
