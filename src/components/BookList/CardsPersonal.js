import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
import { useState } from 'react';
import Books from "../../apis/Books";
import { useEffect } from 'react';

const Personal = (props) => {

    const handleClick = () => {
        // returns more function
        return props.more();
   }
  const books = [1,2,3,4,5,6,7,8]

  return (
        books.map((key, index) => (
            // map card components
            <Card style={{ width: '18rem', }} key={key} className='m-2'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Title : {books}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>More details</Button>
                </Card.Body>
            </Card>     
        ))
    )
}
export default Personal;
