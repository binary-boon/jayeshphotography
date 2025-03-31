import React from 'react'
import styles from "./footer.module.css"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { GrGoogle } from "react-icons/gr";
import { MdEmail, MdMail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im"
import { FaFacebook } from 'react-icons/fa';



export default function FooterContent() {
  return (
    <div className='bg-[#fffff] py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className={styles.footerBrand}>
            <h1 className={styles.footerHeader}>Jayesh Photography</h1>
            <a href=""><p>Home</p></a>
            <a href=""><p>About</p></a>
            <a href=""><p>Contact</p></a>
            <a href=""><p>Gallery</p></a>
            <a href=""><p>Cookie Policy</p></a>
            
            <p className={styles.copyright}>©copyright 2025, Jayesh Khaturia Photography</p>
            <a className={styles.developerLink} href="www.binaryboon.com"><p>Developed by - binary boon</p></a>
        </div>
    )
}

const Nav = () => {
    return (
        <div className={styles.linkscontainer}>
            <div className={styles.links}>
                
                <p>Home</p>
                <h3>About</h3>
                <p>Projects</p>
                <p>Gallery</p>
                <p>Contact Us</p>
            </div>
            <div className={styles.socialIcons}>
                
                <BiLogoInstagramAlt size={40}/>
                <ImFacebook2 size={30}/>
                
                <GrGoogle size={30}/>
                <MdMail size={40}/>

                
            </div>
        </div>
    )
}