"use client"



import { Button } from "@/components/ui/button"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../../public/slide-1.jpg";
import slide2 from "../../../public/slide-2.jpg";
import slide3 from "../../../public/slide-3.jpg"
import slide4 from "../../../public/slide-4.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {EffectFade,Autoplay, Navigation , Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function HeroSlider() {



  

return(<div >
                <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade,Autoplay,Navigation, Pagination]}
        effect={'fade'}

        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
    

        className="flex font-Mulish w-[100%] h-screen justify-center    ">
      
        
        

        <SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] md:w-[60%] lg:w-[60%]   bg-gradient-to-r from-[#ff1b6b] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={slide1}  alt="canadian image tnrc" />
<div className="flex xs:h-[60%] h-[50%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Timeless Moments</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  "> Beautifully Preserved</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
          

            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>








<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[70%] bg-gradient-to-r z-10 from-[#3f4d32] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={slide2}  alt="canadian image tnrc" />
<div className="flex xs:h-[50%] h-[50%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Capturing Your Love Story</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">One Frame at a Time</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
          

            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>








<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] bg-gradient-to-r z-10 from-[#5cb270] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={slide3}  alt="canadian image tnrc" />
<div className="flex xs:h-[80%] h-[50%] lg:h-[60%] justify-center lg:justify-between md:justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Families First</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
           
            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>







<SwiperSlide className=" relative flex justify-center w-[100%] object-fill ">
            <div className="absolute h-[100%] w-[50%] xs:w-[80%] bg-gradient-to-r z-10 from-[#2c5079] "/>

<Image className=" relative block object-fill mix-blend-overlay xs:h-screen xs:object-cover  "  src={slide4}  alt="canadian image tnrc" />
<div className="flex xs:h-[80%] h-[50%] lg:h-[60%] justify-center xs:justify-between flex-col absolute  xs:top-8 xs:ml-4 xs:pr-6 md:top-1/4 md:left-16 lg:left-16 lg:top-1/4 z-20 ">
    
       
            <div className="flex flex-col mb-7 "><h2 className=" font-Mulish xs:text-2xl sm:text-xl md:text-3xl  lg:text-3xl font-bold py-1 text-white xs:ml-0 xs:pr-3 sm:ml-2 md:ml-2 lg:ml-2 ">Celebrating Our Community & Culture</h2>
            <h1 className="text-8xl text-white font-bold xs:text-5xl sm:text-3xl md:text-5xl lg:text-8xl  ">Capacity Building</h1></div>
            

       
            <div className="flex mb-7 ml-2 ">
          
            </div>
        

        

        <div className="flex ml-2"> 
        <Button className=" font-Mulish font-bold text-2xl text-white bg-gradient-to-r from-[#0b3866] to-[#e81cff] p-6" variant="flat">
             Know More
          </Button></div>
        
    </div> 

</SwiperSlide>







        
      </Swiper>
</div>);
}



