import React from 'react';

const VideoCard = ({ info }) => {
  if (!info) return null;

  const {
    snippet,
    statistics,
    // id,
  } = info;

  const {
    title,
    channelTitle,
    thumbnails,
    publishedAt,
  } = snippet;

  const viewCount = Number(statistics?.viewCount || 0).toLocaleString();

  return (
    <div className="w-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-900">
      <img
        src={thumbnails?.medium?.url}
        alt="Video Thumbnail"
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{channelTitle}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {viewCount} views • {new Date(publishedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
