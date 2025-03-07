'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './ParallaxSection.module.css';
import Image from 'next/image';
import backgroundImg from "../../../public/images/parallax-bg.jpg";

const ParallaxSection = () => {
  return (
    <ParallaxProvider>
      <div className={styles.parallaxContainer}>
        {/* Background Image with Parallax Effect */}
        <Parallax speed={-20}>
        <Image 
    src={backgroundImg} 
    alt="Background" 
    layout="fill" 
    objectFit="cover" 
    className={styles.parallaxBackground} 
  />
        </Parallax>

        {/* Main Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Your Title Here</h1>
          <p className={styles.paragraph}>
            This is a sample paragraph with some engaging content to enhance the visual appeal of the section.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>

        {/* Dark Overlay */}
        <div className={styles.overlay}></div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxSection;
