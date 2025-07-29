'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './ParallaxSection.module.css';
import Image from 'next/image';
import backgroundImg from "../../../public/images/parallax-bg.jpg";

const ParallaxSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya & Arjun Sharma",
      location: "Mumbai",
      text: "Our wedding photography exceeded all expectations! Every precious moment was captured with such artistry and emotion. The team made us feel comfortable throughout the entire celebration.",
      rating: 5,
      event: "Wedding"
    },
    {
      id: 2,
      name: "Kavya Reddy",
      location: "Bangalore",
      text: "The pre-wedding shoot was absolutely magical! The creativity and attention to detail was phenomenal. We couldn't have asked for more beautiful memories to cherish forever.",
      rating: 5,
      event: "Pre-Wedding"
    },
    {
      id: 3,
      name: "Rajesh & Meera Gupta",
      location: "Delhi",
      text: "Professional, creative, and incredibly talented! They captured not just photos, but the essence of our love story. The album is a masterpiece we'll treasure for generations.",
      rating: 5,
      event: "Wedding"
    },
    {
      id: 4,
      name: "Aishwarya Patel",
      location: "Jaipur",
      text: "From the engagement ceremony to the reception, every moment was beautifully documented. The candid shots are absolutely stunning and tell our story perfectly.",
      rating: 5,
      event: "Engagement"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`${styles.star} ${index < rating ? styles.starFilled : styles.starEmpty}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={styles.parallaxContainer}>
      {/* Background Image with Parallax Effect */}
      <Parallax speed={-8}>
        <div className={styles.parallaxBackground}>
          <Image 
            src={backgroundImg} 
            alt="Background" 
            fill 
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Parallax>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>What Our Clients Say</h1>
          <p className={styles.subtitle}>
            Hear from couples who trusted us to capture their most precious moments. 
            Their love stories inspire us to create timeless memories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.cardContent}>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{testimonial.name}</h4>
                  <p className={styles.clientLocation}>{testimonial.location}</p>
                  <span className={styles.eventType}>{testimonial.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <button className={styles.button}>Visit our Social Media</button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;