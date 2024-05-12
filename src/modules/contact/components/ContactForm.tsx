"use client"
import React from 'react'
import {  FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
   const dipencet = () => {
    alert("Belum bisa kirim pesan!");
  };
  return (
    <section className="contact-form">
      <p className="form-title">Or send me a message</p>

      <form action="#" className="form">
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
        ></textarea>

        <button className="form-btn" type="button" onClick={() => dipencet()}>
          <FaPaperPlane className='icon-plane'/>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  )
};

export default ContactForm
