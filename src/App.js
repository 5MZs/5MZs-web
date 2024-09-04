// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Navbar';
import './App.css';
import Login from './component/Login';
import Join from './component/Join';
import Home from './component/Home';
import Map from './component/Map'
import Benefit from './component/Benefit';
import SHINHAN from './component/CardNav/SHINHAN'
import SAMSUNG from './component/CardNav/SAMSUNG'
import KB from './component/CardNav/KB'
import SAEMAEULGEUMGO from './component/CardNav/SAEMAEULGEUMGO'
import WOORI from './component/CardNav/WOORI'
import NH from './component/CardNav/NH'
import TOSS from './component/CardNav/TOSS'
import IBK from './component/CardNav/IBK'

function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/benefit" element={<Benefit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
    
        
        <Route path="/benefit/SHINHAN" element={<SHINHAN/>} />
          <Route path="/benefit/SAMSUNG" element={<SAMSUNG/>} />  
          <Route path="/benefit/KB" element={<KB/>} />
          <Route path="/benefit/SAEMAEULGEUMGO" element={<SAEMAEULGEUMGO/>} />
          <Route path="/benefit/WOORI" element={<WOORI/>} />
          <Route path="/benefit/NH" element={<NH/>} />
          <Route path="/benefit/TOSS" element={<TOSS/>} />
          <Route path="/benefit/IBK" element={<IBK/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
