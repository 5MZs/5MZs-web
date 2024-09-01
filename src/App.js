// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Navbar';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
