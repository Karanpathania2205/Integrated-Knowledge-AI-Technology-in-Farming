//import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navtop from './Components/Navtop';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import DiseaseDetection from './Components/Disease Detection';
import CropPrediction from './Components/Crop Prediction';

import './App.css';

function App() {
  return (
    <div>
      <div><Navtop /></div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/crop-prediction" element={<CropPrediction />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;