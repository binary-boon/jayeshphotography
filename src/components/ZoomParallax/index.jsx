// index.jsx
import styles from './styles.module.scss';
import Picture1 from '../../../public/images/1.jpg';
import Picture2 from '../../../public/images/2.jpg';
import Picture3 from '../../../public/images/3.jpg';
import Picture4 from '../../../public/images/4.jpg';
import Picture5 from '../../../public/images/5.jpg';
import Picture6 from '../../../public/images/6.jpg';
import Picture7 from '../../../public/images/7.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    // Control text & button visibility (Appear when scale is near 3.5 - 4)
    const textOpacity = useTransform(scale4, [2.5, 3], [0, 1]); 
    const textVisibility = useTransform(scale4, [2.5, 2.8], ['hidden', 'visible']);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ];

    const handleButtonClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('Button clicked, navigating directly');
        window.location.href = '/MasonGalleryMain';
    };

    return (
        <div>
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({ src, scale }, index) => (
                    <motion.div key={index} style={{ scale }} className={styles.el}>
                        <div className={styles.imageContainer}>
                            <Image src={src} fill alt="image" placeholder="blur" />

                            {/* Headline and Button only for Picture1 */}
                            {index === 0 && (
                                <motion.div
                                    className={styles.overlayText}
                                    style={{ opacity: textOpacity, visibility: textVisibility }}
                                >
                                    <h1>A Glimpse of Love & Celebration</h1>
                                    <h2>Dive into our extensive gallery and experience the magic we create with every shot. From candid moments to stunning portraits, witness the beauty of weddings through our lens.</h2>
                                    
                                    {/* Simple button with direct navigation */}
                                    
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            
        </div>
<div className={styles.btndiv}>
<button
className={styles.galleryButton}

onClick={handleButtonClick}
>
View Gallery
</button></div>
   </div> );
}





// import styles from './styles.module.scss';
// import Picture1 from '../../../public/images/1.jpg';
// import Picture2 from '../../../public/images/2.jpg';
// import Picture3 from '../../../public/images/3.jpg';
// import Picture4 from '../../../public/images/4.jpg';
// import Picture5 from '../../../public/images/5.jpg';
// import Picture6 from '../../../public/images/6.jpg';
// import Picture7 from '../../../public/images/7.jpg';
// import Image from 'next/image';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';

// export default function Index() {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//     });

//     const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//     const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//     const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//     const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//     const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//     // Control text & button visibility (Appear when scale is near 3.5 - 4)
//     const textOpacity = useTransform(scale4, [2.5, 3], [0, 1]); 
//     const textVisibility = useTransform(scale4, [2.5, 2.8], ['hidden', 'visible']);

//     const pictures = [
//         {
//             src: Picture1,
//             scale: scale4
//         },
//         {
//             src: Picture2,
//             scale: scale5
//         },
//         {
//             src: Picture3,
//             scale: scale6
//         },
//         {
//             src: Picture4,
//             scale: scale5
//         },
//         {
//             src: Picture5,
//             scale: scale6
//         },
//         {
//             src: Picture6,
//             scale: scale8
//         },
//         {
//             src: Picture7,
//             scale: scale9
//         }
//     ];

//     return (
//         <div ref={container} className={styles.container}>
//             <div className={styles.sticky}>
//                 {pictures.map(({ src, scale }, index) => (
//                     <motion.div key={index} style={{ scale }} className={styles.el}>
//                         <div className={styles.imageContainer}>
//                             <Image src={src} fill alt="image" placeholder="blur" />

//                             {/* Headline and Button only for Picture1 */}
//                             {index === 0 && (
//                                 <motion.div
//                                     className={styles.overlayText}
//                                     style={{ opacity: textOpacity, visibility: textVisibility }}
//                                 >
//                                     <h1>A Glimpse of Love & Celebration</h1>
//                                     <h2>Dive into our extensive gallery and experience the magic we create with every shot. From candid moments to stunning portraits, witness the beauty of weddings through our lens.</h2>
//                                     <button ><a href="/MasonGalleryMain">View Gallery </a></button>
//                                 </motion.div>
//                             )}
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// }
