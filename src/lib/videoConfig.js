// lib/videoConfig.js

export const VIDEO_CONFIG = {
  // Your Mux configuration
  MUX: {
    PLAYBACK_ID: 'Sew019olSlSDF4ryv01JVMw4saiYIYMDeETAwbHt7blGw',
    get STREAM_URL() {
      return `https://stream.mux.com/${this.PLAYBACK_ID}.m3u8`;
    },
    get THUMBNAIL_URL() {
      return `https://image.mux.com/${this.PLAYBACK_ID}/thumbnail.jpg`;
    },
    get POSTER_URL() {
      return `https://image.mux.com/${this.PLAYBACK_ID}/thumbnail.jpg?width=1920&height=1080&fit_mode=smartcrop`;
    }
  },

  // HLS.js configuration for optimal streaming
  HLS_CONFIG: {
    enableWorker: false,
    lowLatencyMode: false,
    backBufferLength: 90,
    maxBufferLength: 30,
    maxMaxBufferLength: 600,
    startLevel: -1,
    capLevelToPlayerSize: true,
    debug: process.env.NODE_ENV === 'development',
    xhrSetup: function (xhr, url) {
      // Add any custom headers if needed
      xhr.setRequestHeader('User-Agent', 'Custom Video Player');
    },
  },

  // Video element attributes
  VIDEO_ATTRIBUTES: {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: 'metadata',
    controls: false,
    disablePictureInPicture: true,
    disableRemotePlayback: true,
  },

  // Error retry configuration
  RETRY_CONFIG: {
    maxRetries: 3,
    retryDelay: 1000,
    backoffMultiplier: 2,
  },
};

// Utility function to get video configuration based on environment
export const getVideoConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';

  return {
    ...VIDEO_CONFIG,
    HLS_CONFIG: {
      ...VIDEO_CONFIG.HLS_CONFIG,
      debug: isDevelopment,
      // Disable worker in development for easier debugging
      enableWorker: isProduction,
    },
  };
};

// Utility function to handle video errors
export const handleVideoError = (error, retryCallback, maxRetries = 3) => {
  console.error('Video Error:', error);
  
  if (error.retryCount < maxRetries) {
    const delay = VIDEO_CONFIG.RETRY_CONFIG.retryDelay * 
                  Math.pow(VIDEO_CONFIG.RETRY_CONFIG.backoffMultiplier, error.retryCount);
    
    setTimeout(() => {
      retryCallback();
    }, delay);
  } else {
    console.error('Max retries reached, video failed to load');
  }
};

// Utility to check if browser supports HLS natively
export const supportsNativeHLS = () => {
  const video = document.createElement('video');
  return video.canPlayType('application/vnd.apple.mpegurl');
};

// Utility to check if HLS.js is supported
export const supportsHLSJS = async () => {
  try {
    const { default: Hls } = await import('hls.js');
    return Hls.isSupported();
  } catch {
    return false;
  }
};