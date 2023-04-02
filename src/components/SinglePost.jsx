import React from "react";

function SinglePost({ post }) {
  return (
    <div className="py-4 px-0 space-y-2 border-b">
      <h4 className="font-semibold text-lg leading-6">{post.title}</h4>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}

export default SinglePost;
