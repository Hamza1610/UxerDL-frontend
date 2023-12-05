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
import Books from '../../apis/Books'
import { Accordion } from "react-bootstrap";

const Library = () => {

    const [key, setKey] = useState('trending');
     
    return (
        <Container >
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
                                    <Trending />
                                </Row>
                            </Tab>
                            <Tab
                                title="Latest books"
                                eventKey="latest"
                            >
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "87vh"}}>
                                    <Latest shelf='latest'/>
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
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='fiction'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header> Nonfictional</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='nonfiction'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Technology</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='technology'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Science</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='science'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Mystery</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='mystery'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Medical</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='medical'/></Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>Psychology</Accordion.Header>
                                            <Accordion.Body style={{display: "flex", flexWrap: "wrap" }}><Categories shelf='psychology'/></Accordion.Body>
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
                                    <Personal  shelf='personal'/>
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