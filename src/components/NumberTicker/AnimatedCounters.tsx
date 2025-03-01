'use client';

import React, { useEffect, useState } from 'react';

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
      number: "50+", 
      value: 50, 
      color: "bg-rose-100 text-rose-600",
      icon: "📸"
    },
    { 
      label: "Happy Clients", 
      number: "100+", 
      value: 100, 
      color: "bg-sky-100 text-sky-600",
      icon: "😊" 
    },
    { 
      label: "Years of Experience", 
      number: "10+", 
      value: 10, 
      color: "bg-amber-100 text-amber-600",
      icon: "✨"
    },
    { 
      label: "Photos Delivered", 
      number: "10000+", 
      value: 10000, 
      color: "bg-emerald-100 text-emerald-600",
      icon: "🖼️"
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
      <div 
        id={counterId}
        className="flex items-center justify-center"
      >
        <div 
          className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg ${bgColor} mx-auto w-full h-64 md:h-72 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'}`}
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className={`text-5xl md:text-6xl font-bold mb-2 ${textColor} font-serif tracking-tight`}>
            {count}{item.number.includes('+') ? '+' : ''}
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-700 text-center mt-2">
            {item.label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 font-serif">
          Our Photography Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((item, index) => (
            <Counter key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}