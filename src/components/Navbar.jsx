import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Library</Link>
        <ul className="flex space-x-4 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 underline' : 'hover:text-blue-600'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 underline' : 'hover:text-blue-600'
            }
          >
            Browse Books
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 underline' : 'hover:text-blue-600'
            }
          >
            Add Book
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
