import { useState } from 'react';
import './KDramaTracker.css';

const KDramaTracker = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('watching');

  const dramas = {
    watching: [
      { id: 1, title: '더킹: 영원의 군주', titleEn: 'The King: Eternal Monarch', episodes: '16/16', rating: 9.5, genre: '판타지 로맨스', emoji: '👑' },
      { id: 2, title: '푸른 바다의 전설', titleEn: 'Legend of the Blue Sea', episodes: '12/20', rating: 9.3, genre: '판타지', emoji: '🧜‍♂️' },
    ],
    completed: [
      { id: 3, title: '꽃보다 남자', titleEn: 'Boys Over Flowers', episodes: '25/25', rating: 9.8, genre: '로맨스', emoji: '🌸' },
      { id: 4, title: '상속자들', titleEn: 'The Heirs', episodes: '20/20', rating: 9.4, genre: '학원 로맨스', emoji: '💎' },
    ],
    wishlist: [
      { id: 5, title: '시티헌터', titleEn: 'City Hunter', episodes: '0/20', rating: 0, genre: '액션', emoji: '🎯' },
      { id: 6, title: '개인의 취향', titleEn: 'Personal Taste', episodes: '0/16', rating: 0, genre: '로코', emoji: '🏠' },
    ]
  };

  const stats = {
    total: 15,
    watching: 2,
    completed: 12,
    hours: 456
  };

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-container kdrama-tracker minho-theme" onClick={e => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>✕</button>
        
        <header className="drama-header">
          <div className="drama-logo">
            <span>📸</span>
            <h1>MinHo Drama Tracker</h1>
          </div>
          <p>이민호 필모그래피 Lee Min Ho Collection</p>
        </header>

        <div className="drama-stats">
          <div className="stat">
            <span className="stat-num">{stats.total}</span>
            <span className="stat-text">작품 Works</span>
          </div>
          <div className="stat">
            <span className="stat-num">{stats.watching}</span>
            <span className="stat-text">시청중 Watching</span>
          </div>
          <div className="stat">
            <span className="stat-num">{stats.completed}</span>
            <span className="stat-text">완료 Done</span>
          </div>
          <div className="stat">
            <span className="stat-num">📸</span>
            <span className="stat-text">화보 Magazine</span>
          </div>
        </div>

        <nav className="drama-tabs">
          <button 
            className={activeTab === 'watching' ? 'active' : ''} 
            onClick={() => setActiveTab('watching')}
          >
            📺 시청중
          </button>
          <button 
            className={activeTab === 'completed' ? 'active' : ''} 
            onClick={() => setActiveTab('completed')}
          >
            ✅ 완료
          </button>
          <button 
            className={activeTab === 'wishlist' ? 'active' : ''} 
            onClick={() => setActiveTab('wishlist')}
          >
            💖 보고싶은
          </button>
        </nav>

        <div className="drama-list">
          {dramas[activeTab].map(drama => (
            <div className="drama-card" key={drama.id}>
              <div className="drama-poster">
                <span>{drama.emoji}</span>
              </div>
              <div className="drama-info">
                <h3>{drama.title}</h3>
                <p className="drama-en">{drama.titleEn}</p>
                <div className="drama-meta">
                  <span className="genre">{drama.genre}</span>
                  <span className="episodes">📺 {drama.episodes}</span>
                </div>
                {drama.rating > 0 && (
                  <div className="drama-rating">
                    <span>⭐</span>
                    <span>{drama.rating}</span>
                    <div className="rating-bar">
                      <div style={{ width: `${drama.rating * 10}%` }}></div>
                    </div>
                  </div>
                )}
              </div>
              <button className="drama-action">
                {activeTab === 'watching' ? '▶️' : activeTab === 'completed' ? '🔄' : '➕'}
              </button>
            </div>
          ))}
        </div>

        <div className="drama-recommend">
          <h3>📸 화보 Magazine Photoshoots</h3>
          <div className="recommend-scroll">
            <div className="recommend-item">
              <span>📷</span>
              <p>W Korea</p>
            </div>
            <div className="recommend-item">
              <span>✨</span>
              <p>GQ Korea</p>
            </div>
            <div className="recommend-item">
              <span>💫</span>
              <p>ELLE Korea</p>
            </div>
          </div>
        </div>

        <footer className="drama-footer">
          <p>📸 이민호와 함께하는 드라마 여행! Lee Min Ho Forever! 💖</p>
        </footer>
      </div>
    </div>
  );
};

export default KDramaTracker;
