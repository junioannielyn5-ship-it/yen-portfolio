import './KoreanWeather.css';

const KoreanWeather = ({ onClose }) => {
  const forecast = [
    { day: '月', dayEn: '오사카', temp: 12, icon: '🎰' },
    { day: '火', dayEn: '요코하마', temp: 15, icon: '🌸' },
    { day: '水', dayEn: '부산', temp: 11, icon: '🌊' },
    { day: '木', dayEn: '도쿄', temp: 13, icon: '🎐' },
    { day: '金', dayEn: '서울', temp: 16, icon: '☀️' },
  ];

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-container korean-weather pachinko-theme" onClick={e => e.stopPropagation()}>
        <button className="demo-close dark" onClick={onClose}>✕</button>
        
        <header className="weather-header">
          <div className="weather-location">
            <span className="location-icon">🎰</span>
            <div>
              <h2>오사카</h2>
              <p>Osaka, Japan 1930-1989</p>
            </div>
          </div>
          <div className="weather-search">
            <input type="text" placeholder="도시 검색..." />
            <button>🔍</button>
          </div>
        </header>

        <main className="weather-main">
          <div className="current-weather">
            <div className="weather-icon-large">🎴</div>
            <div className="temperature">
              <span className="temp-value">18</span>
              <span className="temp-unit">°C</span>
            </div>
            <p className="weather-desc">격동의 시대 Era of Change</p>
            <p className="weather-feels">선자의 날씨 Sunja's Weather</p>
          </div>

          <div className="weather-details">
            <div className="detail-card">
              <span className="detail-icon">🎰</span>
              <span className="detail-value">행운</span>
              <span className="detail-label">Fortune</span>
            </div>
            <div className="detail-card">
              <span className="detail-icon">🌊</span>
              <span className="detail-value">강함</span>
              <span className="detail-label">조류 Tide</span>
            </div>
            <div className="detail-card">
              <span className="detail-icon">🎴</span>
              <span className="detail-value">희망</span>
              <span className="detail-label">운명 Fate</span>
            </div>
            <div className="detail-card">
              <span className="detail-icon">🌸</span>
              <span className="detail-value">만개</span>
              <span className="detail-label">벚꽃 Sakura</span>
            </div>
          </div>
        </main>

        <section className="weather-forecast">
          <h3>🎴 역사의 흐름 Historical Journey</h3>
          <div className="forecast-list">
            {forecast.map((day, idx) => (
              <div className={`forecast-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                <span className="forecast-day">{day.day}</span>
                <span className="forecast-icon">{day.icon}</span>
                <span className="forecast-temp">{day.temp}°</span>
              </div>
            ))}
          </div>
        </section>

        <section className="weather-info">
          <div className="info-card sunrise">
            <span>🌅</span>
            <div>
              <p>희망 Hope</p>
              <strong>1930</strong>
            </div>
          </div>
          <div className="info-card sunset">
            <span>🎰</span>
            <div>
              <p>영광 Glory</p>
              <strong>1989</strong>
            </div>
          </div>
        </section>

        <footer className="weather-footer">
          <p>🎰 "역사는 우리가 만들어가는 것" | Pachinko Weather 🌸</p>
        </footer>
      </div>
    </div>
  );
};

export default KoreanWeather;
