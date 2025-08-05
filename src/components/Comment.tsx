interface CommentProps {
  name: string;
  message: string;
  date: string;
}

export default function Comment({ name, message, date }: CommentProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-4 mb-3">
      <p className="font-semibold text-blue-700">{name}</p>
      <p className="text-gray-700 my-2">{message}</p>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
  );
}
