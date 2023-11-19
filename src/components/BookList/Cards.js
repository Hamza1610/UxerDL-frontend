import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import logo from './logo.png'
const Cards = (props) => {

  // const listDetails = props.list

  // const handleClick = async () => { 
    
  //     console.log("Function clicked");
  //     try {
  //         const response = await fetch('https://uxerdl-backend.onrender.com/api/download', {
  //           method: 'POST',
  //           body: JSON.stringify({ _id: listDetails._id }),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           responseType: 'blob', // Set the response type to 'blob' to handle binary data
  //         });
      
  //         if (!response.ok) {
  //           console.log('Error');
  //           return;
  //         }
      
  //         const blob = await response.blob();
      
  //         // Create a temporary URL for the blob
  //         const url = URL.createObjectURL(blob);
      
  //         // Create an anchor element and trigger the download
  //         const a = document.createElement('a');
  //         a.href = url;
  //         a.download = listDetails.fileName; // Provide the desired file name
  //         a.click();
      
  //         // Clean up the temporary URL
  //         URL.revokeObjectURL(url);
  //       } catch (error) {
  //         console.error('Error:', error);
  //       }
    
  // }
  const books = [1,2,3,4,5,6,7,8,9,10]

  return (
        books.map((key, index) => (
            <Card style={{ width: '18rem', }} key={key} className='m-2'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Card Title{index}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        ))
    )
}
export default Cards;
