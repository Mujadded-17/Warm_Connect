import './App.css';
import NavbarComponent from './components/navbar';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/profile';
import Browse from './pages/browse';
import Post from './pages/post';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
