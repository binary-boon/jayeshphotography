"use client"
import AnimatedCounter from "./AnimatedCounters"
import styles from "./numticker.module.css"

const Numtile = ()=>{

    
<div className={styles.container}>

<AnimatedCounter from={0} to={500} />
<AnimatedCounter from={0} to={100} />
<AnimatedCounter from={0} to={200} />
<AnimatedCounter from={0} to={400} />

</div>


}

export default Numtile;