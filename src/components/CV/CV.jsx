import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <style>
        {`
          body {
            font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.4;
            margin: 0 auto;
            padding: 10mm 10mm;
            color: #000;
            background-color: #fff;
            font-size: 10pt;
            width: 210mm;
            height: 297mm;
            box-sizing: border-box;
          }

          h1 {
            font-size: 16pt;
            margin: 0 0 4px;
            color: #000;
          }

          h2 {
            font-size: 11pt;
            border-bottom: 1px solid #000;
            padding-bottom: 2px;
            margin: 12px 0 8px;
            color: #000;
          }

          h3 {
            font-size: 10.5pt;
            margin: 0 0 3px;
            color: #000;
          }

          h4 {
            font-size: 10pt;
            margin: 0 0 2px;
            color: #000;
          }

          .header {
            margin-bottom: 10px;
          }

          .contact-info {
            margin-bottom: 5px;
            font-size: 9.5pt;
          }

          .contact-info p {
            margin: 2px 0;
          }

          .section {
            margin-bottom: 10px;
          }

          .experience-item, .project-item, .education-item {
            margin-bottom: 10px;
          }

          .job-title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 2px;
          }

          .company {
            font-weight: 600;
          }

          .date {
            font-style: italic;
            color: #555;
          }

          ul {
            padding-left: 18px;
            margin: 6px 0;
          }

          li {
            margin-bottom: 4px;
          }

          a {
            color: #000;
            text-decoration: underline;
            font-weight: 500;
          }

          .summary {
            text-align: justify;
            line-height: 1.4;
          }

          .tech-stack {
            font-style: italic;
            color: #555;
            font-size: 9pt;
            margin-top: 3px;
          }

          .project-links {
            margin: 4px 0;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
          }

          .project-links a {
            font-size: 8.5pt;
          }

          .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 8px;
          }

          .skill-category h4 {
            margin-bottom: 5px;
          }

          @media print {
            body {
              padding: 9mm;
              padding-top: 0.5px;
              padding-bottom: 0.5px;
              font-size: 9pt;
            }
            a {
              text-decoration: underline;
            }
          }
        `}
      </style>

      <div className="header">
        <h1>Ashish Kumar Giri</h1>
        <div className="contact-info">
          <p>Full Stack Developer | Java | Spring Boot | React.js | 9078262605 | ashishkumargiri13@gmail.com</p>
          <p>
            <a href="https://linkedin.com/in/akgiri10">linkedin.com/in/akgiri10</a> | 
            <a href="https://github.com/Ashish-1013">github.com/Ashish-1013</a> | 
            Bengaluru, Karnataka
          </p>
        </div>
      </div>
    
      <div className="section">
        <h2>Professional Summary</h2>
        <div className="summary">
          <p>Energetic and detail-oriented Full Stack Developer, proficient in Java Spring Boot and React.js, with hands-on experience in building robust web applications. Adept at crafting responsive UIs, designing secure RESTful APIs, and collaborating in agile teams. Eager to contribute to real-world projects, learn from industry mentors, and grow as a solution-oriented software professional.</p>
        </div>
      </div>
    
      <div className="section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Frontend Development</h4>
            <ul>
              <li>React.js (Hooks, Context API)</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5, CSS3, Bootstrap</li>
              <li>React Router DOM</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Backend Development</h4>
            <ul>
              <li>Java 8+, Spring Boot</li>
              <li>Spring Security, JWT</li>
              <li>REST API Design</li>
              <li>Hibernate, JPA</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & Databases</h4>
            <ul>
              <li>MySQL, MongoDB</li>
              <li>Git, GitHub</li>
              <li>Postman, Swagger</li>
              <li>Maven, Gradle</li>
            </ul>
          </div>
        </div>
      </div>
    
      <div className="section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <div className="job-title">
            <span className="company">Full Stack Developer Trainee</span>
            <span className="date">july 2024 – Present</span>
          </div>
          <h4>Besant Technologies, Bengaluru</h4>
          <ul>
            <li>Underwent 6-month industry-driven training in Java and React-based development</li>
            <li>Developed scalable full stack applications with secure JWT authentication</li>
            <li>Practiced microservices architecture, API security, and Agile methodologies</li>
            <li>Collaborated in team projects, mock interviews, and peer code reviews</li>
          </ul>
        </div>
      </div>
    
      <div className="section">
        <h2>Project Experience</h2>
        
        <div className="project-item">
            <h3>Bookstore Management System</h3>
            <p className="tech-stack">Java | Spring Boot | MySQL | Hibernate | JWT | REST API</p>
            <ul>
              <li>Designed and implemented a robust backend using Spring Boot with MVC architecture</li>
              <li>Developed secure RESTful APIs with JWT-based authentication and role-based access control</li>
              <li>Structured services and repositories with clear separation of concerns and reusable components</li>
              <li>Optimized database performance through indexing, native queries, and Hibernate tuning</li>
              <li>Implemented global exception handling, validation, and logging for reliability and maintainability</li>
            </ul>
          </div>
          
        
        <div className="project-item">
            <h3>E-Commerce Website</h3>
            <div className="project-links">
              <a href="https://github.com/Ashish-1013/Magical_Shopper">GitHub Repository</a>
              <a href="https://ashish-1013.github.io/Magica-Shopper-Vite-1/">Live Demo</a>
            </div>
            <p className="tech-stack">React.js | Context API | JavaScript | Vite</p>
            <ul>
              <li>Developed a single-page e-commerce frontend with product listing and cart functionality</li>
              <li>Designed reusable React components for product cards, filters, and cart UI</li>
              <li>Managed client-side state using Context API without any external APIs</li>
              <li>Improved app performance with lazy loading and code splitting via Vite</li>
              <li>Ensured smooth user experience with clean routing and mobile responsiveness</li>
            </ul>
          </div>
      </div>
    
      <div className="section">
        <h2>Education</h2>
        <div className="education-item">
          <div className="job-title">
            <span className="company">Master of Computer Applications (MCA)</span>
            <span className="date">2023</span>
          </div>
          <h4>College of Engineering Bhubaneswar (COEB) | CGPA: 7.5/10</h4>
        </div>
      </div>
    
      <div className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Java Full Stack Developer – Besant Technologies</li>
          <li>NPTEL – Industry 4.0, IoT, MIS, Intellectual property</li>
        </ul>
      </div>
    
      <div className="section">
        <h2>Achievements</h2>
        <ul>
          <li>Recognized as Top Performer in Full Stack Training Program</li>
          <li>Led team in final capstone project with successful client demo</li>
          <li>Active contributor to open-source projects on GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;