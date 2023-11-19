import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const SignIn =  () => {
    return (
        <Container>
            <Row md={4}>
                <Col sm={2}>
                    <h1 >Sign in</h1>
                </Col>
            </Row>
            <Row className='align-items-center h-75 w-100 justify-content-center' md={4} >
                <Col sm={2}>
                    <Form>
                        <Form.Label style={{fontSize: '1.3em'}}>Sign in with your account: </Form.Label>
                        <Form.Group >
                            <Button size='lg' type='submit' className='m-3 '>Google</Button>
                            <Button size='lg' type='submit' className='m-3'>Facebook</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col >
                    <Form >
                        <Form.Label style={{fontSize: '1.3em'}}>Sign in your email: </Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' size='lg' type="email" placeholder="Enter email" className='w-100'/>
                        </Form.Group>
            
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' size='lg' type="password" placeholder="Password" className='w-100'/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button><br/>
                        <Form.Label>Don't account? <a href='/sign-up'>Sign up</a></Form.Label>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignIn;