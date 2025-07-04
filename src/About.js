import React from 'react';
import './About.css';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Aashna Bhatia',
    role: 'President',
    image: '/images/AashnaPH.JPEG',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Aryan Baldua',
    role: 'Founder',
    image: '/images/KrishPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Yahia Kortam',
    role: 'Engineer/Marketing',
    image: '/images/YahiaPH.jpg',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Amulya Sanghani',
    role: 'Activities Lead',
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
    role: 'Pitch Advisor',
    description: 'No description yet, but description would show here.',
    image: '/images/BrettonPH.PNG',
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
    name: 'Vedika Baldua',
    role: 'Marketing',
    image: '/VedikaPH.jpg',
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


