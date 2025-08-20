// src/App.js
import './App.css';
import Home from './pages/home';
import Login from './pages/Login';
import Browse from './pages/browse';
import Navbar from './components/navbar';
import ProfilePage from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTANT: your file on disk is lowercase: src/pages/post.js
import Post from './pages/post';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
