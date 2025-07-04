import React from 'react';
import './About.css';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Yahia Kortam',
    role: 'No role yet',
    description: 'No description yet, but description would show here.',
    image: '/images/YahiaPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Amulya',
    role: 'No role yet',
    description: 'No description yet, but description would show here.',
    image: '/images/AmulyaPH.jpeg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Krish',
    role: 'No role yet',
    description: 'No description yet, but description would show here.',
    image: '/images/KrishPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Bretton',
    role: 'No role yet',
    description: 'No description yet, but description would show here.',
    image: '/images/BrettonPH.PNG',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Eesha',
    role: 'No role yet',
    description: 'No description yet, but description would show here.',
    image: '/images/EeshaPH.JPEG',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
];

const About = () => {
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
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-description">{member.description}</p>
            <div className="team-member-social">
              <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={member.social.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


