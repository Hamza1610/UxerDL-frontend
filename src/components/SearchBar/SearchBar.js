import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
const SearchBar = (props) => {
    console.log(props);
    return (
    <Container className='mb-2'>
        <Row>
            <Col sm={4}>
                <Form.Control type='search' className="w-100" placeholder={props.hint}/>      
            </Col>
            <Col>
                <Button type='submit'>Search</Button>
            </Col>
        </Row> 
    </Container>
    )
}
export default SearchBar;