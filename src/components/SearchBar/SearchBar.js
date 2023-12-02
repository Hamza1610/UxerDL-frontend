import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Form from 'react-bootrap/Form';

const SearchBar = (props) => {
    console.log(props);

    const [searchText, setSearchText] = useState('')

    const handleSubmit = () => {
        switch (props.section) {
            case value:
                
                break;
        
            default:
                break;
        }
    }
    return (
    <Container className='mb-2'>
        <Row>
        <Form onSubmit={handleSubmit}>
            <Col sm={4}>
                <Form.Control
                    type='search'
                    className="w-100"
                    placeholder={props.hint}
                    onChange={(e)=> setSearchText(e.target.value)}
                />      
            </Col>
            <Col>
                <Button type='submit'>Search</Button>
            </Col>
        </Form>
        </Row> 
    </Container>
    )
}
export default SearchBar;