'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getVideoConfig, handleVideoError, supportsNativeHLS } from '../../lib/videoConfig';
import styles from './VideoSlider.module.scss';


const VideoSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  // Ensure component only initializes on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Don't run on server side
    if (!isMounted) return;

    let mounted = true;
    const config = getVideoConfig();
    
    const initializeVideo = async () => {
      if (!videoRef.current || !mounted) return;

      const video = videoRef.current;
      const { MUX, HLS_CONFIG, VIDEO_ATTRIBUTES } = config;

      try {
        // Set video poster
        video.poster = MUX.POSTER_URL;

        // Check if browser supports HLS natively (Safari)
        if (supportsNativeHLS()) {
          video.src = MUX.STREAM_URL;
          video.addEventListener('loadeddata', () => {
            if (mounted) {
              setIsLoaded(true);
              video.play().catch(console.error);
            }
          });
          return;
        }

        // For other browsers, use HLS.js - only on client side
        if (typeof window !== 'undefined') {
          try {
            const { default: Hls } = await import('hls.js');
            
            if (Hls.isSupported()) {
              const hls = new Hls(HLS_CONFIG);
              hlsRef.current = hls;

              hls.loadSource(MUX.STREAM_URL);
              hls.attachMedia(video);

              hls.on(Hls.Events.MANIFEST_PARSED, () => {
                if (mounted) {
                  setIsLoaded(true);
                  video.play().catch(console.error);
                }
              });

              hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                  switch (data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                      console.log('Network error, trying to recover...');
                      hls.startLoad();
                      break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                      console.log('Media error, trying to recover...');
                      hls.recoverMediaError();
                      break;
                    default:
                      console.log('Fatal error, cannot recover');
                      if (mounted) setVideoError(true);
                      break;
                  }
                }
              });

              return () => {
                if (hls) hls.destroy();
              };
            } else {
              console.error('HLS is not supported in this browser');
              if (mounted) setVideoError(true);
            }
          } catch (importError) {
            console.error('Error importing HLS.js:', importError);
            if (mounted) setVideoError(true);
          }
        }
      } catch (error) {
        console.error('Error initializing video:', error);
        if (mounted) setVideoError(true);
      }
    };

    const timeoutId = setTimeout(initializeVideo, 100);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [isMounted]); // Add isMounted as dependency

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: 'easeOut'
      }
    }
  };

  // Don't render video on server side to prevent hydration issues
  if (!isMounted) {
    return (
      <section className={styles.heroContainer}>
        <div className={styles.videoWrapper}>
          <div className={styles.videoFallback}>
            <div className={styles.loadingSpinner}></div>
            <p className={styles.loadingText}>Loading video...</p>
          </div>
          <div className={styles.videoOverlay} />
        </div>
        <motion.div
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.heroContent}>
            <motion.div 
              className={styles.textContainer}
              variants={textVariants}
            >
              <motion.h1 
                className={styles.heroTitle}
                variants={textVariants}
              >
                Directed by 
                <span className={styles.titleAccent}> Love</span>
                <br />
                Captured by
                <span className={styles.titleAccent}> Us</span>
              </motion.h1>
              
              <motion.p 
                className={styles.heroSubtitle}
                variants={textVariants}
              >
                Bold emotions. Soft light. Real moments. We turn fleeting feelings into forever memories — all guided by your love story.
              </motion.p>
            </motion.div>

            <motion.div 
              className={styles.ctaContainer}
              variants={buttonVariants}
            >
              <button className={styles.primaryBtn}>
                View Portfolio
              </button>
              <button className={styles.secondaryBtn}>
                Book Session
              </button>
            </motion.div>
          </div>

          <motion.div 
            className={styles.scrollIndicator}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className={styles.scrollMouse}>
              <div className={styles.scrollWheel} />
            </div>
            <span className={styles.scrollText}>Scroll to explore</span>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className={styles.heroContainer}>
      {/* Video Background */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.backgroundVideo}
          onError={() => {
            console.error('Video element error');
            setVideoError(true);
          }}
        />
        
        {/* Loading state */}
        {!isLoaded && !videoError && (
          <div className={styles.videoFallback}>
            <div className={styles.loadingSpinner}></div>
            <p className={styles.loadingText}>Loading video...</p>
          </div>
        )}

        {/* Error state with gradient background */}
        {videoError && (
          <div className={styles.videoError}>
            <div className={styles.errorContent}>
              <h3>Video Unavailable</h3>
              <p>Content loading in progress</p>
            </div>
          </div>
        )}
        
        {/* Video Overlay for better text readability */}
        <div className={styles.videoOverlay} />
      </div>

      {/* Content Overlay */}
      <motion.div
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.textContainer}
            variants={textVariants}
          >
            <motion.h1 
              className={styles.heroTitle}
              variants={textVariants}
            >
              Directed by 
              <span className={styles.titleAccent}> Love</span>
              <br />
              Captured by
              <span className={styles.titleAccent}> Us</span>
            </motion.h1>
            
            <motion.p 
              className={styles.heroSubtitle}
              variants={textVariants}
            >
              Bold emotions. Soft light. Real moments. We turn fleeting feelings into forever memories — all guided by your love story.
            </motion.p>
          </motion.div>

          <motion.div 
            className={styles.ctaContainer}
            variants={buttonVariants}
          >
            <button className={styles.primaryBtn}>
              View Portfolio
            </button>
            <button className={styles.secondaryBtn}>
              Book Session
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSlider;