//import logo from './logo.svg';
import Navtop from './Components/Navtop';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import DiseaseDetection from './Components/Disease Detection';
import CropPrediction from './Components/Crop Prediction';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navtop />
      <Home />
      {/*<AboutUs />
      <DiseaseDetection />
      <CropPrediction />*/}
    </div>
  );
}

export default App;
