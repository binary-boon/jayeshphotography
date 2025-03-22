'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, px } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import logoimg from "../../../public/images/jkp_logo.png"
import Image from 'next/image';
export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.navndBar}>
          <div className={styles.navlogo}> <Image src={logoimg} alt="img" height={64} width={64} /></div> 
            <div className={styles.bar}>
                
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
               
            </div> </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav menutoggle={setIsActive}  />}
            </AnimatePresence>
        </div>
    )
}
