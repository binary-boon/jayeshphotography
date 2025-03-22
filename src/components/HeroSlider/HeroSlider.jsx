"use client";

import { useEffect, useRef } from "react";
import styles from "./heroslider.module.css";

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const timeRef = useRef(null);

  const imgarr = [1, 2, 3, 4];
  const thumbsarr = [1, 2, 3, 4];

  let runTimeOut;
  let runNextAuto;
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let isTransitioning = false;

  const resetTimer = () => {
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      if (nextRef.current) nextRef.current.click();
    }, timeAutoNext);
  };

  const showSlider = (type) => {
    if (isTransitioning) return;
    isTransitioning = true;

    if (!sliderRef.current || !thumbnailRef.current || !carouselRef.current) return;

    const slider = sliderRef.current;
    const thumbnail = thumbnailRef.current;
    const carousel = carouselRef.current;
    const sliderItems = slider.querySelectorAll(".item");
    const thumbnailItems = thumbnail.querySelectorAll(".item");

    if (type === "next") {
      slider.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      carousel.classList.add(styles.next);
    } else {
      slider.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add(styles.prev);
    }

    // Update active thumbnail
    thumbnailItems.forEach((item) => item.classList.remove(styles.active));
    thumbnailItems[0].classList.add(styles.active);

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove(styles.next);
      carousel.classList.remove(styles.prev);
      isTransitioning = false;
      resetTimer();
    }, timeRunning);
  };

  useEffect(() => {
    const nextButton = nextRef.current;
    const prevButton = prevRef.current;

    const handleNext = () => showSlider("next");
    const handlePrev = () => showSlider("prev");

    if (nextButton) nextButton.addEventListener("click", handleNext);
    if (prevButton) prevButton.addEventListener("click", handlePrev);

    resetTimer();

    return () => {
      if (nextButton) nextButton.removeEventListener("click", handleNext);
      if (prevButton) prevButton.removeEventListener("click", handlePrev);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={sliderRef}>
        {imgarr.map((i) => (
          <div key={i} className={`item ${styles.item}`}>
            <img src={`/images/slide-${i}.jpg`} alt={`Slide ${i}`} />
            <div className={styles.content}>
              <div className={styles.author}>Wedding Photography</div>
              <div className={styles.title}>Landscape Vibe</div>
              <div className={styles.topic}>Photo</div>
              <div className={styles.des}>Lorem ipsum dolor sit amet...</div>
              <div className={styles.buttons}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.thumbnail} ref={thumbnailRef}>
        {thumbsarr.map((i, index) => (
          <div key={i} className={`item ${styles.item} ${index === 0 ? styles.active : ""}`}>
            <img src={`/images/slide-${i}.jpg`} alt={`Thumbnail ${i}`} />
            <div className={styles.content}>
              <div className={styles.title}>{`Name Slider ${i}`}</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button id="prev" ref={prevRef}>{"<"}</button>
        <button id="next" ref={nextRef}>{">"}</button>
      </div>

      <div className={styles.time} ref={timeRef}></div>
    </div>
  );
};

export default HeroSlider;






// "use client";

// import { useEffect, useRef } from "react";
// import styles from "./heroslider.module.css";

// const HeroSlider = () => {
//   const sliderRef = useRef(null);
//   const thumbnailRef = useRef(null);
//   const carouselRef = useRef(null);
//   const nextRef = useRef(null);
//   const prevRef = useRef(null);
//   const timeRef = useRef(null);

//   const imgarr =[1,2,3,4];
//   const thumbsarr =[1,2,3,4];

//   useEffect(() => {
//     const nextButton = nextRef.current;
//     const prevButton = prevRef.current;
//     const slider = sliderRef.current;
//     const thumbnail = thumbnailRef.current;
//     const carousel = carouselRef.current;
//     let timeRunning = 3000;
//     let timeAutoNext = 7000;
//     let runTimeOut;
//     let runNextAuto;
  
//     // ✅ Define resetTimer before using it
//     const resetTimer = () => {
//       clearTimeout(runNextAuto);
//       runNextAuto = setTimeout(() => {
//         nextButton?.click();
//       }, timeAutoNext);
//     };
  
//     const showSlider = (type) => {
//       if (!slider || !thumbnail || !carousel) return;
      
//       const sliderItems = slider.querySelectorAll(".item");
//       const thumbnailItems = thumbnail.querySelectorAll(".item");
  
//       if (type === "next") {
//         slider.appendChild(sliderItems[0]);
//         thumbnail.appendChild(thumbnailItems[0]);
//         carousel.classList.add(styles.next);
//       } else {
//         slider.prepend(sliderItems[sliderItems.length - 1]);
//         thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
//         carousel.classList.add(styles.prev);
//       }
  
//       clearTimeout(runTimeOut);
//       runTimeOut = setTimeout(() => {
//         carousel.classList.remove(styles.next);
//         carousel.classList.remove(styles.prev);
//         resetTimer(); // ✅ Call resetTimer after animation completes
//       }, timeRunning);
//     };
  
//     nextButton?.addEventListener("click", () => showSlider("next"));
//     prevButton?.addEventListener("click", () => showSlider("prev"));
  
//     // ✅ Start the auto-slide only after a short delay
//     runNextAuto = setTimeout(() => {
//       nextButton?.click();
//     }, timeAutoNext);
  
//     return () => {
//       nextButton?.removeEventListener("click", () => showSlider("next"));
//       prevButton?.removeEventListener("click", () => showSlider("prev"));
//       clearTimeout(runNextAuto);
//     };
//   }, []);
  

//   return (
//     <div className={styles.carousel} ref={carouselRef}>
//       <div className={styles.list} ref={sliderRef}>
//         {imgarr.map((i) => (
//           <div key={i} className={`item ${styles.item}`}>
//             <img src={`/images/slide-${i}.jpg`} alt={`Slide ${i}`} />
//             <div className={styles.content}>
//               <div className={styles.author}>Wedding Photography</div>
//               <div className={styles.title}>Landscape Vibe</div>
//               <div className={styles.topic}>Photo</div>
//               <div className={styles.des}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
//                 rem magnam nesciunt minima placeat.
//               </div>
//               <div className={styles.buttons}>
//                 <button>SEE MORE</button>
//                 <button>SUBSCRIBE</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.thumbnail} ref={thumbnailRef}>
//         {thumbsarr.map((i) => (
//           <div key={i} className={`item ${styles.item}`}>
//             <img src={`/images/slide-${i}.jpg`} alt={`Thumbnail ${i}`} />
//             <div className={styles.content}>
//               <div className={styles.title}>{`Name Slider ${i}`} </div>
              
//               <div className={styles.description}>Description</div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.arrows}>
//         <button id="prev" ref={prevRef}>
//           {"<"}
//         </button>
//         <button id="next" ref={nextRef}>
//           {">"}
//         </button>
//       </div>

//       <div className={styles.time} ref={timeRef}></div>
//     </div>
//   );
// };

// export default HeroSlider;
