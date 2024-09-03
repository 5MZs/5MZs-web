// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Navbar';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import Map from './component/Map'
import Benefit from './component/Benefit';
import BC from './component/CardNav/BC';


function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/login" element={<Login />} />]
        
        <Route path="/benefit/shinhan" element={<div>shinhan</div>} />
          <Route path="/benefit/samsung" element={<div>삼성카드</div>} />
          <Route path="/benefit/KB" element={<div>KB</div>} />
          <Route path="/benefit/hyundai" element={<div>hyundai</div>} />
          <Route path="/benefit/lotte" element={<div>lotte</div>} />
          <Route path="/benefit/woori" element={<div>woori</div>} />
          <Route path="/benefit/NH" element={<div>NH</div>} />
          <Route path="/benefit/hana" element={<div>hana</div>} />
          <Route path="/benefit/BC" element={<BC/>} />
          <Route path="/benefit/IBK" element={<div>IBK</div>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
