import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cards from "./Cards";
import SearchBar from "../SearchBar/SearchBar";
import CustomModal from '../modal';
import {Books} from '../../apis/Books'
const Library = () => {

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [key, setKey] = useState('trending');
     
    const mybook = new Books()
    console.log(mybook);
    return (
        <Container >
            <CustomModal close={handleClose} show={show}/>
            <Row>
                <Col sm={12}>
                    <Row>
                        <Tabs
                            justify
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-2" 
                            style={{fontWeight: "bold", position: "sticky", top: "0", zIndex: 1}} 
                            
                        >
                            <Tab
                                title="Trending books"
                                eventKey="trending"
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Cards more={handleShow}/>
                                </Row>
                            </Tab>
                            <Tab
                                title="Latest books"
                                eventKey="latest"
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Cards more={handleShow}/>
                                </Row>
                            </Tab>
                            <Tab
                                title="Book categories"
                                eventKey="books"    
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Cards more={handleShow}/>
                                </Row>
                            </Tab>

                            <Tab
                                title="Personal library"
                                eventKey="personal"   
                            >
                                <SearchBar hint='Search books' />
                                <Row>
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Cards more={handleShow}/>
                                </Row>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Library;