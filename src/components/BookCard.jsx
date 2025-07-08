import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition bg-white">
      <img
        src={book.coverImage || "https://via.placeholder.com/300x150?text=No+Cover"}
        alt={book.title}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
      <p className="text-sm line-clamp-2 mb-2">{book.description}</p>
      <Link to={`/book/${book.id}`} className="text-blue-600 hover:underline text-sm">
        View Details →
      </Link>
    </div>
  );
}
