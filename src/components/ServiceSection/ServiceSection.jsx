"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Styles from "./servicesection.module.scss"; // your SCSS
import VideoStyles from "../VideoSlider/VideoSlider.module.scss" // adjust path as needed

import cinematoImg from "../../../public/images/cinematography.jpg";
import prewedImg from "../../../public/images/prewedding-shoot.jpg";
import wedPhotoImg from "../../../public/images/wedding_photography.jpg";
import droneImg from "../../../public/images/drone_shoots.jpg";

// Animation variants copied from VideoSlider
const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

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
      <div className={Styles.titleDiv}>
        <h1>Lights. Camera. Forever.</h1>
        <h2>
          Step into your own cinematic love story. From grand entrances to quiet
          glances, <br />
          we capture every detail with artistic precision—turning your
          once-in-a-lifetime moments into timeless visuals that feel like film
          stills.
        </h2>
      </div>

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
                className={
                  hoveredIndex === index
                    ? Styles.orgSize
                    : Styles.incSize
                }
                width={360}
                alt={service.title}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={Styles.btnDiv}>
        <motion.button
          className={VideoStyles.primaryBtn}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          Get Free Consultation!
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceSection;


























// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Styles from "./servicesection.module.css";

// import cinematoImg from "../../../public/images/cinematography.jpg";
// import prewedImg from "../../../public/images/prewedding-shoot.jpg";
// import wedPhotoImg from "../../../public/images/wedding_photography.jpg";
// import droneImg from "../../../public/images/drone_shoots.jpg";

// const services = [
//     { id: 1, title: "Pre-Wedding Shoots", img: prewedImg },
//     { id: 2, title: "Cinematography", img: cinematoImg },
//     { id: 3, title: "Wedding Photography", img: wedPhotoImg },
//     { id: 4, title: "Drone Shoots", img: droneImg },
// ];

// const ServiceSection = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     return (
//         <div className={Styles.Servicediv}>
//             <div className={Styles.titleDiv}>
//                 <h1>Lights. Camera. Forever.</h1>
//                 <h2>Step into your own cinematic love story. From grand entrances to quiet glances, <br/> we capture every detail with artistic precision—turning your once-in-a-lifetime moments into timeless visuals that feel like film stills.</h2>
//             </div>
//             <div className={Styles.Servicecomponent}>
//                 {services.map((service, index) => (
//                     <div key={service.id} className={Styles.serviceInfo}>
//                         <div>
//                             <h1>{service.title}</h1>
//                         </div>

//                         <div 
//                             className={Styles.imgDiv}  
//                             onMouseEnter={() => setHoveredIndex(index)}  
//                             onMouseLeave={() => setHoveredIndex(null)}
//                         >
//                             <Image 
//                                 src={service.img} 
//                                 className={`${hoveredIndex === index ?   Styles.orgSize : Styles.incSize}`} 
//                                 width={360} 
//                                 alt={service.title}
//                             />
//                         </div>
//                     </div>
//                 ))}

                
//             </div>   

//             <div className={Styles.btnDiv}><button className={Styles.btn}>Get Free Consulation!</button></div>
//         </div>

        
//     );
// }

// export default ServiceSection;
