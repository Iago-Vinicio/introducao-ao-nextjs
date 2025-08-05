"use client";
import { useState } from "react";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

export default function Page() {
  const [comments, setComments] = useState<Comment[]>([]);
  const addComment = (comment: Comment) => {
    setComments([comment, ...comments]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Atividade Componentes pt.3
        </h1>
        <CommentForm onAddComment={addComment} />
        <CommentList comments={comments} />
      </div>
    </div>
  );
}
