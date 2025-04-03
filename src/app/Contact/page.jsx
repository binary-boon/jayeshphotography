import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (<div className={styles.outerCont}>
    <br />
    <br />
    <br />
    <br />
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Full Name" className={styles.input} required />
        <input type="tel" placeholder="Phone Number" className={styles.input} required />
        <input type="email" placeholder="Email" className={styles.input} required />
        <textarea placeholder="Your Message (Optional)" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>Submit</button>
      </form>

      {/* Google Map Section */}
      <div className={styles.mapContainer}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.087805417427!2d73.7018251760689!3d24.586165756177262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5773e4ab419%3A0x7f5ae30b6bb591b4!2sJayesh%20Photography!5e0!3m2!1sen!2sin!4v1742133271803!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div></div>
  );
};

export default Contact;
