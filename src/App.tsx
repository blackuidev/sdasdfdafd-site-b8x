import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white shadow-md p-4">
          <nav className="container mx-auto">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-8 flex-grow">
          <Routes>
            <Route path="/" element={<div>Home Page Content</div>} />
            <Route path="/about" element={<div>About Page Content</div>} />
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4">
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
