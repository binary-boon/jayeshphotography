'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './ParallaxSection.module.css';
import Image from 'next/image';
import backgroundImg from "../../../public/images/parallax-bg.jpg";

const ParallaxSection = () => {
  return (
    
      <div className={styles.parallaxContainer}>
        {/* Background Image with Parallax Effect */}
        {/* <Parallax speed={-5}>
  <div className={styles.parallaxBackground}>
    <Image className={styles.img}
      src={backgroundImg} 
      alt="Background" 
      
      fill 
      style={{ objectFit: 'cover' }}
    />
  </div>
</Parallax> */}

<Parallax speed={20}>
  <div className={styles.parallaxBackground}>
    <Image 
      src={backgroundImg} 
      alt="Background" 
      fill 
      style={{ objectFit: 'cover' }}
    />
  </div>
</Parallax>


        {/* Main Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>Let’s Create Something Beautiful</h1>
          <p className={styles.paragraph}>
          Whether it's an intimate wedding or a grand celebration, we’d love to be a part of your journey. Let’s talk and bring your dream wedding to life.
          </p>
          <button className={styles.button}>Learn More</button>
        </div>

        {/* Dark Overlay */}
        <div className={styles.overlay}></div>
      </div>
    
  );
};

export default ParallaxSection;
