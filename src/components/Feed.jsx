import React, { useEffect, useState } from "react";
import { database } from "../configs/firebase";
import "../styles/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    database
      .collection("posts")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          image={post.data.image}
          message={post.data.message}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
          key={post.data.id}
        />
      ))}
    </div>
  );
}
