import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow px-4 py-6 sm:px-8">{children}</main>
      <footer className="text-center p-4 text-sm text-gray-500 bg-white border-t">
        &copy; {new Date().getFullYear()} Online Library System
      </footer>
    </div>
  );
}
