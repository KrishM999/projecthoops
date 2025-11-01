import React from 'react';
import './About.css';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Vedika Baldua',
    role: 'President',
    image: '/VedikaPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  
  {
    name: 'Aryan Baldua',
    role: 'Founder',
    image: '/images/AryanPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Yahia Kortam',
    role: 'Media & Web Engineer',
    image: '/images/YahiaPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Amulya Sanghani',
    role: 'Events & Partnerships Manager',
    description: 'No description yet, but description would show here.',
    image: '/images/AmulyaPH.jpeg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Bretton Lam',
    role: 'Operations and Logistics Manager',
    description: 'No description yet, but description would show here.',
    image: '/images/BrettonPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Eesha Muttineni',
    role: 'Volunteer Coordination',
    description: 'No description yet, but description would show here.',
    image: '/images/EeshaPH.JPEG',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Aashna Bhatia',
    role: 'Digital Media Coordinator',
    image: '/images/AashnaPH.JPEG',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Saanvi Gunukula',
    role: 'Finance & Budgeting Analyst',
    image: '/images/SaanviPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Maya Phadke',
    role: 'Finance Coordinator',
    image: '/images/MayaPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
];

const About = () => {
  const [imageErrors, setImageErrors] = React.useState({});

  const handleImageError = (memberName, e) => {
    console.error(`Failed to load image for ${memberName}:`, e.target.src);
    setImageErrors(prev => ({
      ...prev,
      [memberName]: true
    }));
  };

  const handleImageLoad = (memberName, e) => {
    // Verify image loaded successfully by checking natural dimensions
    if (e.target.naturalWidth === 0 || e.target.naturalHeight === 0) {
      console.error(`Corrupted image detected for ${memberName}:`, e.target.src);
      setImageErrors(prev => ({
        ...prev,
        [memberName]: true
      }));
    } else {
      // Image loaded successfully, remove from error state if it was there
      setImageErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[memberName];
        return newErrors;
      });
    }
  };

  return (
    <div className="about-container">
      <h1 className="about-title">Meet Our Team</h1>
      <p className="about-description">
        Project Hoops started with an idea to create a platform for basketball enthusiasts to connect and 
        share their love for the sport. Our team is dedicated to providing a space where players can find 
        opportunities to play, improve, and grow.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            {imageErrors[member.name] ? (
              <div className="team-member-image team-member-image-placeholder" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e2e8f0',
                color: '#64748b',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {member.name.charAt(0)}
              </div>
            ) : (
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-member-image" 
                onError={(e) => handleImageError(member.name, e)}
                onLoad={(e) => handleImageLoad(member.name, e)}
                loading="lazy"
              />
            )}
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


