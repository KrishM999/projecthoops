import React, { useState } from "react";
import { User, Mail, Users, Trophy, CheckCircle, AlertCircle } from "lucide-react";
import "./SignUpForm.css"; 

const errorLog = [];

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    division: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('Timestamp', new Date().toISOString());
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Team', formData.team);
      formDataToSend.append('Division', formData.division);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwQbfoxpRKqfPVfZFvoWA2JLTV-SzvLyGSR2JFaZcgeSWTeos8b0dw6XlD0qX8pZZxT7Q/exec", 
        {
          method: "POST",
          body: formDataToSend,
          mode: "no-cors"
        }
      );

      setSubmitStatus('success');
      setFormData({ name: "", email: "", team: "", division: "" });
      
    } catch (error) {
      console.error("Error during form submission:", error);
      errorLog.push(error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1 className="signup-title">Join Project Hoops 2025</h1>
        <p className="signup-subtitle">
          We are currently accepting sign ups for the 2025 Project Hoops Tournament. 
          Join us for an exciting basketball experience that brings communities together!
        </p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        {submitStatus === 'success' && (
          <div className="status-message success">
            <CheckCircle size={20} />
            <span>Your sign up has been recorded successfully!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            <AlertCircle size={20} />
            <span>There was an error. Please try again.</span>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">
            <User className="form-icon" size={20} />
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Mail className="form-icon" size={20} />
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email address"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Users className="form-icon" size={20} />
            Team Name *
          </label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
            placeholder="Enter your team name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <Trophy className="form-icon" size={20} />
            Division *
          </label>
          <select
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select your division</option>
            <option value="Division I (Competitive)">Division I (Competitive)</option>
            <option value="Division II (Recreational)">Division II (Recreational)</option>
          </select>
        </div>

        <button 
          type="submit" 
          className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Submitting...
            </>
          ) : (
            <>
              Sign Up Now
              <CheckCircle className="btn-icon" size={20} />
            </>
          )}
        </button>

        <div className="form-footer">
          <p className="footer-text">
            * Required fields. By signing up, you agree to participate in the Project Hoops 2025 tournament 
            and receive updates about the event.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;



