'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "4.jpg"
  },
  {
    title: "About",
    href: "/shop",
    src: "about.jpg"
  },
  
  {
    title: "Gallery",
    href: "/lgGallery",
    src: "3.jpg"
  },
  {
    title: "Contact",
    href: "/Contact",
    src: "7.jpg"
  }
]

export default function Index( {setIsActive}  ) {
  

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} linkstoMenu={setIsActive}/>
          {/* <Footer /> */}
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}