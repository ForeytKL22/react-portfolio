import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; 
import Button from 'react-bootstrap/Button';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <Container>
        <Form id="contact-form" onSubmit={handleSubmit}>
            <br/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="text" name="name" placeholder="email@example.com" defaultValue={email} onBlur={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} defaultValue={message} onBlur={handleChange} />
            </Form.Group>
            <br/>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            <Button variant="secondary">Submit</Button>
        </Form>
        </Container>

    //    <section>
    //        <h1>Contact Me</h1>
    //        <form id="contact-form" onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor="name">Name:</label>
    //                 <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //             </div>
    //             <div>
    //                 <label htmlFor="email">Email address:</label>
    //                 <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //             </div>
    //             <div>
    //                 <label htmlFor="message">Message</label>
    //                 <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //             </div>
    //             {errorMessage && (
    //                 <div>
    //                     <p className="error-text">{errorMessage}
    //                     </p>
    //                 </div>
    //             )}
    //             <button type="submit">Submit</button>
    //        </form>
    //    </section> 
    );
}

export default ContactForm;