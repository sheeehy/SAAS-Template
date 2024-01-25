import React, { useState, useEffect } from "react";
import { MdAccessTime } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { LiaWindows } from "react-icons/lia";
import { FaYahoo } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { BiError, BiErrorAlt } from "react-icons/bi";

const YourComponent: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // This effect runs once when the component mounts
    setCurrentDateTime(new Date());
  }, []); // Empty dependency array ensures the effect runs only once

  // Format the time as needed (e.g., HH:mm:ss)
  const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Format the date as "Jan" + " " + "19"
  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    month: "short", // abbreviated month name (e.g., "Jan")
    day: "numeric", // day of the month as a number (e.g., "19")
  });
  return (
    <div className="card2  overflow-hidden ">
      <div className="flex-1 flex text-sm text-gray-400 pt-8 pb-5 pl-4 ">
        <div className="bg-gradient-to-t from-black to-zinc-800 p-1.5 text-red-500 border-zinc-500 border-[1px] text-lg rounded-md ">
          <BiError />
        </div>
        <div className="text-sm bg-red-700 ml-12 text-red-300 rounded-md py-1.5 px-2 ">Bounced</div>
        <MdAccessTime className="ml-10 text-xl pt-1    " />
        <span className="ml-3  py-1 ">{formattedDate}</span>
        <span className="ml-3  py-1 ">{formattedTime}</span>
      </div>

      <div className="flex-1 flex text-sm text-gray-400 pb-4 pl-[5.5rem]">
        <span className="pt-1 mx-2">to</span>{" "}
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md ">jack@gmail.com</span>
        <span className="pt-1 mx-2"> with type</span>{" "}
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md ">Spam</span>
      </div>
      <div className="flex-1 flex text-sm text-gray-400 pl-[5.5rem] ">
        <span className="pt-1 mx-2"> on agent</span>
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md flex items-center ">
          <CgMail className="text-lg mr-1" />
          Gmail
        </span>{" "}
        <span className="pt-1 mx-2"> running on </span>
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md flex items-center ">
          <LiaWindows className="text-lg mr-1" />
          Windows
        </span>{" "}
      </div>
      <div className="flex-1 flex text-sm text-gray-400 pt-14 pb-5 pl-4">
        <div className="bg-gradient-to-t from-black to-zinc-800 p-1.5 text-yellow-600 border-zinc-500 border-[1px] text-lg rounded-md">
          <BiErrorAlt />
        </div>
        <div className="text-sm bg-yellow-700 ml-12 text-yellow-300 rounded-md py-1.5 px-2">Undelivered</div>
        <MdAccessTime className="ml-10 text-xl pt-1    " />
        <span className="ml-3  py-1 ">{formattedDate}</span>
        <span className="ml-3  py-1 ">{formattedTime}</span>
      </div>

      <div className="flex-1 flex text-sm text-gray-400 pb-4 pl-[5.5rem]">
        <span className="pt-1 mx-2">to</span>{" "}
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md ">nicole@yahoo.com</span>
        <span className="pt-1 mx-2"> with type</span>{" "}
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md ">Welcome</span>
      </div>
      <div className="flex-1 flex text-sm text-gray-400 pl-[5.5rem] ">
        <span className="pt-1 mx-2"> on agent</span>
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md flex items-center ">
          <FaYahoo className="text-lg mr-1" />
          Yahoo Mail
        </span>{" "}
        <span className="pt-1 mx-2"> running on </span>
        <span className="bg-gradient-to-t from-black to-zinc-800 px-2 py-1 border-zinc-500 border-[1px] text-white rounded-md flex items-center ">
          <AiOutlineApple className="text-lg mr-1" />
          MacOS
        </span>{" "}
      </div>
    </div>
  );
};

export default YourComponent;
