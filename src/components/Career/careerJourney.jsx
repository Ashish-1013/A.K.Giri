
import React from 'react';
import './careerJourney.css'; // Add CSS for styling

const CareerJourney = () => {
    const milestones = [
    {
        year: '2016',
        title: 'High School',
        description: 'Completed high school with a focus on science and mathematics.',
    },
    {
        year: '2018',
        title: 'Intermediate',
        description: 'Completed intermediate education with a focus on physics, chemistry, and mathematics.',
    },
    {
      year: '2021',
      title: 'Bachelor’s Degree',
      description: 'Graduated with a Bachelor’s degree in Mathematics from North Odisha University.',
    },
    {
      year: '2023',
      title: 'Master in Computer Application',
      description: 'Completed Masters’s Degree in Computer Application from Biju Patnaik University.',
    },
    {
      year: 'Present',
      title: 'Full-Stack Developer',
      description: 'Currently working as a Full-Stack Developer at Besant Technology, building scalable web applications.',
    },
    /*{
      year: '2024',
      title: 'Present Job - Full-Stack Developer',
      description: 'Currently working as a Full-Stack Developer at DEF Solutions, building scalable web applications.',
    },*/
  ];

  return (
    <section id="journey">
      <h2 className="journeyTitle">My Journey</h2>
      <p className="journeyDesc">From school to my present job, here’s a timeline of my career milestones.</p>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={index} className="timelineItem">
            <div className="timelineDot"></div>
            <div className="timelineContent">
              <h3 className="timelineYear">{milestone.year}</h3>
              <h4 className="timelineTitle">{milestone.title}</h4>
              <p className="timelineDescription">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerJourney;
