import React from 'react';
import styles from './AboutUS.module.css';

const AboutUS = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>
            Capturing life's most precious moments through the lens of artistry and emotion
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img 
            src="/images/a16.jpg" 
            alt="Studio Portrait" 
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentGrid}>
          {/* Our Philosophy */}
          <div className={styles.philosophySection}>
            <div className={styles.philosophyImage}>
              <img 
                src="/images/a52.jpg" 
                alt="Our Philosophy" 
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.textBlock}>
              <h2 className={styles.sectionTitle}>Our Philosophy</h2>
              <p className={styles.bodyText}>
                Photography is more than capturing images—it's about preserving emotions, 
                telling stories, and creating timeless memories. We believe every frame should 
                evoke feeling and every session should be an experience worth remembering.
              </p>
            </div>
          </div>

          {/* Image Block */}
          <div className={styles.imageBlock}>
            <img 
              src="/images/a23.jpg" 
              alt="Behind the Scenes" 
              className={styles.fullWidthImage}
            />
          </div>

          {/* Experience Section */}
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <h3 className={styles.cardTitle}>10+</h3>
              <p className={styles.cardText}>Years of Experience</p>
            </div>
            <div className={styles.experienceCard}>
              <h3 className={styles.cardTitle}>500+</h3>
              <p className={styles.cardText}>Happy Clients</p>
            </div>
            <div className={styles.experienceCard}>
              <h3 className={styles.cardTitle}>15+</h3>
              <p className={styles.cardText}>Awards Won</p>
            </div>
          </div>

          {/* About Text */}
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>The Journey</h2>
            <p className={styles.bodyText}>
              Founded in 2014, our studio began as a passion project between two friends 
              who shared an obsession with perfect lighting and authentic moments. What started 
              in a small converted garage has grown into a full-service photography studio 
              specializing in weddings, portraits, and commercial work.
            </p>
            <p className={styles.bodyText}>
              Our approach combines technical excellence with genuine human connection. 
              We don't just take photos—we craft visual narratives that stand the test of time. 
              Every client receives our full attention, creativity, and commitment to excellence.
            </p>
          </div>

          {/* Founder Section */}
          <div className={styles.founderSection}>
            <div className={styles.founderContent}>
              <div className={styles.founderImage}>
                <img 
                  src="/images/about.jpg" 
                  alt="Jayesh Khaturia - Founder" 
                  className={styles.founderImagePhoto}
                />
              </div>
              <div className={styles.founderText}>
                <h2 className={styles.sectionTitle}>Meet Our Founder</h2>
                <h3 className={styles.founderName}>Jayesh Khaturia</h3>
                <p className={styles.bodyText}>
                  The visionary behind our lens, Jayesh Khaturia brings over a decade of 
                  passionate storytelling to every frame. His journey began with a simple 
                  love for capturing candid moments, which evolved into mastering the art 
                  of wedding photography and cinematic storytelling.
                </p>
                <p className={styles.bodyText}>
                  Jayesh's keen eye for detail and ability to find beauty in every moment 
                  has made him one of the most sought-after photographers in the industry. 
                  His dedication to perfection and genuine care for each client's story 
                  sets the foundation for everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Locations Section */}
          <div className={styles.locationsSection}>
            <h2 className={styles.sectionTitle}>Exotic Destinations</h2>
            <p className={styles.bodyText}>
              We've had the privilege of capturing love stories at some of the world's most 
              breathtaking locations and luxury venues. From royal palaces to tropical paradises, 
              we bring the same level of excellence wherever your story takes us.
            </p>
            <div className={styles.locationsList}>
              <div className={styles.locationCard}>
                <h4 className={styles.locationName}>Fateh Prakash Palace</h4>
                <p className={styles.locationDetail}>Udaipur, India</p>
              </div>
              <div className={styles.locationCard}>
                <h4 className={styles.locationName}>Radisson Blu</h4>
                <p className={styles.locationDetail}>Udaipur, India</p>
              </div>
              <div className={styles.locationCard}>
                <h4 className={styles.locationName}>Hilton Hotel</h4>
                <p className={styles.locationDetail}>Bali, Indonesia</p>
              </div>
              <div className={styles.locationCard}>
                <h4 className={styles.locationName}>Luxury Resorts</h4>
                <p className={styles.locationDetail}>Bahrain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>What We Do</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a5.jpg" 
                alt="Wedding Photography" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Wedding Photography</h3>
              <p className={styles.serviceText}>
                Documenting your special day with elegance and artistic vision
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a37.jpg" 
                alt="Pre-Wedding Shoots" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Pre-Wedding Shoots</h3>
              <p className={styles.serviceText}>
                Romantic sessions that capture your love story before the big day
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a7.jpg" 
                alt="Cinematography" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Cinematography</h3>
              <p className={styles.serviceText}>
                Cinematic wedding films that bring your memories to life
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a8.jpg" 
                alt="Drone Shoots" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Drone Shoots</h3>
              <p className={styles.serviceText}>
                Breathtaking aerial perspectives for truly unique coverage
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a50.jpg" 
                alt="Portrait Sessions" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Portrait Sessions</h3>
              <p className={styles.serviceText}>
                Personal and family portraits that capture authentic connections
              </p>
            </div>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.serviceImageContainer}>
              <img 
                src="/images/a56.jpg" 
                alt="Bridal Photography" 
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>Bridal Photography</h3>
              <p className={styles.serviceText}>
                Your dream bridal look, captured with finesse and emotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Create Something Beautiful?</h2>
          <p className={styles.ctaText}>
            Let's discuss how we can bring your vision to life
          </p>
          <button className={styles.ctaButton}><a href="/Contact" style={{textDecoration: 'none'}} >Get In Touch</a></button>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;