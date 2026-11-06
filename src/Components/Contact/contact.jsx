import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">
          Get In <span className="contact-accent-text">Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have a project in mind or want to grow your digital presence? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>contact@digitalimpacts.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+92 300 1234567</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you!</h3>
              <p>Your message has been sent. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

