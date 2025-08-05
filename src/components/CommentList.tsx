import Comment from "./Comment";

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Comentarios</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500 italic">Nenhum comentário ainda.</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            name={comment.name}
            message={comment.message}
            date={comment.date}
          />
        ))
      )}
    </div>
  );
}
