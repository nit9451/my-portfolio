"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";



export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <footer className="footer">
      <div className="container">
        <button onClick={handleOpenModal} className="contact-me-btn">
          Contact Me
        </button>
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>

      <AnimatePresence>
        {showModal && <Modal onClose={handleCloseModal} />}
      </AnimatePresence>
    </footer>
  );
}

function Modal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_dzruetc', 'template_ywf3jpw', e.target, 'LURnvfOddIQtwti3v')
      .then((result) => {
        console.log(result.text);
        // alert("Message Sent Successfully!");
        toast.success("Message Sent Successfully!");
        onClose();
      })
      .catch((error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      className="modal-backdrop"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input id="name" type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input id="email" type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required />
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}