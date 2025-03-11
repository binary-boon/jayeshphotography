"use client"

import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxSection from "./ParallaxSection";

const MyParallaxProvider =()=> {

    return (
    <ParallaxProvider>
        <ParallaxSection/>

    </ParallaxProvider>);


}


export default MyParallaxProvider;