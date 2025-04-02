// components/MasonryGallery/MasonryGallery.jsx
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import styles from './masongallery.module.css';

const MasonGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const galleryRef = useRef(null);
  const [columns, setColumns] = useState(3);

  // Responsive columns adjustment
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Create column arrays for masonry layout
  const createMasonryLayout = () => {
    const columnArray = Array.from({ length: columns }, () => []);
    
    images.forEach((image, index) => {
      columnArray[index % columns].push(image);
    });
    
    return columnArray;
  };

  const masonryColumns = createMasonryLayout();
  
  // Prepare slides for lightbox
  const slides = images.map(image => ({
    src: image.src,
    alt: image.alt || '',
    width: image.width || 1920,
    height: image.height || 1080,
    caption: image.caption || '',
  }));

  const openLightbox = (index) => {
    setImageIndex(index);
    setOpen(true);
  };

  return (
    <div className={styles.galleryContainer} ref={galleryRef}>
      <div className={styles.masonryGrid} style={{ '--columns': columns }}>
        {masonryColumns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className={styles.masonryColumn}>
            {column.map((image, imageIdx) => {
              const globalIndex = columnIndex + (imageIdx * columns);
              return (
                <div 
                  key={image.id || `img-${globalIndex}`} 
                  className={styles.imageContainer}
                  onClick={() => openLightbox(globalIndex)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt || `Gallery image ${globalIndex + 1}`}
                      width={image.width || 600}
                      height={image.height || 400}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover"
                      }}
                      placeholder="blur"
                      blurDataURL={image.blurDataURL || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="}
                      className={styles.image}
                    />
                    {image.caption && (
                      <div className={styles.caption}>
                        {image.caption}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
        plugins={[Thumbnails, Zoom, Captions, Counter]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        counter={{ container: { style: { top: '0', left: '0' } } }}
        thumbnails={{
          position: "bottom",
        }}
      />
    </div>
  );
};

export default MasonGallery;