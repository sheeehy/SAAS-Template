import React, { useState } from "react";

const H2Gen: React.FC = () => {
  const [httpResponses, setHttpResponses] = useState<string[]>([
    "HTTP 200: id: 469517f5-d38a-4878-a891-701e00ba9bcd",
    "HTTP 201: id: 2b535d91-24d8-45a1-85f0-8df8fa385c97",
    "HTTP 200: id: 88f4a551-bf03-4112-bce6-0aa37385ac59",
    "HTTP 202: id: 2a8265cf-0f13-414c-97f9-7ad426a78403",
    "HTTP 200: id: 2b535d91-24d8-45a1-85f0-8df8fa385c97",
    "HTTP 200: id: 88f4a551-bf03-4112-bce6-0aa37385ac59",
  ]);

  const handleSendButtonClick = (): void => {
    const updatedResponses = [...httpResponses];
    const movedResponse = updatedResponses.pop();
    if (movedResponse) {
      updatedResponses.unshift(movedResponse);
      setHttpResponses(updatedResponses);
    }
  };

  return (
    <div className="card2 overflow-hidden">
      <div className={`flex items-center pt-12 px-10 ml-5 pb-16 ${httpResponses.length > 6 ? "move-down" : ""}`}>
        <div className="px-2 h-12  border-zinc-500 border-[1px] rounded-xl text-sm flex items-center">
          <div className="text-sm bg-green-950 text-green-400 w-24 rounded-md py-1">Delivered</div>
          <span className="ml-3 text-md">delivered@ACME.dev</span>
          <button
            className="z-10 bg-black rounded-full ml-12 px-4 py-1 border-zinc-400 border-[1px] transition-transform hover:opacity-90 hover:scale-105 ease-in-out active:scale-100"
            onClick={handleSendButtonClick}
          >
            Send
          </button>
        </div>
      </div>

      <div className="text-base space-y-2 font-mono">
        {httpResponses.map((response, index) => (
          <h2 key={index} className={`h2Gen ${index === 0 ? "move-down" : ""}`}>
            {response}
          </h2>
        ))}
      </div>
    </div>
  );
};
export default H2Gen;
