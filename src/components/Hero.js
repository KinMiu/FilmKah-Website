import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import AvengerEG from '../assets/Poster/Avenger-End-Game.jpg';
import Beauty from '../assets/Poster/Beauty-Beast.webp';
import Nohome from '../assets/Poster/No-Home.jpg';
import Iman3 from '../assets/Poster/Iron-Man3.jpg';
import Sanandreas from '../assets/Poster/San-Andreas.jpg';
import ThorR from '../assets/Poster/Thor-Ragnarok.jpg';

const Hero = () => {
  return (
    <div>
      <Container id="hero">
        <div className="title-trending p-4">
          <h1 className="text-light text-center">HERO MOVIES</h1>
        </div>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={AvengerEG} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">Avanger End Game</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={Beauty} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">Beauty and beast</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={Nohome} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">Spiderman No Way Home</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={Iman3} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">Iron Man 3</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={Sanandreas} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">San Andreas</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image src={ThorR} alt="Avanger End Game" classname="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-light">
                  <Card.Title className="text-center text-bold">Thor Ragnanok</Card.Title>
                  <Card.Text className="text-start text-align-justify">This is a wider card with supporting text below as a </Card.Text>
                  <Card.Text className="text-end">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Hero;
