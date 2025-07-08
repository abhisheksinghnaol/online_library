// import { Link } from 'react-router-dom';

// const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

// export default function Home() {
//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">📚 Welcome to the Online Library</h1>

//       <h2 className="text-xl font-semibold mb-2">Categories</h2>
//       <ul className="list-disc pl-6 mb-6">
//         {categories.map(cat => (
//           <li key={cat}>
//             <Link className="text-blue-600 hover:underline" to={`/books/${cat.toLowerCase()}`}>
//               {cat}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { Link } from 'react-router-dom';

const categories = [
  { name: 'Fiction', color: 'bg-blue-100' },
  { name: 'Non-Fiction', color: 'bg-yellow-100' },
  { name: 'Sci-Fi', color: 'bg-purple-100' },
  { name: 'Biography', color: 'bg-green-100' },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">📚 Welcome to the Online Library</h1>
      <p className="text-gray-600 mb-8">Explore categories, browse popular books, or add your own!</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(cat => (
          <Link
            key={cat.name}
            to={`/books/${cat.name.toLowerCase()}`}
            className={`p-6 rounded-lg shadow hover:shadow-lg transition border ${cat.color}`}
          >
            <h3 className="text-lg font-semibold">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
