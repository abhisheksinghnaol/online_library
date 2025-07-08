import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/browse" element={<Layout><BrowseBooks /></Layout>} />
        <Route path="/books/:category" element={<Layout><BrowseBooks /></Layout>} />
        <Route path="/book/:id" element={<Layout><BookDetails /></Layout>} />
        <Route path="/add" element={<Layout><AddBook /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;