type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-700 to-blue-900 p-1 rounded-2xl max-w-sm mx-3 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4 border border-white/20"
        />
        <h3 className="text-2xl font-bold text-white drop-shadow mb-2">{title}</h3>
        <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
