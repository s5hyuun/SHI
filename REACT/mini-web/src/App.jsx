import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HolidayParking from "./pages/HolidayParking";
import TouristInfo from "./pages/TouristInfo";
import './App.css';

function App() {
  return (
    <div className="App">

      {/* 
        TODO: BrowserRouter, Routes, Route를 사용해서 URL에 따라 
        HolidayParking / TouristInfo가 바뀌도록 하세요. 
      */}

      {/* <NavBar />
      <HolidayParking /> */}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/parking" />} />
          <Route path="/parking" element={<HolidayParking />} />
          <Route path="/tourist" element={<TouristInfo />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;