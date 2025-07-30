import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.outerCont}>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h1 className={styles.heading}>Get In Touch</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible. 
            Let's start a conversation about your next project.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Full Name" 
              className={styles.input} 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className={styles.input} 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className={styles.input} 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <textarea 
              placeholder="Tell us about your project or ask us anything..." 
              className={styles.textarea}
            ></textarea>
          </div>
          
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>

        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle}>Visit Our Studio</h2>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.087805417427!2d73.7018251760689!3d24.586165756177262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5773e4ab419%3A0x7f5ae30b6bb591b4!2sJayesh%20Photography!5e0!3m2!1sen!2sin!4v1742133271803!5m2!1sen!2sin" 
            width="600" 
            height="450"  
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;