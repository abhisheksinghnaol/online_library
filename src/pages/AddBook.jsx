import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: ''
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure rating is always between 0 and 5
    if (name === 'rating' && (value < 0 || value > 5)) return;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, description, rating, category } = form;

    if (!title || !author || !description || !rating || !category) {
      setError('All fields are required.');
      return;
    }

    dispatch(addBook({
      ...form,
      rating: parseFloat(rating)
    }));
    navigate('/browse');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        value={form.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        value={form.author}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        rows="3"
        value={form.description}
        onChange={handleChange}
      ></textarea>

      <input
        type="number"
        name="rating"
        placeholder="Rating (0-5)"
        min="0"
        max="5"
        step="0.1"
        className="w-full p-2 border border-gray-300 rounded mb-3"
        value={form.rating}
        onChange={handleChange}
      />

      <select
        name="category"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={form.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Biography">Biography</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Add Book
      </button>
    </form>
  );
}
