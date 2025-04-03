import React from 'react'
import styles from "./footer.module.css"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { GrGoogle } from "react-icons/gr";
import { MdMail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";

export default function FooterContent() {
  return (
    <div className={styles.footerouter}>
      <div className='bg-[#fffff] py-6 px-6 flex flex-col justify-center'>
        <Section1 />
        <Section2 />
      </div>
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
            <div className={styles.copyrightdev}>
                <p className={styles.copyright}>©2025 Jayesh Khaturia Photography</p>
                <a className={styles.developerLink} href="https://www.binaryboon.com">Developed by - Binary Boon</a>
            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div className={styles.linkscontainer}>
            <div className={styles.links}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/MasonGalleryMain">Gallery</a>
                <a href="/SocialMediaGallery">Socials</a>
                <a href="/Contact">Contact</a>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/jayeshphotography/?hl=en" target="_blank" rel="noopener noreferrer">
                    <BiLogoInstagramAlt size={30} style={{ color: "black" }} />
                </a>
                <a href="https://www.facebook.com/jayeshkhaturiaphotography/" target="_blank" rel="noopener noreferrer">
                    <ImFacebook2 size={30} style={{ color: "black" }} />
                </a>
                <a href="mailto:jayeshfoto@gmail.com">
                    <MdMail size={30} style={{ color: "black" }} />
                </a>
                <a href="https://g.co/kgs/Pm9EGbU" target="_blank" rel="noopener noreferrer">
                    <GrGoogle size={30} style={{ color: "black" }} />
                </a>
            </div>
        </div>
    )
}





















// import React from 'react'
// import styles from "./footer.module.css"
// import { BiLogoInstagramAlt } from "react-icons/bi";
// import { GrGoogle } from "react-icons/gr";
// import { MdEmail, MdMail } from "react-icons/md";
// import { ImFacebook2 } from "react-icons/im"
// import { FaFacebook } from 'react-icons/fa';



// export default function FooterContent() {
//   return (
//     <div className={styles.footerouter}>
//     <div className='bg-[#fffff] py-8 px-12 h-full w-full flex flex-col  justify-between'>
//         <Section1 />
//         <Section2 />
//     </div>
//     </div>
//   )
// }

// const Section1 = () => {
//     return (
//         <div>
//             <Nav />
//         </div>
//     )
// }

// const Section2 = () => {
//     return (
//         <div className={styles.footerBrand}>
//         <div className={styles.khaturianame}>
//             <h1 className={styles.footerHeader}>Jayesh Photography</h1>
//             </div>
            
//             <div className={styles.copyrightdev}>
//             <p className={styles.copyright}>©copyright 2025, Jayesh Khaturia Photography</p>
//             <a className={styles.developerLink} href="www.binaryboon.com"><p>Developed by - binary boon</p></a>
//             </div>
//         </div>
//     )
// }

// const Nav = () => {
//     return (
//         <div className={styles.linkscontainer}>
//             <div className={styles.links}>
                
//                 <a href="/">Home</a>
//                 <a href="/">About</a>
//                 <a href="/MasonGalleryMain">Gallery</a>
//                 <a href="/SocialMediaGallery">Socials</a>
//                 <a href="/Contact">Contact US</a>
                
                
                
                
//             </div>
//             <div className={styles.socialIcons}>
                
//                 <BiLogoInstagramAlt size={40}/>
//                 <ImFacebook2 size={30}/>
                
//                 <GrGoogle size={30}/>
//                 <MdMail size={40}/>

                
//             </div>
//         </div>
//     )
// }