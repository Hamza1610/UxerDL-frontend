import { auth } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const SignUp =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            console.log('Google user:', user);
            setError('');
            console.log("Registered with Google successfully");
        } catch (error) {
            console.log('Google error:', error.message);
            setError(error.message);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('Email/Password user:', user);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                console.log("Registered successfully");
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        console.log(user);
                    }
                });
    
            } catch (error) {
                console.log('Email/Password error:', error.message);
                setError(error.message);
            }
        }
        else {
            setError('Passowrd and Confirm password does not match')
        }
    }

    return (
        <Container>
            <Row md={4}>
                <Col sm={2}>
                    <h1 >Sign up</h1>
                </Col>
            </Row>
            <Row className='align-items-center h-75 w-100 justify-content-center' md={4} >
                <Col >
                    <Form >
                        <Form.Label style={{fontSize: '1.3em'}}>Sign up your account: </Form.Label>
                        {error && (<p>{error}</p>) }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name='email'
                                size='lg'
                                type="email"
                                placeholder="Enter email"
                                className='w-100'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
            
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name='password'
                                size='lg'
                                type="password"
                                placeholder="Password"
                                className='w-100'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                name='confirm'
                                size='lg'
                                type="password"
                                placeholder="confirm password"
                                className='w-100'
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to our terms and conditions" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button><br/>
                        <Form.Label>Already registered an account? <a href='/sign-in'>Sign in</a></Form.Label>
                    </Form>
                    <Form>
                        <hr style={{fontSize: '100px', color: 'white'}}/>
                        <Form.Group >
                            <Button 
                                size='lg'
                                type='submit'
                                className='m-3'
                                onClick={handleGoogleSignUp}
                                >Google</Button>
                            <Button size='lg' type='submit' className='m-3'>Facebook</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignUp;