import React from "react";
import LiveComments from "./LiveComments";

const LiveChat = () => {
  return (
    <div className="h-[400px] w-full border border-gray-300 rounded-lg shadow-md flex flex-col bg-white">
      
      {/* Header */}
      <div className="px-4 py-2 border-b bg-gray-100 font-semibold">
        Live Chat
      </div>

      {/* Scrollable comment section */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <LiveComments name="Amit" message="Hi, please reply" />
        <LiveComments name="Amit" message="Anyone here?" />
        <LiveComments name="Amit" message="This is amazing!" />
        <LiveComments name="Amit" message="Waiting for response" />
        <LiveComments name="Amit" message="Cool content!" />
        <LiveComments name="Amit" message="Is this live?" />
        <LiveComments name="Amit" message="What’s the topic?" />
        <LiveComments name="Amit" message="Thanks for sharing" />
        <LiveComments name="Amit" message="Where are you from?" />
        <LiveComments name="Amit" message="Looks great!" />
        <LiveComments name="Amit" message="Please explain again" />
        <LiveComments name="Amit" message="Perfectly clear" />
        <LiveComments name="Amit" message="Awesome!" />
      </div>
    </div>
  );
};

export default LiveChat;
