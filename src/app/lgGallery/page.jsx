"use client"
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function ElGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="images/1.jpg">
                    <img alt="img1" src="images/1.jpg" />
                </a>
                <a href="images/2.jpg">
                    <img alt="img2" src="images/2.jpg" />
                </a>

                <a href="images/3.jpg">
                    <img alt="img2" src="images/3.jpg" />
                </a>

                <a href="images/4.jpg">
                    <img alt="img2" src="images/4.jpg" />
                </a>

                <a href="images/5.jpg">
                    <img alt="img2" src="images/5.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}

export default ElGallery;