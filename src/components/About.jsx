import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: 70, icon: '⚛️' },
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
    { name: 'JavaScript', level: 75, icon: '💛' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hi there! 👋</h3>
            <p>
              I'm a passionate <strong>Student Frontend Developer</strong> based in 
              Mandaluyong, Philippines. I love turning ideas into reality through 
              clean, responsive, and user-friendly websites.
            </p>
            <p>
              Currently learning and growing my skills in React, while building 
              projects that help me practice what I learn. I believe in writing 
              clean code and creating designs that make users smile! 😊
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              watching tutorials, or working on personal projects to level up my skills.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>Student Developer</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💻</span>
                <span>Frontend Focused</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Always Learning</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3>My Skills 🛠️</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-extra">
              <h4>Also familiar with:</h4>
              <div className="extra-skills">
                <span>Git</span>
                <span>VS Code</span>
                <span>Figma</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
