import React from 'react';

// 🔹 Sample Data (n-level nested)
const commentData = [
  {
    id: 1,
    author: 'Amit',
    timestamp: '2 hours ago',
    text: 'This is a top-level comment.',
    likes: 12,
    replies: [
      {
        id: 2,
        author: 'Rita',
        timestamp: '1 hour ago',
        text: 'This is a reply to Amit.',
        likes: 5,
        replies: [
          {
            id: 3,
            author: 'John',
            timestamp: '30 minutes ago',
            text: 'Replying to Rita’s comment.',
            likes: 2,
            replies: [],
          },
        ],
      },
      {
        id: 4,
        author: 'Sara',
        timestamp: '45 minutes ago',
        text: 'Another reply to Amit.',
        likes: 3,
        replies: [],
      },
    ],
  },
  {
    id: 5,
    author: 'David',
    timestamp: '3 hours ago',
    text: 'Another top-level comment.',
    likes: 8,
    replies: [],
  },
];

// 🔹 Single Comment Component
const Comment = ({ comment }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>

      {/* Comment Content */}
      <div className="flex-1">
        <div className="text-sm font-semibold">
          {comment.author}
          <span className="text-xs text-gray-500 ml-2">{comment.timestamp}</span>
        </div>
        <p className="text-sm text-gray-800 mt-1">{comment.text}</p>

        {/* Actions */}
        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
          <button className="hover:text-gray-700">👍 {comment.likes}</button>
          <button className="hover:text-gray-700">👎</button>
          <button className="hover:text-blue-600 font-medium">Reply</button>
        </div>

        {/* Render Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-12">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    </div>
  );
};

// 🔹 Comment List Component
const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

// 🔹 Main Container
const CommentsContainer = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-4 bg-white">
      <h2 className="text-lg font-bold mb-4">Comments</h2>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
