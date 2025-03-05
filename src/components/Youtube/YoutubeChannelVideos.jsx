'use client';

import { useEffect, useState } from 'react';
import styles from './YouTubeVideos.module.css';

const YOUTUBE_API_KEY = 'AIzaSyBH4JDT2kfw3g2nQ_SOkZjc2gXqt2KtBZc'; // Replace with your API key
const CHANNEL_NAME = '@jayesh_photography'; // Replace with your desired channel name

const fetchChannelId = async (channelName) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=id&type=channel&q=${encodeURIComponent(channelName)}&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items?.[0]?.id?.channelId;
};

const fetchVideos = async (channelId) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=8&order=date&type=video&key=${YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items;
};

export default function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const channelId = await fetchChannelId(CHANNEL_NAME);
        if (!channelId) {
          throw new Error('Channel not found');
        }
        const videoData = await fetchVideos(channelId);
        setVideos(videoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  if (loading) return <p className={styles.loading}>Loading videos...</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Videos</h2>
      <div className={styles.grid}>
        {videos.map((video) => (
          <div key={video.id.videoId} className={styles.videoCard}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
              className={styles.video}
            ></iframe>
            <div className={styles.videoTitle}>
              <h3>{video.snippet.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
