import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import { useState } from 'react';
import Books from "../../apis/Books";
import { useEffect } from 'react';

const Trending = (props) => {

    
    const BookClass = new Books();
    const [booksContent, setBooksContent] = useState([])

    const fetchBooks = async () => {
        const data = await  BookClass.get_trending_books()
        // data.items.map((item)=> console.log(item.volumeInfo.imageLinks.thumbnail))
        setBooksContent(data.items)
    };
    useEffect(()=> {
     fetchBooks()
    },[])
    const handleClick = () => {
        // returns more function
        return props.more();
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
                        <Button variant="primary" onClick={handleClick}>More details</Button>
                    </Card.Body>
                </Card>     
            ))
        }
    </>
    )
}
export default Trending;
