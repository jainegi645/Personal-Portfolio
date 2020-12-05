import React from 'react';
import './getintouch.css';
import { Form, Button } from 'react-bootstrap';
import Footer from "./Footer";

function Getintouch() {
  return (
<div>
    <div className="Background " id="Getintouch__id">
      <div className="Contact_title">Contact</div>
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

    </div>
    <Footer/>
    </div>
  )
}

export default Getintouch
