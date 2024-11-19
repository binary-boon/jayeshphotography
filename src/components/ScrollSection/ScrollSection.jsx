// components/ScrollSection.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../../public/img-1.jpg"
import img2 from "../../../public/img-2.jpg"
import img3 from "../../../public/img-3.jpg"
import img4 from "../../../public/img-4.jpg"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate left images out of view
    gsap.fromTo(
      leftImagesRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "100%",
        opacity: 1,
        scrollTrigger: {
          trigger: leftImagesRef.current[0],
          start: "top 80%",
          end: "top 100",
          scrub: true,
        },
      }
    );

    // Animate right images out of view
    gsap.fromTo(
      rightImagesRef.current,
      { x: "100%", opacity: 0 },
      {
        x: "-100%",
        opacity: 1,
        scrollTrigger: {
          trigger: rightImagesRef.current[0],
          start: "top 80%",
          end: "top 100%",
          scrub: true,
        },
      }
    );

    // Reveal text as images move out
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 100%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="scroll-section">
      <div className="images left">
        <Image ref={(el) => (leftImagesRef.current[0] = el)} src={img1} alt="Left Image 1" />
        <Image ref={(el) => (leftImagesRef.current[1] = el)} src={img2} alt="Left Image 2" />
      </div>
      <div className="text-content" ref={textRef}>
        <h1>Your Text Content Here</h1>
        <p>This text becomes visible as images scroll away.</p>
      </div>
      <div className="images right">
        <Image ref={(el) => (rightImagesRef.current[0] = el)} src={img3} alt="Right Image 1" />
        <Image ref={(el) => (rightImagesRef.current[1] = el)} src={img4} alt="Right Image 2" />
      </div>
      <style jsx>{`
        .scroll-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          padding: 50px;
        }
        .images {
          width: 20%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .text-content {
          width: 50%;
          text-align: center;
          opacity: 0; /* Initially hidden */
        }
        images {
          width: 100%;
          object-fit: cover;
          transition: transform 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ScrollSection;
