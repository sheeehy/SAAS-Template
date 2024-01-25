import React from "react";
import { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa";

interface IconButtonProps {
  icon: IconType;
  text: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, text }) => {
  return (
    <button className="flex flex-col items-center pb-12 opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-300">
      <div className="relative inline-flex flex-col items-center py-4 px-5 border rounded-2xl border-gray-500 opacity-90">
        <div className="bg-black text-white">
          <Icon size={20} />
        </div>
      </div>
      <span className="mt-3 text-sm text-white">{text}</span>
    </button>
  );
};

export default IconButton;
