import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LiveComments from "./LiveComments";
import { addMessage } from "../Utils/chatSlice";
import generate,{generateMessage, nameList} from "../Utils/helper";


const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generate(),
          message: generateMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i); // Cleanup
  }, [dispatch]);

  return (
    <div className="h-[400px] w-full border border-gray-300 rounded-lg shadow-md flex flex-col bg-white">
      {/* Header */}
      <div className="px-4 py-2 border-b bg-gray-100 font-semibold">
        Live Chat
      </div>

      {/* Scrollable comment section */}
      <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col-reverse">
        {chatMessages.map((msg, index) => (
          <LiveComments key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
