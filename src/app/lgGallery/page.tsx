"use client";

import { useRef } from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "./lggallery.module.css";

function ElGallery() {
  const galleryRef = useRef<any>(null);

  const onInit = (detail: any) => {
    galleryRef.current = detail.instance; // ✅ Store LightGallery instance
    console.log("LightGallery has been initialized", detail);
  };

  const images = [1, 2, 3, 4, 5];

  return (
    <div className="p-4">
      {/* ✅ LightGallery should have <a> tags as direct children */}
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((num) => (
          <a
            key={num}
            href={`/images/${num}.jpg`}
            data-lg-size="720x900"
            data-responsive={`/images/${num}-sm.jpg 375, /images/${num}-sm.jpg 480, /images/${num}-md.jpg 757`}
            className="block"
          >
            <img
              alt={`img${num}`}
              src={`/images/${num}.jpg`}
              className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </a>
        ))}
      </LightGallery>

      {/* ✅ Wrap images in a grid, but LightGallery works separately */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {images.map((num) => (
          <a key={num} href={`/images/${num}.jpg`} className="block">
            <img
              alt={`img${num}`}
              src={`/images/${num}.jpg`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ElGallery;































// "use client"

// import LightGallery from 'lightgallery/react';

// // import styles
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// // import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';
// import  "./lggallery.module.css"

// function ElGallery() {
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };
//     return (
//         <div >
//             <LightGallery
//                 onInit={onInit}
//                 speed={500} 
//                 plugins={[lgThumbnail, lgZoom]}
//             > 
//                 <a href="images/1.jpg" data-lg-size="1140x112" data-responsive="images/1-sm.jpg 375, images/1-sm.jpg 480, images/1-md.jpg 757">
//                     <img alt="img1" src="images/1.jpg"  className="img-fluid"/>
//                 </a>
//                 <a href="images/2.jpg" data-lg-size="1228x1536" data-responsive="images/2-sm.jpg 375, images/2-sm.jpg 480, images/2-md.jpg 757">
//                     <img alt="img2" src="images/2.jpg" className="img-fluid"  />
//                 </a>
//                 <a href="images/3.jpg" data-lg-size="720x900" data-responsive="images/3-sm.jpg 375, images/3-sm.jpg 480, images/3-md.jpg 757">
//                     <img alt="img2" src="images/3.jpg" className="img-fluid" />
//                 </a>
//                 <a href="images/4.jpg" data-lg-size="720x900" data-responsive="images/4-sm.jpg 375, images/4-sm.jpg 480, images/4-md.jpg 757">
//                     <img alt="img2" src="images/4.jpg" className="img-fluid" />
//                 </a>
//                 <a href="images/5.jpg" data-lg-size="720x900" data-responsive="images/5-sm.jpg 375, images/5-sm.jpg 480, images/5-md.jpg 757">
//                     <img alt="img2" src="images/5.jpg" className="img-fluid" />
//                 </a>
                
//             </LightGallery>
//         </div>
//     );
// }


// export default ElGallery;