// MyToggleGroup.tsx
import React, { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "../components/ui/toggle-group";
import { FaNodeJs, FaBolt, FaGem, FaPython, FaPhp, FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiElixir } from "react-icons/si";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { BiLogoPhp } from "react-icons/bi";
import Text from "./text";
const MyToggleGroup: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("Node.js");

  const handleValueChange = (value: string | null) => {
    setSelectedValue(value);
    console.log("Selected Value:", value);
  };

  return (
    <div>
      <ToggleGroup variant="outline" type="single" className="pb-12 text-zinc-400" onValueChange={handleValueChange}>
        <div className="flex flex-col items-center ">
          <ToggleGroupItem value="Node.js" aria-label="Toggle bold">
            <FaNodeJs className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Serverless" aria-label="Toggle italic">
            <FaBolt className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Serverless</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Ruby" aria-label="Toggle underline">
            <FaGem className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Ruby</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Python" aria-label="Toggle underline">
            <FaPython className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Python</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="PHP" aria-label="Toggle underline">
            <BiLogoPhp className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">PHP</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Go" aria-label="Toggle underline">
            <FaGolang className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Go</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Java" aria-label="Toggle underline">
            <FaJava className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Java</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="Elixir" aria-label="Toggle underline">
            <SiElixir className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">Elixir</span>
        </div>

        <div className="flex flex-col items-center">
          <ToggleGroupItem value="REST" aria-label="Toggle underline">
            <PiBracketsCurlyBold className="h-6 w-6" />
          </ToggleGroupItem>
          <span className="mt-2">REST</span>
        </div>
      </ToggleGroup>
      <div className="flex items-center justify-center">
        <Text selectedItem={selectedValue} />
      </div>
    </div>
  );
};

export default MyToggleGroup;
