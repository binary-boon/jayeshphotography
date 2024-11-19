"use client"


import Image from "next/image";
import image1 from "../../../public/img-1.jpg";
import { useRef } from 'react';
import gsap from 'gsap';
import {  useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function GsapImg (){


    const imageRef = useRef(null);

    useGSAP(() => {
      gsap.to(imageRef.current, {
        scrollTrigger:".img",
        x: 500, // Change to the desired distance in pixels
        duration: 2, // Animation duration in seconds
        ease: "power2.out" // Easing function
      });
    }, []);
    return(
        <div>
    <Image ref={imageRef} className="img" src={image1} alt="img"/>
    </div>
    );

}