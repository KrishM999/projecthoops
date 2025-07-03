import React from 'react';
import './About.css';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    description: 'Passionate about youth development and basketball, John founded Project Hoops to create a positive impact in the community.',
    image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=John+Doe',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Operations Lead',
    description: 'With a background in event management, Jane ensures smooth operations for all Project Hoops tournaments and initiatives.',
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Jane+Smith',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Peter Jones',
    role: 'Community Outreach',
    description: 'Peter is dedicated to building strong community partnerships and expanding Project Hoops reach to more youth.',
    image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Peter+Jones',
    social: {
      github: '#',
      linkedin: '#',
      email: '#',
    },
  },
  {
    name: 'Alice Brown',
    role: 'Marketing & Communications',
    description: 'Alice handles all communications and marketing efforts, ensuring Project Hoops message reaches a wider audience.',
    image: 'https://via.placeholder.com/150/FFFF00/000000?text=Alice+Brown',
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


