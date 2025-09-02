"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

type Post = {
  id: number;
  author: string;
  content: string;
  likes: number;
};

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, author: "Eduardo", content: "Ola, esse é meu primeiro post!", likes: 2 },
    { id: 2, author: "Agostinho", content: "Ola, esse é meu primeiro post!", likes: 4 },
    { id: 3, author: "Davi", content: "Ola, esse é meu primeiro post!", likes: 3 },
    { id: 4, author: "Dandan", content: "Ola, esse é meu primeiro post!", likes: 2 },
  ]);

  function handleLike(id: number) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Meu Feed</h1>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
}
