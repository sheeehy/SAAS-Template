// ReusableComponent.tsx
import React, { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, paragraph }) => {
  return (
    <div className="flex-1 items-center justify-center space-x-4 max-w-xs">
      <div className="text-2xl ml-4 mb-2 ">{icon}</div>

      <div>
        <h1 className="text-md mb-2">{heading}</h1>
        <p className="text-zinc-400 text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
