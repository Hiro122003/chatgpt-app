import React from 'react';
import { BsSendPlus } from "react-icons/bs";

const Chat = () => {
  return (
    <div className="h-full overflow-y-auto px-5 flex flex-col bg-gradient-to-bl from-blue-300 via-slate-300 to-blue-300">
      <h1 className="text-xl text-red-800 font-semibold mb-4 ">Room1</h1>
      <div className="flex-grow overflow-y-auto mb-4 ">
        <div className="text-right">
          <div className="bg-blue-500 inline-block rounded-md px-4 py-2">
            <p className="text-white font-medium">Hello moron</p>
          </div>
        </div>
        <div className="text-left">
          <div className="bg-green-500 inline-block rounded-md px-4 py-2">
            <p className="text-white font-medium">fuck you! asshole</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 relative mb-2">
        <input
          type="text"
          className="border-2 rounded w-full pr-10 focus:outline-none p-2"
          placeholder="Send a Message"
        />
        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center pr-1'>
          <BsSendPlus size={24}/>
        </button>
      </div>
    </div>
  );
};

export default Chat;
