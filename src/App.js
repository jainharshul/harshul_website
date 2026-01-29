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
          <div className="icon-wrapper" onClick={() => openWindow('Publications & Awards', <AwardWindow />)}>
            <img src={icon6} alt="Icon6" />
            <div className="icon-text">Publications/Awards</div>
          </div>
          <div className="icon-wrapper" onClick={() => openWindow('Skills', <LanguageWindow />)}>
            <img src={icon7} alt="Icon7" />
            <div className="icon-text">Skills</div>
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

function ExperienceWindow() {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="experience-list">

        <li>
          <strong>
            <a
              href="https://vertexplus.com"
              target="_blank"
              rel="noreferrer"
            >
              Vertex Plus Ltd — Python AI Intern
            </a>
          </strong><br />
          <span className="date">Jun 2023 – Oct 2023</span><br />
          • Built and deployed automated web-scraping pipelines processing data from 50+ sources, reducing manual collection time by 80%<br />
          • Developed full-stack data ingestion and visualization tools using Python, Django, Flask, and BeautifulSoup4<br />
          • Optimized AI preprocessing pipelines in Python and MATLAB to handle 1M+ records, improving training efficiency by 30%
        </li>

        <li>
          <strong>
            <a
              href="https://www.fullerton.edu"
              target="_blank"
              rel="noreferrer"
            >
              CSUF — AI & Data Science Intern
            </a>
          </strong><br />
          <span className="date">Jun 2022 – Jul 2022</span><br />
          • Designed a Student Adaptability prediction model achieving 82% accuracy using machine learning techniques<br />
          • Built end-to-end ML pipelines with feature engineering, statistical analysis, and model evaluation<br />
          • Presented data-driven insights to faculty, influencing curriculum planning for 500+ students
        </li>

        <li>
          <strong>
            <a
              href="https://www.fullerton.edu"
              target="_blank"
              rel="noreferrer"
            >
              CSUF — Engineering & Computer Science Inter-Club Council
            </a>
          </strong><br />
          <span className="date">Aug 2022 – Apr 2023</span><br />
          • Coordinated 15+ Computer Science and Engineering clubs and organized 10+ technical workshops<br />
          • Led hands-on Python workshops for 100+ students, increasing attendance by 25%
        </li>

        <li>
          <strong>
            <a
              href="https://gaotek.com"
              target="_blank"
              rel="noreferrer"
            >
              GAO Tech — Virtual Technology Intern
            </a>
          </strong><br />
          <span className="date">Aug 2021 – Dec 2021</span><br />
          • Collaborated with international teams to organize 3+ global virtual conferences with 200+ attendees<br />
          • Built responsive web pages and technical datasheets using HTML, CSS, and C++<br />
          • Integrated AI-powered chat support, reducing client response time by 40%
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

      {/* Publications */}
      <h3>Publications</h3>
      <ul className="publications-list">

        <li>
          <a href="https://drive.google.com/file/d/1zEQxogzZ1kx8btkc9N6eehbShD2O0uuW/view?usp=sharing" target="_blank" rel="noreferrer">
            Preserving Identity Privacy in Face Recognition Systems
          </a>
          <br />
        </li>

        <li>
          <a href="https://drive.google.com/file/d/1mDnxqmUPupMFziq3Lux4igUKgqy0QhkE/view?usp=sharing" target="_blank" rel="noreferrer">
            Phishing Education Platform
          </a>
          <br />
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1T7sWKAmFFvFBsTDagEAn1DKkqrkwIkfa/view?usp=sharing" target="_blank" rel="noreferrer">
            Security in the 5G/6G Transition Through Quantum Gateways
          </a>
          <br />
        
        </li>

        <li>
          <a href="https://drive.google.com/file/d/1575XDJqIvWGsV-E_NGg1lNzH8r4Gqyok/view?usp=sharing" target="_blank" rel="noreferrer">
            PSA Levels in Advanced Prostate Cancer
          </a>
          <br />
        </li>

      </ul>

      {/* Awards */}
      <h3>Awards</h3>
      <ul className="awards-list">
        <li>
          <a href="https://devpost.com/software/slakr" target="_blank" rel="noreferrer">
            Slakr - TuffyHacks 2022 Winner
          </a>
          <br />
        </li>
      </ul>
    </div>
  );
}

function LanguageWindow() {
  const skills = {
    "Programming Languages": [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "SQL",
      "R"
    ],
    "Frameworks & Libraries": [
      "Flask",
      "FastAPI",
      "React",
      "SwiftUI",
      "AngularJS"
    ],
    "Data Science & AI": [
      "Pandas",
      "Scikit-Learn",
      "Jupyter Notebook",
      "Generative AI",
      "OpenAI APIs",
      "Agentic AI Systems"
    ],
    "Cloud & Data Platforms": [
      "AWS",
      "Azure Data Factory",
      "Databricks",
      "Snowflake",
      "Firebase"
    ],
    "Web & Design": [
      "HTML",
      "CSS",
      "Figma"
    ]
  };

  return (
    <div>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h5>{category}</h5>
          <ul className="skills-list">
            {items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}



export default App;