import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './logo.png';
import Card from 'react-bootstrap/Card'
import './Home.css'
import Button from 'react-bootstrap/Button';
import './Home.css'

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
    return (

        <Container fluid className='justify-content-center'>
            <Navigation />
            <Row>
                <Col>
                    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme='light' style={{height:'95vh'}}>
                        <Carousel.Item interval={4000}>
                            <img
                                className='logo w-90'
                                src={ExampleCarouselImage}
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <Button >Get started</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className='logo w-90'
                                src={ExampleCarouselImage}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className='logo w-90'
                                src={ExampleCarouselImage} 
                                alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col style={{fontSize:'1.3rem'}} className='box-1'>
                    <h1>Welcome to UxerDL - Your Gateway to a World of Knowledge</h1>
                    <div style={{width:'75vw'}}>
                        <p style={{textAlign:'justify'}}>At UxerDl, we believe in the transformative power of literature. Our virtual library is a haven for book enthusiasts, providing a seamless and immersive reading experience in the digital realm. Whether you're an avid reader, a student, or someone seeking new realms of knowledge, we invite you to embark on a literary journey with us.</p>
                    </div>
                </Col>
            </Row>
            <Row className='m-5'>
                <Col></Col>
                <Col style={{fontSize:'1.3rem'}} className='box-2'>
                    <h1 id='about'>About UxerDL</h1>
                    <div style={{float:'right', width:'75vw'}}>
                    <p style={{textAlign:'justify'}}>Welcome to UxerDL, where the magic of literature meets the digital age. At UxerDL, we are passionate believers in the transformative power of books. Our virtual library is not just a collection of texts; it's a gateway to a world of knowledge, a haven for book enthusiasts, and a space where the written word comes to life in the digital realm.
Whether you're an avid reader, a dedicated student, or someone simply looking to explore new realms of knowledge, we extend a warm invitation for you to embark on a literary journey with us. Immerse yourself in the boundless possibilities of our curated collection, where each book is a key that unlocks new perspectives, ideas, and adventures.</p>
                    </div>
                </Col>
            </Row>
            <Row className='m-5 box-3'>
                <h1 id='categories'>Book Categories at UxerDL</h1>
                <div style={{width:'75vw'}}>
                <p style={{fontSize:'1.3rem', textAlign: 'justify'}}>Discover the diverse tapestry of literature within our carefully crafted book categories. Each category is a doorway to a unique realm of storytelling, knowledge, and inspiration. Here are some of the captivating categories awaiting your exploration:</p>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>Fiction</Card.Title>
                            <Card.Text>From timeless classics to contemporary gems, get lost in the captivating narratives crafted by master storytellers.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>Non-Fiction</Card.Title>
                            <Card.Text>Dive into a world of facts, ideas, and real-life stories that expand your understanding of the world.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>Science and Technology</Card.Title>
                            <Card.Text>Stay on the cutting edge with books that explore the wonders of science, technology, and innovation.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>History and Culture</Card.Title>
                            <Card.Text>Travel through time and across cultures with our curated selection of historical and cultural reads.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>Self-Help and Personal Development</Card.Title>
                            <Card.Text>Empower yourself with books that offer guidance, motivation, and tools for personal growth.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}} className='m-2'>
                        <Card.Body>
                            <Card.Title>Academic and Educational</Card.Title>
                            <Card.Text>Support your educational journey with textbooks and resources covering a spectrum of academic disciplines.</Card.Text>
                        </Card.Body>
                    </Card>
                    
                </div>

                </div>
            </Row>
            <Row>
            <footer className="bg-dark text-light mt-5">
                <Container>
                    <Row>
                        <Col className="text-center py-3">
                            <p>&copy; {new Date().getFullYear()} UxerDL. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            </Row>
        </Container>
    )
};

export default  Home;
