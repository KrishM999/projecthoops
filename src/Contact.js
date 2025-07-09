import React from 'react';
import './Contact.css';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try{
      const formDataSend = new URLSearchParams();
      formDataSend.append("name", formData.name);
      formDataSend.append("email", formData.email);
      formDataSend.append("message", formData.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxVYeZo3mbXPymtPFbuHkyRWpUhsk4Lg2W2GVYa4AlVIFy5e9Cg80FtUBPFadIE9FEv/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formDataSend.toString(),
        }
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    }catch(error){
      console.error("We experienced an error. Please try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Got questions or want to get involved? Fill out the form below!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {submitStatus === 'success' && (
          <div className="status-message success">
            <CheckCircle size={20} />
            <span>Your message has been recorded successfully! Thank you for the feedback.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            <AlertCircle size={20} />
            <span>There was an error sending your message. Please try again.</span>
          </div>
        )}

        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required 
        />
        <button 
          type="submit" 
          className={isSubmitting ? 'submitting' : ''}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="btn-icon" size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};


export default Contact;