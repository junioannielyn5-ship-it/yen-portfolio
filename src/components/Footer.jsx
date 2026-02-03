import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-accent">Yen</span>Portfolio
            </a>
            <p>Student Frontend Developer passionate about creating beautiful web experiences.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>📧 yenjunio@gmail.com</p>
            <p>📍 Mandaluyong, Philippines</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with 💖 by Yen © {currentYear}
          </p>
          <p className="footer-tech">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
