import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 h-60">
        <div className="w-full justify-center mb-4 h-52 flex items-center">
          <img
            src={service.getFilePreview(featuredimage)}
            alt={title}
            className="rounded-xl h-full"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </Link>
  );
}

export default PostCard;
