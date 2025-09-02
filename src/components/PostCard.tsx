"use client";

type Post = {
  id: number;
  author: string;
  content: string;
  likes: number;
};

type Props = {
  post: Post;
  onLike: (id: number) => void;
};

export default function PostCard({ post, onLike }: Props) {
  return (
    <div className="border rounded p-3 mb-4 bg-white">
      <p className="font-semibold">{post.author}</p>
      <p className="mt-2 mb-2">{post.content}</p>
      <p className="text-sm text-gray-600">Curtidas: {post.likes}</p>
      <button
        onClick={() => onLike(post.id)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Curtir
      </button>
    </div>
  );
}
