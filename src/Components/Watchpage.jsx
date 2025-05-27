import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="p-4">
      {/* Container for video and live chat */}
      <div className="flex">
        {/* Video Section */}
        <div className="flex-1">
          <iframe
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat Section */}
        <div className="w-[400px] ml-4">
          <LiveChat />
        </div>
      </div>

      {/* Comments Section - left aligned */}
      <div className="mt-4">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watchpage;
