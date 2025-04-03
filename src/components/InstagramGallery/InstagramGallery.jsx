// InstagramGallery.jsx
import { useState, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import styles from './InstagramGallery.module.css';

export default function InstagramGallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Example post URLs - in a real implementation, you would fetch these
  // Note: Since direct API access requires authentication, this example uses hardcoded URLs
  // In production, you'd want to fetch these from your backend with proper Instagram API integration
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulating fetch - in production you would call your backend API
        // that handles Instagram API authentication and fetching
        setTimeout(() => {
          // These would normally come from an API
          const examplePostUrls = [
            'https://www.instagram.com/p/DEhlEzRSZS-/',
            'https://www.instagram.com/p/DBWN10sNuZf/',
            'https://www.instagram.com/p/C_5ikspyHaE/',
            'https://www.instagram.com/p/C-NUgu2vWSm/',
            'https://www.instagram.com/p/C6OX_XgLdZK/',
            'https://www.instagram.com/p/Cx798HvrJhQ/'
          ];
          setPosts(examplePostUrls);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className={styles.loadingContainer}>Loading Instagram posts...</div>;
  }

  if (error) {
    return <div className={styles.errorContainer}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instagram Gallery</h2>
      <p className={styles.profileLink}>
        <a href="https://www.instagram.com/jayeshphotography/?hl=en" target="_blank" rel="noopener noreferrer">
          @jayeshphotography
        </a>
      </p>
      
      <div className={styles.gallery}>
        {posts.map((postUrl, index) => (
          <div key={index} className={styles.post}>
            <InstagramEmbed url={postUrl} width="100%" />
          </div>
        ))}
      </div>

      <div className={styles.button}><button ><a href="https://www.instagram.com/jayeshphotography/?hl=en" target="_blank" rel="noopener noreferrer">
          View More
        </a></button></div>
    </div>
  );
}