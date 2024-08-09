import React, { useState, useEffect } from "react";
import service from "../appwrite/config";
import { PostCard, Container } from "../components/index";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 m-5">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
