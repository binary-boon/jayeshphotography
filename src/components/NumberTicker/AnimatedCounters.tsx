'use client';

import React, { useEffect, useState } from 'react';
import styles from "../../components/NumberTicker/numticker.module.css"
import Image from 'next/image';

// Define the counter data structure
interface CounterItem {
  label: string;
  number: string;
  value: number;
  color: string;
  icon: string;
}

export default function AnimatedCounters() {
  // Counter data with added styling properties
  const counters: CounterItem[] = [
    { 
      label: "Weddings Captured", 
      number: "500+", 
      value: 500, 
      color: "bg-rose-100 text-rose-600",
      icon: "/images/weddings-captured.png"
    },
    { 
      label: "Happy Clients", 
      number: "250+", 
      value: 250, 
      color: "bg-sky-100 text-sky-600",
      icon: "/images/happy-clients.png" 
    },
    { 
      label: "Years of Experience", 
      number: "10+", 
      value: 10, 
      color: "bg-amber-100 text-amber-600",
      icon: "/images/experience.png"
    },
    { 
      label: "Photos Delivered", 
      number: "10000+", 
      value: 10000, 
      color: "bg-emerald-100 text-emerald-600",
      icon: "/images/photos-delivered.png"
    }
  ];

  // Create the counter component
  const Counter = ({ item }: { item: CounterItem }) => {
    const [count, setCount] = useState(0);
    const [inView, setInView] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    // Use Intersection Observer
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            // Start fade-in animation
            setTimeout(() => {
              setIsVisible(true);
            }, 100);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      
      const currentElement = document.getElementById(`counter-${item.label.replace(/\s+/g, '-')}`);
      if (currentElement) {
        observer.observe(currentElement);
      }
      
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [item.label]);
    
    useEffect(() => {
      if (inView) {
        // Set up the animation
        const endValue = item.value;
        const duration = 2500; // ms
        const frameDuration = 1000 / 60; // ms per frame at 60fps
        const totalFrames = Math.round(duration / frameDuration);
        
        let currentFrame = 0;
        
        const counter = setInterval(() => {
          currentFrame++;
          const progress = currentFrame / totalFrames;
          // Use easeOutExpo for a nice slowing-down effect
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentCount = Math.ceil(easedProgress * endValue);
          
          setCount(currentCount);
          
          if (currentFrame === totalFrames) {
            clearInterval(counter);
          }
        }, frameDuration);
        
        return () => clearInterval(counter);
      }
    }, [inView, item.value]);

    // Extract the background and text colors from the color string
    const [bgColor, textColor] = item.color.split(' ');
    
    // Create a unique ID for each counter
    const counterId = `counter-${item.label.replace(/\s+/g, '-')}`;

    return (
      <div className={styles.container}>
      <div className={styles.flexDiv}>
      <div 
        id={counterId}
        className={styles.innerDiv}
      >
        <div 
          className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg ${bgColor} mx-auto w-full h-64 md:h-72 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'}`}
        >
            <div className="mb-4">
                <Image 
                   src={item.icon} 
                   alt={item.label} 
                   width={128} 
                   height={128} 
                    className="object-contain"
                  />
                </div>

          <h3 className={styles.number}>
            {count}{item.number.includes('+') ? '+' : ''}
          </h3>
          <p className={styles.text}>
            {item.label}
          </p>
        </div>
      </div> </div> </div>
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <h2 className={styles.h2}>
          Achievements
        </h2>
        <div className={styles.flexDiv}>
          {counters.map((item, index) => (
            <Counter key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}