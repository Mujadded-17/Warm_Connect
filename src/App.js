import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import MyNav from './components/navbar';

function App() {
  return (
    <div className="App">
      <MyNav></MyNav>
      <h1>Hello</h1>
      <Home></Home>
    </div>
  );
}

export default App;
