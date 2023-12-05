import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Trending from "./CardsTrending";
import Latest from "./CardsLatest";
import Personal from "./CardsPersonal";
import Categories from "./CardsCategories";
import SearchBar from "../SearchBar/SearchBar";
import CustomModal from '../modal';
import Books from '../../apis/Books'
import { Accordion } from "react-bootstrap";

const Library = () => {

    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [modalContents, setModalContents] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleContents = (item) => setModalContents(item);
    const [key, setKey] = useState('trending');
     
    return (
        <Container >
            <CustomModal close={handleClose} show={show} contents= {handleContents} />
            <Row>
                <Col sm={12}>
                    <Row>
                        <Tabs
                            fill
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
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Trending more={handleShow} />
                                </Row>
                            </Tab>
                            <Tab
                                title="Latest books"
                                eventKey="latest"
                            >
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Latest more={handleShow} shelf='latest'/>
                                </Row>
                            </Tab>
                            <Tab
                                title="Book categories"
                                eventKey="books"    
                            >
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <h1>Book categories</h1>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Fictional</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='fiction'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header> Nonfictional</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='nonfiction'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Technology</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='technology'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Science</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='science'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Mystery</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='mystery'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Medical</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='medical'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>Psychology</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories more={handleShow} shelf='psychology'/></Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                </Row>
                            </Tab>

                            <Tab
                                title="Personal library"
                                eventKey="personal"   
                            >
                                <Row>
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Personal more={handleShow} shelf='personal'/>
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