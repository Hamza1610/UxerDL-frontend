import { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Cards from "./Cards";
import SearchBar from "../SearchBar/SearchBar";

const Library = () => {

    const [lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectStyle, setSelectStyle] = useState({color: 'white', fontWeight: 'bolder'});

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 2000);
          console.log('Logging something');
        // ListsFetch();
    },[])
    const [key, setKey] = useState('trending');

    return (
        <Container >
            <Row>
                <Col sm={12}>
                    <Row>
                        <Tabs
                            justify
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            variant="tabs"
                            style={{fontWeight: "bold", color: "white", position: "sticky", top: "0", zIndex: 1}} 
                        >
                            <Tab
                                title="Trending books"
                                eventKey="trending"   
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "86vh"}}>
                                    <Cards />
                                </Row>
                            </Tab>
                            <Tab
                                title="Latest books"
                                eventKey="latest"    
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "86vh"}}>
                                    <Cards />
                                </Row>
                            </Tab>
                            <Tab
                                title="Book categories"
                                eventKey="books"    
                            >
                                <SearchBar hint='Search books' />
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "86vh"}}>
                                    <Cards />
                                </Row>
                            </Tab>

                            <Tab
                                title="Personal library"
                                eventKey="personal"    
                            >
                                <SearchBar hint='Search books' />
                                <Row>
                                <Row className="justify-content-center" style={{overflowY: "scroll", height: "86vh"}}>
                                    <Cards />
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