"use client";

import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import "lightgallery/css/lightgallery.css";
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import styles from "./MasonryGallery.module.css";

const imageFiles = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const MasonryGallery: FC = () => {
  const lightGalleryRef = useRef<any>(null);

  useEffect(() => {
    // Attach LightGallery manually if needed
    if (lightGalleryRef.current) {
      lightGalleryRef.current.refresh();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <LightGallery
        ref={lightGalleryRef}
        elementClassNames={styles.masonryGalleryDemo}
        plugins={[lgZoom, lgShare, lgHash, lgThumbnail]}
      >
        <div className={styles.gridSizer}></div>
        {imageFiles.map((fileName, index) => (
          <a
            key={index}
            className={styles.galleryItem}
            data-src={`/images/${fileName}`}
            onClick={(e) => e.preventDefault()} // Prevent default navigation issues
          >
            <Image
              alt={`Gallery Image ${index + 1}`}
              className={styles.imgResponsive}
              src={`/images/${fileName}`}
              width={300}
              height={200}
              unoptimized={true} // Ensures Next.js doesn't wrap it
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default MasonryGallery;
