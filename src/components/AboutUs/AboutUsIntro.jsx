
import Image from "next/image"
import styles from "./aboutus.module.css"
import khaturiaImg from "../../../public/images/about.jpg"

const AboutUsIntro =()=>{

    return(
    
    <div className={styles.outerContainer}>

        <div>
            <Image src={khaturiaImg} height={720} width={720} alt="khaturia img"/>
        </div>

        <div className={styles.KhaturiaInfo}>

            <h1 className={styles.KhaturiaHeading}>Meet the Photographer</h1>
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dicta similique aliquam repudiandae voluptatum deleniti hic voluptate, ut rerum qui est temporibus commo</h2>
            <button>About US</button>

        </div>



    </div>)

}

export default AboutUsIntro;