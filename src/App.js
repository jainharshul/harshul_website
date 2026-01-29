import React, { useState } from 'react';
import '98.css';
import './App.css'; // Import your CSS file for custom styles
import icon1 from './icon5.png';
import icon2 from './telephone.png';
import icon3 from './icon3.png';
import icon4 from './resume.png';
import icon5 from './trash.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
import icon8 from './aboutme.jpg';
import emailIcon from './emailicon.png';
import discordIcon from './discordicon.png';
import linkedinIcon from './linkdinicon.png';
import githubIcon from './giticon.png';
import centeredImage from './98.png';

function App() {
  const [windows, setWindows] = useState([]);
  const windowWidth = 500;
  const windowHeight = 700;
  const leftMargin = 100;
  const openWindow = (title, content) => {
    const newWindow = { title, content, position: getRandomPosition() };
    setWindows([...windows, newWindow]);
  };

  const closeWindow = (title) => {
    setWindows(windows.filter(window => window.title !== title));
  };

  // Function to generate random position within the screen
  const getRandomPosition = () => {
    const maxX = window.innerWidth - windowWidth;
    const maxY = window.innerHeight - windowHeight;
    const randomX = Math.floor(Math.random() * (maxX - leftMargin) + leftMargin);
    const randomY = Math.floor(Math.random() * maxY);
    return { x: randomX, y: randomY };
  };

  return (
    <div className="desktop">
      <img src={centeredImage} alt="Centered" className="centered-image" />
      {windows.map((window, index) => (
        <Window key={index} title={window.title} content={window.content} position={window.position} onClose={closeWindow} setWindows={setWindows} windows={windows} />
      ))}
      <div className="icons-wrapper">
        <div className="icons-container">
          <div className="icon-wrapper" onClick={() => openWindow('Experience', <ExperienceWindow />)}>
            <img src={icon1} alt="Experience Icon" />
            <div className="icon-text">Experience</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Contact', <ContactsWindow />)}>
            <img src={icon2} alt="Contacts Icon" />
            <div className="icon-text">Contact</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Projects', <ProjectsWindow />)}>
            <img src={icon3} alt="Projects Icon" />
            <div className="icon-text">Projects</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Resume', <ResumeWindow />)}>
            <img src={icon4} alt="Icon4" />
            <div className="icon-text">Resume</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('About', <AboutWindow />)}>
            <img src={icon5} alt="Icon5" />
            <div className="icon-text">About Me</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Awards & Certs.', <AwardWindow />)}>
            <img src={icon6} alt="Icon6" />
            <div className="icon-text">Awards</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Languages', <LanguageWindow />)}>
            <img src={icon7} alt="Icon7" />
            <div className="icon-text">Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Window({ title, content, position, onClose, setWindows, windows }) {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
    setIsDragging(true);

    const handleMouseMove = (e) => {
      if (isDragging) {
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;
        setWindows((prevWindows) =>
          prevWindows.map((prevWindow) =>
            prevWindow.title === title ? { ...prevWindow, position: { x: newX, y: newY } } : prevWindow
          )
        );
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="window" style={{ top: position.y, left: position.x }}>
      <div className="title-bar" onMouseDown={handleMouseDown}>
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => onClose(title)}></button>
        </div>
      </div>
      <div className="window-body">{content}</div>
    </div>
  );
}

function ExperienceWindow() {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="experience-list">
        <li>
          <strong>Bachelors in Computer Science at CSUF</strong>
        </li>
        <li>
          <strong>MCS w/ Concentration in Big Data Systems</strong>
        </li>
        <li>
  <strong>Vertex Plus Ltd — Python AI Intern</strong><br />
  Jun 2023 – Oct 2023<br />
  • Built and deployed automated web-scraping pipelines processing data from 50+ sources, reducing manual data collection time by 80%<br />
  • Developed full-stack data ingestion and visualization tools using Python, Django, Flask, and BeautifulSoup4<br />
  • Optimized AI preprocessing scripts in Python and MATLAB to handle 1M+ records, improving model training efficiency by 30%
</li>

<li>
  <strong>CSUF — AI & Data Science Intern</strong><br />
  Jun 2022 – Jul 2022<br />
  • Designed a Student Adaptability prediction model achieving 82% accuracy using Python and machine learning techniques<br />
  • Built end-to-end ML pipelines with feature engineering, statistical analysis, and model evaluation<br />
  • Presented insights to faculty, influencing curriculum planning for 500+ students
</li>

<li>
  <strong>CSUF — Engineering & Computer Science Inter-Club Council</strong><br />
  Aug 2022 – Apr 2023<br />
  • Coordinated 15+ CS and Engineering clubs and organized 10+ technical workshops<br />
  • Taught hands-on Python workshops to 100+ students, increasing attendance by 25%
</li>

<li>
  <strong>GAO Tech — Virtual Technology Intern</strong><br />
  Aug 2021 – Dec 2021<br />
  • Collaborated with international teams to organize 3+ global virtual conferences with 200+ attendees<br />
  • Built responsive web pages and technical datasheets using HTML, CSS, and C++
</li>
      </ul>
    </div>
  );
}

