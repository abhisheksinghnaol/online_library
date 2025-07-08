import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id == id));

  if (!book) return <div className="p-4 text-center text-red-600">Book not found</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="mb-2">{book.description}</p>
      <p className="text-yellow-600 mb-4"><strong>Rating:</strong> {book.rating}</p>

      <Link to="/browse" className="text-blue-600 hover:underline">← Back to Browse</Link>
    </div>
  );
}
