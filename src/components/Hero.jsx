import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">
            <span className="name-highlight">Yen</span>
          </h1>
          <h2 className="hero-role">Student Frontend Developer</h2>
          <p className="hero-intro">
            Passionate about creating beautiful, responsive websites. 
            Currently learning React and building cool projects one line of code at a time. 
            Ready to turn your ideas into reality! ✨
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects 🚀
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me 💬
            </a>
          </div>
          <div className="hero-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">JavaScript</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape"></div>
          <div className="hero-code">
            <pre>
{`const developer = {
  name: "Yen",
  role: "Frontend Dev",
  skills: ["React", "CSS"],
  passion: "∞"
};`}
            </pre>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
