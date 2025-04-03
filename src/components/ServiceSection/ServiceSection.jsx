"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./servicesection.module.css";

import cinematoImg from "../../../public/images/cinematography.jpg";
import prewedImg from "../../../public/images/prewedding-shoot.jpg";
import wedPhotoImg from "../../../public/images/wedding_photography.jpg";
import droneImg from "../../../public/images/drone_shoots.jpg";

const services = [
    { id: 1, title: "Pre-Wedding Shoots", img: prewedImg },
    { id: 2, title: "Cinematography", img: cinematoImg },
    { id: 3, title: "Wedding Photography", img: wedPhotoImg },
    { id: 4, title: "Drone Shoots", img: droneImg },
];

const ServiceSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={Styles.Servicediv}>
            <div className={Styles.Servicecomponent}>
                {services.map((service, index) => (
                    <div key={service.id} className={Styles.serviceInfo}>
                        <div>
                            <h1>{service.title}</h1>
                        </div>

                        <div 
                            className={Styles.imgDiv}  
                            onMouseEnter={() => setHoveredIndex(index)}  
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image 
                                src={service.img} 
                                className={`${hoveredIndex === index ?   Styles.orgSize : Styles.incSize}`} 
                                width={360} 
                                alt={service.title}
                            />
                        </div>
                    </div>
                ))}

                
            </div>   

            <div className={Styles.btnDiv}><button className={Styles.btn}>Get Free Consulation!</button></div>
        </div>

        
    );
}

export default ServiceSection;
