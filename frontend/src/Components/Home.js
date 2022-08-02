import carousel_first from '../images/carousel_first.jpg'
import carousel_second from '../images/carousel_second.jpg'
import carousel_third from '../images/carousel_third.jpg'
import carousel_fourth from '../images/carousel_fourth.jpg'
import { Carousel, Form } from 'react-bootstrap';
function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Carousel.Caption>
            <h3 className=".text-dark">Integrated Knowledge and AI Technology</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis inte</p>
          </Carousel.Caption>
          <img
            className="h-100 w-100"
            src={carousel_first}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Carousel.Caption>
            <h3>Crop Prediction</h3>
            <p>Predict the suitable crops for the farm using data gathered from the farm.</p>
          </Carousel.Caption>
          <img
            className="h-100 w-100"
            src={carousel_second}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Crop Prediction</h3>
            <p>Predict the suitable crops for the farm using data gathered from the farm.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Disease Detection</h3>
            <p>
              Detect the plant diseases/pests with upload of an image.
          </p>
          </Carousel.Caption>
          <img
            className="h-100 w-100"
            src={carousel_third}
            alt="Third slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Ripeness Detection</h3>
            <p>
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
