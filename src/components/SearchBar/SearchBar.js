import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Books from "../../apis/Books";
import { useState } from 'react';

const SearchBar = (props) => {

    const [searchText, setSearchText] = useState('')
    const [booksContent, setBooksContent] = useState([])
    const BookClass = new Books();

    const handleSubmit = async () => {
        const data = await  BookClass.get_book(searchText)
        setBooksContent(data)
    }
    return (
    <Container className='mb-2'>
        <Row>
        <Form onSubmit={handleSubmit}>
            <Col sm={4}>
                <Form.Control
                    type='search'
                    className="w-100"
                    placeholder='Search book'
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