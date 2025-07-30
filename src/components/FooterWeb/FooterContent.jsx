import React from 'react'
import styles from "./footer.module.css"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { GrGoogle } from "react-icons/gr";
import { MdEmail, MdMail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im"
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function FooterContent() {
  return (
    <div className={styles.footerContainer}>
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
        <div className={styles.section2}>
            <h1 className={styles.brandName}>Jayesh Photography</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className={styles.linkscontainer}>
            <div className={styles.links}>
                <Link href="/" className={styles.navLink}>
                    <p>Home</p>
                </Link>
                <Link href="/AboutUS" className={styles.navLink}>
                    <h3>About</h3>
                </Link>
                <Link href="/lgGallery" className={styles.navLink}>
                    <p>Projects</p>
                </Link>
                <Link href="/SocialMediaGallery" className={styles.navLink}>
                    <p>Gallery</p>
                </Link>
                <Link href="/Contact" className={styles.navLink}>
                    <p>Contact Us</p>
                </Link>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/jayeshphotography/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <BiLogoInstagramAlt size={40}/>
                </a>
                <a href="https://www.facebook.com/jayeshkhaturiaphotography/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <ImFacebook2 size={30}/>
                </a>
                <a href="https://share.google/1PXLH7zNuMOcIQfKO" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <GrGoogle size={30}/>
                </a>
                <a href="mailto:jayeshfoto@gmail.com" className={styles.socialLink}>
                    <MdMail size={40}/>
                </a>
            </div>
        </div>
    )
}

const BusinessLocations = () => {
    return (
        <div className={styles.businessLocations}>
            <div className={styles.locationCard}>
                <h4 className={styles.locationTitle}>Udaipur Office</h4>
                <p className={styles.locationAddress}>
                    4th Floor, Office no. 422, City Center,<br/>
                    Ashok Nagar Main Rd, Ashok Nagar,<br/>
                    Udaipur, Rajasthan 313001
                </p>
            </div>
            <div className={styles.locationCard}>
                <h4 className={styles.locationTitle}>Mumbai Office</h4>
                <p className={styles.locationAddress}>
                    Glendon Apartment Opp. Maldrines Chinese Restaurant,<br/>
                    Sunder Lane, Orlem, Malad West,<br/>
                    Mumbai 400064
                </p>
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
//     <div className='bg-[#fffff] py-8 px-12 h-full w-full flex flex-col justify-between'>
//         <Section1 />
//         <Section2 />
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
//         <div className='flex justify-between items-end'>
//             <h1 className='text-[9vw] leading-[0.8] mt-10 font-heading '>Jayesh Photography</h1>
//             <p>©copyright</p>
//         </div>
//     )
// }

// const Nav = () => {
//     return (
//         <div className={styles.linkscontainer}>
//             <div className={styles.links}>
                
//                 <p>Home</p>
//                 <h3>About</h3>
//                 <p>Projects</p>
//                 <p>Gallery</p>
//                 <p>Contact Us</p>
//             </div>
//             <div className={styles.socialIcons}>
                
//                 <BiLogoInstagramAlt size={40}/>
//                 <ImFacebook2 size={30}/>
//                 <ImFacebook2 size={30}/>
//                 <GrGoogle size={30}/>
//                 <MdMail size={40}/>

                
//             </div>
//         </div>
//     )
// }