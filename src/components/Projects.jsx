import { useState } from 'react';
import './Projects.css';
import './demos/DemoStyles.css';

// Demo Components
import SeoulCafe from './demos/SeoulCafe';
import HangulTodo from './demos/HangulTodo';
import KBeautyShop from './demos/KBeautyShop';
import KoreanWeather from './demos/KoreanWeather';
import KDramaTracker from './demos/KDramaTracker';

const Projects = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  const projects = [
    {
      id: 1,
      title: '👑 The King Café',
      description: 'A royal Korean café website inspired by The King: Eternal Monarch. Features elegant menu, VIP reservations, and majestic gallery. Fit for royalty! 🏰',
      tech: ['React', 'CSS', 'Vite'],
      github: 'https://github.com/yourusername/theking-cafe',
      demoComponent: 'seoul-cafe',
      emoji: '👑',
      image: 'https://i.pinimg.com/736x/1c/3c/8e/1c3c8e0f1f8f9c8d9e0f1a2b3c4d5e6f.jpg'
    },
    {
      id: 2,
      title: '🧜‍♂️ Blue Sea Todo',
      description: 'Minimalist task manager inspired by Legend of the Blue Sea. Ocean-themed UI with mermaid vibes, wave animations, and dreamy aesthetics. 🌊',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/yourusername/bluesea-todo',
      demoComponent: 'hangul-todo',
      emoji: '🧜‍♂️',
      image: 'https://i.pinimg.com/736x/2a/4b/6c/2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d.jpg'
    },
    {
      id: 3,
      title: '🌸 F4 Beauty Shop',
      description: 'Luxurious K-Beauty shop inspired by Boys Over Flowers. Premium skincare for the elite! Featuring soft florals, elegant cards, and Shinhwa Group vibes. 💐',
      tech: ['React', 'Styled Components', 'Framer Motion'],
      github: 'https://github.com/yourusername/f4-beauty',
      demoComponent: 'kbeauty-shop',
      emoji: '🌸',
      image: 'https://i.pinimg.com/736x/3b/5c/7d/3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e.jpg'
    },
    {
      id: 4,
      title: '🎰 Pachinko Weather',
      description: 'Dramatic weather dashboard inspired by Pachinko. Historical Korean-Japanese aesthetics with vintage vibes and emotional depth. ⛩️',
      tech: ['React', 'Weather API', 'CSS'],
      github: 'https://github.com/yourusername/pachinko-weather',
      demoComponent: 'korean-weather',
      emoji: '🎰',
      image: 'https://i.pinimg.com/736x/4c/6d/8e/4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f.jpg'
    },
    {
      id: 5,
      title: '📸 MinHo Drama Tracker',
      description: 'Track all Lee Min Ho dramas and photoshoots! Rate his best looks, save favorite scenes, and never miss a magazine cover. Fan service level: 100! 💖',
      tech: ['React', 'LocalStorage', 'CSS Grid'],
      github: 'https://github.com/yourusername/minho-tracker',
      demoComponent: 'kdrama-tracker',
      emoji: '📸',
      image: 'https://i.pinimg.com/736x/5d/7e/9f/5d7e9f1a3b5c7d9e1f3a5b7c9d1e3f5a.jpg'
    }
  ];

  const openDemo = (demoName) => {
    setActiveDemo(demoName);
    document.body.style.overflow = 'hidden';
  };

  const closeDemo = () => {
    setActiveDemo(null);
    document.body.style.overflow = 'auto';
  };

  const renderDemo = () => {
    switch (activeDemo) {
      case 'seoul-cafe':
        return <SeoulCafe onClose={closeDemo} />;
      case 'hangul-todo':
        return <HangulTodo onClose={closeDemo} />;
      case 'kbeauty-shop':
        return <KBeautyShop onClose={closeDemo} />;
      case 'korean-weather':
        return <KoreanWeather onClose={closeDemo} />;
      case 'kdrama-tracker':
        return <KDramaTracker onClose={closeDemo} />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">내 프로젝트 My Projects</h2>
          <p className="section-subtitle">Check out some of my recent work ✨ Click "Live Demo" to preview!</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-emoji">{project.emoji}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <button 
                    onClick={() => openDemo(project.demoComponent)}
                    className="project-link demo"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>더 보고 싶다면? Want to see more? Check out my GitHub!</p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View All Projects 📁
          </a>
        </div>
      </div>

      {/* Demo Modal */}
      {activeDemo && renderDemo()}
    </section>
  );
};

export default Projects;
