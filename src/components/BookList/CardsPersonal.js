import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import Books from "../../apis/Books";
import { useEffect } from 'react';
import CustomModal from '../modal';
import { Row } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Preloader from '../preloader';

const Personal = (props) => {

    const BookClass = new Books();
    const [booksContent, setBooksContent] = useState([])

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState({})
    const [searchText, setSearchText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await  BookClass.get_book(searchText)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setBooksContent(data.items)
            setSearchText('')
        }, 3000);
        console.log('Loading')
        
    }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleClick = (item) => {
        // returns more function 
        setContent(item)
        console.log(item);  
        handleShow()
   }

   const renderImg = (link) => {
        try {
            return (<Card.Img variant="top" src={link.imageLinks.thumbnail} alt='Book Image' />)
        }
        catch(error) {
            console.log(error);
            return (<Card.Img variant="top" src={link.imageLinks} alt='Book Image' />)
        }

    }

  return (
    <>
        <CustomModal close={handleClose} show={show} contents= {content} />
        <Stack className='mb-2'>
            <Form onSubmit={handleSubmit} style={{width: '100%',display: 'flex', }}>
                    <Form.Control
                        type='search'
                        className="w-100"
                        placeholder='Search book'
                        onChange={(e)=> setSearchText(e.target.value)}
                    />      
                    <Button type='submit'>Search</Button>
                </Form>
        </Stack>
        {loading && (<Preloader />)}
        {
            booksContent && booksContent.map((item) => (
                // map card components
                <Card style={{ width: '18rem', }} key={item.id} className='m-2'>
                    <Card.Body>
                        {renderImg(item.volumeInfo)}
                        <Card.Title><b>Title:</b> {item.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            <p><b>Subtitle:</b> {item.volumeInfo.subtitle}</p>
                            <p><b>Authors:</b> {item.volumeInfo.authors}</p>
                            <p><b>Category:</b> {item.volumeInfo.categories}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={()=> handleClick(item)}>More details</Button>
                    </Card.Body>
                </Card>     
            ))
        }
    </>
  )
}
export default Personal;
