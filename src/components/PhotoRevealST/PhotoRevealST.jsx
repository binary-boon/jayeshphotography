"use client"

import { useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ReactLenis} from "lenis/react";



gsap.registerPlugin(ScrollTrigger);


export default function PhotoRevealST()  {

    useEffect(()=>{
            const scrollTriggerSettings={

                trigger:".main",
                 start: "top 25%",
                 toggleAction:"play reverse play reverse",

            };


            const leftXValues=[-800,-900,-400];
            const rightXValues=[800,900,400];
            const leftRotationValues=[-30,-20,-35]
            const rightRotationValues=[30,20,35]

            const yValues=[100,-150,-400]

            gsap.utils.toArray("row").forEach((row,index)=>{
                const cardLeft = row.querySelector(".card-left");
                const cardRight = row.querySelector(".card-right");

                gsap.to(cardLeft,{
                    x: leftXValues [index],
                    scrollTrigger:{
                        trigger: ".main",
                        start: "top center",
                        end:"150% bottom",
                        scrub:true,
                        onUpdate:(self)=>{
                            const progress = self.progress;
                            cardLeft.style.transform=`translateX ${progress*leftXValues[index]}px TranslateY${progress*yValues[index]}px rotate(${progress*leftRotationValues[index]}deg)`;

                            cardRight.style.transform=`translateX ${progress*rightXValues[index]}px TranslateY${progress*yValues[index]}px rotate(${progress*rightRotationValues[index]}deg)`;
                        }
                    }
                })

            });

            gsap.to("button",{y:0,opacity:1,delay:0.25,duration:0.5,ease:"power1.out", scrollTrigger:scrollTriggerSettings,});
            gsap.to(".line p", {
                y:0,stagger:0.1,duration:0.5,ease:"power1.out",scrollTrigger:scrollTriggerSettings,
            })

                return ()=>{
                    ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
                }

    },[])


    const generateRows = ()=>{
        const rows = [];
        for (let i =1 ; i<=2 ; i++){
            rows.push(
                <div className="row" key={i}>
                    <div className=" card card-left">
                        <img src={`/img-${2*1-1}.jpg`}/>
                    </div>

                    <div className="card card-right">

                        <img src={`/img-${2*1}.jpg`}/>

                    </div>
                </div>
            )
        }

        return rows;
    }




    return (
    
    
        <ReactLenis root>

        <section className="hero"></section>
        <section className="main">
            <div className="main-content">

                <div className="copy">

                    <div className="line">
                    <p>Your wedding is a story of love, laughter, </p>

                    </div>

                    <div className="line">
                    <p> and unforgettable moments—and we’re here to capture each one. </p>

                    </div>


                    <div className="line">
                    
                    
                    <p> Our photography celebrates your joy and preserves it beautifully, </p>

                

                    </div>


                    <div className="line">
                    
                    
                    <p> allowing you to relive every precious memory, time and again. </p>

                

                    </div>




                </div>

                <div className="btn">
                    <button>Learn More</button>

                </div>

            </div>

            {generateRows()}

        </section>
        <section className="footer"></section>

        </ReactLenis>
    
    )
}


