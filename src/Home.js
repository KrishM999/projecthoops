import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Instagram, ArrowRight, Users, Trophy, Target, Heart } from "lucide-react";

// Hero images including the new provided photos
const heroImages = [
  "/images/IMG_5724.JPG",
  "/images/IMG_5726.JPG", 
  "/images/IMG_5727.JPG",
  "/images/IMG_5728.JPG",
  "/images/KEV_6811-min.jpg",
  "/images/KEV_6841-min.jpg",
  "/images/KEV_6901-min.jpg",
  "/images/KEV_6854-min.jpg",
  "/images/KEV_6934-min.jpg",
  "/images/KEV_6963-min.jpg",
  "/images/KEV_6995-min.jpg",
  "/images/KEV_7007-min.jpg",
  "/images/KEV_7054-min.jpg",
  "/images/KEV_7079-min.jpg",
  "/images/KEV_7148-min.jpg",
  "/images/KEV_7242-min.jpg",
  "/images/KEV_7243-min.jpg"
];

// Preload only the first hero image for instant display
const preloadImg = new window.Image();
preloadImg.src = heroImages[0];

export default function Home() {
  const [raisedAmount, setRaisedAmount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef();

  // --- HERO IMAGE FADE ---
  const [heroIndex, setHeroIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([false, ...Array(heroImages.length - 1).fill(false)]);

  // Preload the first image on mount
  useEffect(() => {
    const img = new window.Image();
    img.src = heroImages[0];
    img.onload = () => {
      setLoadedImages((prev) => {
        const updated = [...prev];
        updated[0] = true;
        return updated;
      });
    };
  }, []);

  // Preload the next image in the sequence
  useEffect(() => {
    const nextIndex = (heroIndex + 1) % heroImages.length;
    if (!loadedImages[nextIndex]) {
      const img = new window.Image();
      img.src = heroImages[nextIndex];
      img.onload = () => {
        setLoadedImages((prev) => {
          const updated = [...prev];
          updated[nextIndex] = true;
          return updated;
        });
      };
    }
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroIndex, loadedImages]);
  // --- END HERO IMAGE FADE ---

  const targetAmount = 82000;
  const goalAmount = 135000;

  const containerStyle = {
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    margin: "20px auto",
    width: "100%",
    maxWidth: "1500px",
    height: "auto",
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("fundraising-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = null;
      const duration = 2800;
      const startAmount = 0;
      const endAmount = targetAmount;

      function easeInOut(t) {
        return t < 0.5
          ? 2 * t * t
          : -1 + (4 - 2 * t) * t;
      }
      function animateAmount(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const linearProgress = Math.min(elapsed / duration, 1);
        const progress = easeInOut(linearProgress);
        const current = Math.round(startAmount + (endAmount - startAmount) * progress);
        setRaisedAmount(current);
        if (linearProgress < 1) {
          animationRef.current = requestAnimationFrame(animateAmount);
        } else {
          setRaisedAmount(endAmount);
        }
      }
      animationRef.current = requestAnimationFrame(animateAmount);
      return () => cancelAnimationFrame(animationRef.current);
    }
  }, [isVisible, targetAmount]);

  const progressPercentage = (raisedAmount / goalAmount) * 100;

  return (
    <div style={containerStyle}>
      {/* Hero Section with Dark Overlay */}
      <div className="hero-container" style={{position: 'relative', height: '100vh'}}>
        {/* Cross-fade hero images */}
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Project Hoops Basketball Tournament"
            loading="lazy"
            className={`hero-fade-image${heroIndex === idx && loadedImages[idx] ? ' visible' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: heroIndex === idx && loadedImages[idx] ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
              background: '#1a1a1a',
            }}
          />
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-heading animate-fade-in">
            Project Hoops is a community-focused nonprofit.
          </h1>

          <p className="hero-subtext animate-fade-in-delay">
            We organize annual basketball tournaments to unite players and promote youth empowerment across the Bay Area.
          </p>

          <div className="button-wrapper animate-fade-in-delay-2">
            <Link to="/signup">
              <button className="signup-btn modern-btn">
                Sign Up Now <ArrowRight className="btn-icon" />
              </button>
            </Link>
            <a href="https://www.gofundme.com/f/help-vt-seva-provide-for-unprivileged-kids?utm_campaign=natman_sharesheet_dash&utm_medium=customer&utm_source=copy_link&attribution_id=sl:f1817a51-c678-48c6-b06f-6e85d4d302b4" target="_blank" rel="noopener noreferrer">
              <button className="signup-btn modern-btn secondary">
                Support Us <Heart className="btn-icon" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Users size={32} />
              </div>
              <h3>Community & Impact</h3>
              <p>Uniting diverse players through basketball to create positive social change and foster community spirit.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={32} />
              </div>
              <h3>Youth Empowerment</h3>
              <p>Providing opportunities for young athletes to develop skills, build confidence, and achieve excellence on and off the court.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Trophy size={32} />
              </div>
              <h3>Growth & Development</h3>
              <p>Promoting competitive spirit, sportsmanship, and teamwork to nurture holistic growth in every participant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fundraising Section */}
      <section id="fundraising-section" className="fundraising-section">
        <div className="fundraising-card">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="fund-title">Project Hoops Fundraiser</h2>
              <p className="fund-desc">
                Help us reach our goal to expand basketball programs and youth development initiatives across the Bay Area and India.
              </p>
            </div>

            <div className="space-y-6">
              {/* Amount Display */}
              <div className="text-center">
                <div className="amount amount-large">${raisedAmount.toLocaleString()}</div>
                <div className="goal-desc">raised of ${goalAmount.toLocaleString()} goal</div>
              </div>

              {/* Progress Bar */}
              <div className="progress-bar-section">
                <div className="progress-percent-center">{Math.round(progressPercentage)}% Complete</div>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar smoother-progress"
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="progress-bar-shimmer"></div>
                  </div>
                </div>
                <div className="progress-labels">
                  <span>$0</span>
                  <span>${goalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="stats-grid">
                <div className="stat-card stat-blue stat-large">
                  <div className="stat-value stat-value-large">225+</div>
                  <div className="stat-label stat-label-large">Youth Provided Education, Housing, and Food</div>
                </div>
                <div className="stat-card stat-purple stat-large">
                  <div className="stat-value stat-value-large">4</div>
                  <div className="stat-label stat-label-large">Tournaments Held</div>
                </div>
                <div className="stat-card stat-green stat-large">
                  <div className="stat-value stat-value-large">400+</div>
                  <div className="stat-label stat-label-large">Players Participated</div>
                </div>
              </div>

              {/* Call to Action */}
              <div style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                  <a
                    href="https://www.instagram.com/project_hoops_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    style={{ flex: 1 }}
                  >
                    <button className="cta-btn cta-btn-gradient flex items-center justify-center gap-2" style={{ width: '100%' }}>
                      Follow Us
                      <Instagram className="w-5 h-5 ml-3 group-hover:animate-bounce" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VT SEVA Section */}
      <section className="vt-seva-section">
        <div className="vt-seva-container">
          <h2 className="section-title">Why VT SEVA?</h2>
          <p className="vt-seva-description">
            VT SEVA is our partner organization dedicated to providing education, housing, and essential resources 
            to underprivileged children. Through Project Hoops, we channel the spirit of basketball into meaningful 
            social impact, creating opportunities for youth both on and off the court.
          </p>
          <a 
            href="https://www.vtsworld.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="vt-seva-link"
          >
            Learn More About VT SEVA <ArrowRight className="btn-icon" />
          </a>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section className="photo-carousel-section">
        <div className="carousel-container">
          <h2 className="section-title">Tournament Highlights</h2>
          <div className="photo-grid">
            {heroImages.slice(0, 6).map((image, index) => (
              <div key={index} className="photo-card">
                <img src={image} alt={`Tournament moment ${index + 1}`} className="carousel-image" />
                <div className="photo-overlay">
                  <p className="photo-caption">Tournament Action</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



