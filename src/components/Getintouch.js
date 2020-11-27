import React from 'react';
import './getintouch.css';
import {Form,Button} from 'react-bootstrap';

function Getintouch() {
    return (
        <div className="Background " id="Getintouch__id">
           <div className="contact__form">
           <Form>

           <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text" placeholder="Joe Biden" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Want to collab" />
  </Form.Group>
 
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

<Button>Send</Button>
           </div>

           <div className="contact__address">
           <h2>EMAIL</h2>
           <h3>jainegi645@gmail.com</h3>

           <h2>PHONE</h2>
           <h3>9079461068</h3>

           <h2>ON THE WEB</h2>
           <h3>LINKDIN | GITHUB | INSTAGRAM</h3>
           </div>

        </div>
    )
}

export default Getintouch
