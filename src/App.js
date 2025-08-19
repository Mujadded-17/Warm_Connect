// App.js
import './App.css';
import Home from './pages/home';
import Login from './pages/Login';
import Browse from './pages/browse'; // <-- new Browse page
import Navbar from './components/navbar'; // updated Navbar import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} /> {/* new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
