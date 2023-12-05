import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import { useState } from 'react';
import Books from "../../apis/Books";
import { useEffect } from 'react';
import CustomModal from '../modal';

const Trending = (props) => {

    
    const BookClass = new Books();
    const [booksContent, setBooksContent] = useState([])

    const [show, setShow] = useState(false);
    const [modalContents, setModalContents] = useState({});
    const [content, setContent] = useState({})
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchBooks = async () => {
        const data = await  BookClass.get_trending_books()
        // data.items.map((item)=> console.log(item.volumeInfo.imageLinks.thumbnail))
        setBooksContent(data.items)
    };
    
    useEffect(()=> {
     fetchBooks()
    },[])

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
export default Trending;
