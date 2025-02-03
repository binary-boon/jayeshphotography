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

  useEffect(() => {
    const nextButton = nextRef.current;
    const prevButton = prevRef.current;
    const slider = sliderRef.current;
    const thumbnail = thumbnailRef.current;
    const carousel = carouselRef.current;
    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto;

    const showSlider = (type) => {
      if (!slider || !thumbnail || !carousel) return;
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

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove(styles.next);
        carousel.classList.remove(styles.prev);
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextButton?.click();
      }, timeAutoNext);
    };

    nextButton?.addEventListener("click", () => showSlider("next"));
    prevButton?.addEventListener("click", () => showSlider("prev"));

    runNextAuto = setTimeout(() => {
      nextButton?.click();
    }, timeAutoNext);

    return () => {
      nextButton?.removeEventListener("click", () => showSlider("next"));
      prevButton?.removeEventListener("click", () => showSlider("prev"));
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={sliderRef}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`item ${styles.item}`}>
            <img src={`/images/slide-${i}.jpg`} alt={`Slide ${i}`} />
            <div className={styles.content}>
              <div className={styles.author}>LUNDEV</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>ANIMAL</div>
              <div className={styles.des}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi,
                rem magnam nesciunt minima placeat.
              </div>
              <div className={styles.buttons}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.thumbnail} ref={thumbnailRef}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`item ${styles.item}`}>
            <img src={`/images/slide-${i}.jpg`} alt={`Thumbnail ${i}`} />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button id="prev" ref={prevRef}>
          {"<"}
        </button>
        <button id="next" ref={nextRef}>
          {">"}
        </button>
      </div>

      <div className={styles.time} ref={timeRef}></div>
    </div>
  );
};

export default HeroSlider;
