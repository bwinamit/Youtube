import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../Utils/Constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideo(json.items);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {video.map((v) => (
        <Link to={`/watch?v=${v.id}`}>
        <Videocard key={v.id} info={v} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