function ContactsWindow() {
  return (
    <div>
      <h2>Get In Touch</h2>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/harshul-jain-245244217/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/jainharshul" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:harshuljainwork@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://discord.gg/HndkWBJhnH" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </div>
  );
}

function ProjectsWindow() {
  return (
    <div>
      <h2>My Projects</h2>
      <ul className="projects-list">
        <li>
          <strong>Irvine Tennis Badminton Shop Mockup</strong><br />
          Developed a customer management application using Flask, a Python web framework, to create a user-friendly interface for submitting and managing customer details. Implemented features such as generating unique IDs, updating customer information, and marking completed customers. Demonstrated proficiency in full-stack web development, data storage, and backend programming techniques.
        </li>
        <li>
          <strong>SLAKR</strong><br />
          Created a task management app using SwiftUI to track and organize daily tasks. Implemented features such as adding tasks, deleting tasks, and clearing all tasks. Designed an intuitive user interface with a background image and interactive buttons. Showcased skills in iOS app development, UI/UX design, and data persistence.
        </li>
        <li>
          <strong>Student-Adaptability AI</strong><br />
          Implemented an Artificial Intelligence model using Python to perform sentiment analysis on text data. Utilized Natural Language Processing techniques to analyze and classify text as positive, negative, or neutral. Preprocessed the data by tokenizing, removing stop words, and applying feature extraction. Trained a machine learning model using the processed data to accurately classify sentiment. Demonstrated proficiency in NLP, machine learning, and data preprocessing techniques.
        </li>
        <li>
          <strong>College Database</strong><br />
          Developed a mock college database system using HTML and PHP. Created an index.html file for user interface, along with 4 PHP files for handling database queries. Implemented functionalities to retrieve and display information such as course sections, enrolled students, professors, and more. Demonstrated proficiency in HTML, PHP, and database management for creating a functional and interactive mock college database system, along with a student and professor access portal.
        </li>
      </ul>
    </div>
  );
}

function ResumeWindow() {
  return (
    <div>
      <h2> <a href="https://drive.google.com/file/d/1uL_rmbhSNIrb7wXx3orXV1sTdiMUdreo/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></h2>
      <p>Click above to download...</p>
    </div>
  );
}

function AboutWindow() {
  return (
    <div>
      <div className="about-content">
        <img src={icon8} alt="Your Name" className="profile-picture" />
        <div className="text-content">
          <h2>My Life</h2>
          <p>I have a Bachelors in Computer Science from CSUF. I am pursuing a MSC with a concentration in Big Data Systems at ASU. I am extremely driven and motivated. </p>
          <p>while (free) &#123; </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;skate(); </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;badminton(); </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;cook(); </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;snowboard(); </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;video_games(); </p>
          <p>&#125;</p>
          
        </div>
      </div>
    </div>
  );
}

function AwardWindow() {
  return (
    <div>
      <h2>Awards and Certifications</h2>
      <ul className="awards-list">
        <li className="award">Tuffy Hacks Hackathon Winner</li>
        <li className="award">CP 1 - Precision Exams</li>
        <li className="award">CP IB Java - Precision Exams</li>
        <li className="certification">C++ Certification - Free Code Camp</li>
        <li className="certification">Python Certification - Free Code Camp</li>
        <li className="certification">HTML Certification - Free Code Camp</li>
      </ul>
    </div>
  );
}

function LanguageWindow() {
  const languages = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "R-Studio/R",
    "Swift/Swift UI",
    "Flask",
    "Fast-Api",
    "SQL",
    "FireBase",
    

  ];

  const halfLength = Math.ceil(languages.length / 2);
  const firstHalf = languages.slice(0, halfLength);
  const secondHalf = languages.slice(halfLength);

  return (
    <div>
      <h2>Languages</h2>
      <div className="language-columns">
        <ul className="language-column">
          {firstHalf.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <ul className="language-column">
          {secondHalf.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default App;