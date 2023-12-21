/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import "./Contact.css";
import { motion } from "framer-motion";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animates: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="ContactText">
        <h1 variants={variants}>Let's Work Together</h1>
        <div className="contactItem">
          <h2>Mail</h2>
          <span>parvezmosharaf87@gmail.com</span>
        </div>
        <div className="contactItem">
          <h2>Address</h2>
          <span>Dhaka , Bangladesh</span>
        </div>
        <div className="contactItem">
          <h2>Phone</h2>
          <span>
            01316502552 <br />
            01639268719
          </span>
        </div>
      </div>
      <div className="contactForm">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
