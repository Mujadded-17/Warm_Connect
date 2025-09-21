import './App.css';
import NavbarComponent from './components/navbar';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/profile';
import Browse from './pages/browse';
import Post from './pages/post';
import About from './pages/About';
import Contact from './pages/Contact'; // ✅ Import Contact page
import ForgotPassword from './pages/ForgotPassword';
import DonationDetail from './pages/DonationDetail';
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* ✅ New Contact route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/donation/:id" element={<DonationDetail />} /> {/* Donation Detail */}
      </Routes>
    </Router>
  );
}

export default App;
