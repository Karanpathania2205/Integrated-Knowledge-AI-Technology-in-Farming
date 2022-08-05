import Container from 'react-bootstrap/Container';
import carousel_first from '../images/carousel_first.jpg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navtop from "./Navtop";
import './Croppred.css';
function CropPrediction() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container id="main-container" className=".mt-5 d-grid h-100">
                <Form id="sign-in-form" className="text-center p-10 w-100">
                    <img className="mb-4 bootstrap-logo"
                        src={carousel_first}
                        alt="Bootstrap 5" />
                    <h1 className="mb-3 fs-3 fw-normal">Enter your sensor data</h1>
                    <Form.Group controlId="sign-in-email-address">
                        <Form.Control type="email" size="lg" placeholder="Humidity Sensor" autoComplete="username" className="position-relative" />
                    </Form.Group>

                    {/* <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
                        <Form.Check label="Remember me" />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="sign-in-password">
                        <Form.Control type="password" size="lg" placeholder="Rain drop Sensor" autoComplete="current-password" className="position-relative" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="sign-in-password">
                        <Form.Control type="password" size="lg" placeholder="Temperature Sensor" autoComplete="current-password" className="position-relative" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="sign-in-password">
                        <Form.Control type="password" size="lg" placeholder="Soil Moisture Sensor" autoComplete="current-password" className="position-relative" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="primary" size="lg">Get Result</Button>
                    </div>
                    <p className="mt-5 text-muted">&copy; 2022-2023</p>
                </Form>
            </Container>
        </div>
    );
}

export default CropPrediction;
