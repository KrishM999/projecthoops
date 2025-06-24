import React from 'react';
import './Contact.css';
import { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const formDataSend = new URLSearchParams();
      formDataSend.append("name", formData.name);
      formDataSend.append("email", formData.email);
      formDataSend.append("message", formData.message);

      await fetch("https://script.google.com/macros/s/AKfycbzJ9qouE2BJ6l2IwdI0gPM3J1xOuGZSzuwFfzkkUZ3585pP_zyLvkT_zfxPgzYfyCNHiQ/exec",
      {
        method: 'POST',
        body: 'formDataSend',
        mode: 'no-cors'
      }
    );

      alert("Your message has been recorded. Thank you for the feedback")
      setFormData({ name: "", email: "", message: "" });
    }catch(error){
      console.error("We experienced an error. Please try again.")
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Got questions or want to get involved? Fill out the form below!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="name" 
      placeholder="Your Name" 
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      required 
    />
    <input 
      type="email" 
      name="email" 
      placeholder="Your Email" 
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      required 
    />
    <textarea 
      name="message" 
      placeholder="Your Message" 
      rows="5"
      value={formData.message}
      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      required 
    />
    <button type="submit">Send Message</button>
</form>

    </div>
  );
};


export default Contact;