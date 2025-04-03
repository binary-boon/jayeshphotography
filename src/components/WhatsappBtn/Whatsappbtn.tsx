"use client";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./whatsappbtn.module.css";

const WhatsAppButton = () => {
  const phoneNumber = "+918765432100"; // Replace with your number
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("WhatsApp button mounted");
  setIsMounted(true);
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.buttonContainer} ${isMounted ? styles.visible : ""}`}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
