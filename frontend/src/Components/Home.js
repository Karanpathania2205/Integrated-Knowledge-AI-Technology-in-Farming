import './text.css'
import carousel_first from '../images/carousel_first.jpg'
import carousel_second from '../images/carousel_second.jpg'
import carousel_third from '../images/carousel_third.jpg'
import carousel_fourth from '../images/carousel_fourth.jpg'
import Navtop from './Navtop';
import { Carousel, Form } from 'react-bootstrap';
function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="h-100 w-100"
            src={carousel_first}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="fw-bold text-center fs-1">Integrated Knowledge and AI Technology</h3>
            <p className="fw-bold fs-2">A Smart Farming Application</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >

          <img
            className="h-100 w-100"
            src={carousel_second}
            alt="Second slide"

          />

          <Carousel.Caption>
            <h3 className="fw-bold text-dark fs-1">Crop Prediction</h3>
            <p className="fw-bold text-dark fs-2">Predict the suitable crops for the farm using data gathered from the farm.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption>
            <h3 className="fw-bold text-dark fs-1">Disease Detection</h3>
            <p className="fw-bold text-dark fs-2">
              Detect the plant diseases/pests with upload of an image.
          </p>
          </Carousel.Caption>
          <img
            className="h-100 w-100"
            src={carousel_third}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption>
            <h3 className="fw-bold text-dark fs-1">Ripeness Detection</h3>
            <p className="fw-bold text-dark fs-2">
              Detect the ripeness of the fruits.
          </p>
          </Carousel.Caption>
          <img
            className="h-100 w-100"
            src={carousel_fourth}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
