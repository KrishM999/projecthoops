import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

// Preload images for faster hero image display
const heroImages = [
  "/images/KEV_6811.jpg",
  "/images/KEV_6841.jpg",
  "/images/KEV_6901.jpg",
  "/images/KEV_6854.jpg",
  "/images/KEV_6934.jpg",
  "/images/KEV_6963.jpg",
  "/images/KEV_6995.jpg",
  "/images/KEV_7007.jpg",
  "/images/KEV_7054.jpg",
  "/images/KEV_7079.jpg",
  "/images/KEV_7148.jpg",
  "/images/KEV_7242.jpg",
  "/images/KEV_7243.jpg"
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
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
      const duration = 2800; // Changing comments with a 2.8 second delay for smoother effect
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
      <div className="hero-container" style={{position: 'relative', height: '100vh'}}>
        {/* Cross-fade hero images */}
        {heroImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="hero"
            loading="lazy"
            className={`hero-fade-image${heroIndex === idx ? ' visible' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: heroIndex === idx ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
            }}
          />
        ))}
        <div style={{position: 'relative', zIndex: 1, width: '100%'}}>
          <h1 className="hero-heading">
            Project Hoops is a community-focused nonprofit.
          </h1>

          <p className="hero-subtext">
            We organize annual basketball tournaments to unite players and promote youth empowerment across the Bay Area.
          </p>

          <div className="button-wrapper">
            <Link to="/signup">
              <button className="signup-btn">
                Sign Up Now <span className="ml-2">→</span>
              </button>
            </Link>
            <a href="https://www.gofundme.com/f/help-vt-seva-provide-for-unprivileged-kids?utm_campaign=natman_sharesheet_dash&utm_medium=customer&utm_source=copy_link&attribution_id=sl:f1817a51-c678-48c6-b06f-6e85d4d302b4" target="_blank" rel="noopener noreferrer">
              <button className="signup-btn" style={{ marginLeft: '12px' }}>
                Support Us
              </button>
            </a>
          </div>
        </div>
      </div>

      

      {/* Interactive Fundraising Slider */}
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

              {/* Stats Grid */}
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
                  <div className="stat-value stat-value-large">400+ </div>
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
    </div>
  );
}
