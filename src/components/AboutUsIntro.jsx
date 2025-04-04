import Image from "next/image";
import styles from "./aboutus.module.css";
import khaturiaImg from "../../../public/images/about.jpg";

const AboutUsIntro = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.imageContainer}>
                <Image src={khaturiaImg} height={720} width={720} alt="khaturia img" />
            </div>
            <div className={styles.KhaturiaInfo}>
                <h1 className={styles.KhaturiaHeading}>Crafting Memories with Passion</h1>
                <h2>
                    Capturing moments is easy, but capturing the essence of emotions is an art. 
                    With over 500 weddings shot across the globe, Jayesh Khaturia Photography ensures 
                    that your special day is framed in perfection. Our team of skilled photographers 
                    and cinematographers work passionately to bring joy to every couple and their families.
                </h2>
                <button className={styles.button}>Learn More</button>
            </div>
        </div>
    );
};

export default AboutUsIntro;














// import Image from "next/image"
// import styles from "./aboutus.module.css"
// import khaturiaImg from "../../../public/images/about.jpg"

// const AboutUsIntro =()=>{

//     return(
    
//     <div className={styles.outerContainer}>

//         <div>
//             <Image src={khaturiaImg} height={720} width={720} alt="khaturia img"/>
//         </div>

//         <div className={styles.KhaturiaInfo}>

//             <h1 className={styles.KhaturiaHeading}>Crafting Memories with Passion</h1>
//             <h2>Capturing moments is easy, but capturing the essence of emotions is an art. With over 500 weddings shot across the globe, Jayesh Khaturia Photography ensures that your special day is framed in perfection. Our team of skilled photographers and cinematographers work passionately to bring joy to every couple and their families.</h2>
//             <button>Learn More</button>

//         </div>



//     </div>)

// }

// export default AboutUsIntro;