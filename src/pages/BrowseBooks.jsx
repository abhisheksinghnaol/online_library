import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import BookCard from '../components/BookCard';

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = !category || book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Browse Books {category && <span className="text-blue-600">({category})</span>}
      </h2>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-6"
      />

      {filteredBooks.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No books found.</p>
      )}
    </div>
  );
}
