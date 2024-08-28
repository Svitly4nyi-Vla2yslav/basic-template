import React from 'react';
import { FormContainer, Form, Input, TextArea, SubmitButton } from './ContactForm.styled';


const ContactForm: React.FC = () => {
  return (
    <FormContainer>
      <h2>Contact Us</h2>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows={5} placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
