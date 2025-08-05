import { useState, FormEvent } from "react";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

interface CommentFormProps {
  onAddComment: (comment: Comment) => void;
}

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      date: new Date().toLocaleString(),
    };

    onAddComment(newComment);
    setName("");
    setMessage("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Adicionar Comentário</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-700 hover:bg-blue-800 transition-colors text-white px-5 py-2 rounded-lg shadow"
      >
        Enviar
      </button>
    </form>
  );
}
