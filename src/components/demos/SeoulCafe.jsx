import './SeoulCafe.css';

const SeoulCafe = ({ onClose }) => {
  const menuItems = [
    { name: '황제의 아메리카노', nameEn: "Emperor's Americano", price: '₩8,500', emoji: '👑' },
    { name: '로열 라떼', nameEn: 'Royal Latte', price: '₩9,000', emoji: '🏰' },
    { name: '대한제국 말차', nameEn: 'Kingdom Matcha', price: '₩9,500', emoji: '🍵' },
    { name: '이곤 케이크', nameEn: 'Lee Gon Cake', price: '₩12,000', emoji: '🎂' },
  ];

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-container seoul-cafe" onClick={e => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>✕</button>
        
        <header className="cafe-header">
          <nav className="cafe-nav">
            <span className="cafe-logo">👑 The King Café</span>
            <div className="cafe-links">
              <a href="#menu">메뉴</a>
              <a href="#about">소개</a>
              <a href="#reserve">예약</a>
            </div>
          </nav>
          
          <div className="cafe-hero">
            <h1>대한제국의 커피</h1>
            <p>Coffee Fit for The Eternal Monarch</p>
            <button className="cafe-btn">메뉴 보기 View Menu 👑</button>
          </div>
        </header>

        <section className="cafe-menu">
          <h2>👑 황실 메뉴 Royal Menu</h2>
          <div className="menu-grid">
            {menuItems.map((item, idx) => (
              <div className="menu-card" key={idx}>
                <span className="menu-emoji">{item.emoji}</span>
                <h3>{item.name}</h3>
                <p>{item.nameEn}</p>
                <span className="menu-price">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cafe-reserve">
          <h2>🏰 VIP 예약 Royal Reservation</h2>
          <form className="reserve-form">
            <input type="text" placeholder="이름 Name" />
            <input type="date" />
            <select>
              <option>2명 Royal Couple</option>
              <option>4명 Royal Party</option>
              <option>6명 Royal Banquet</option>
            </select>
            <button type="button">예약 완료 Reserve 👑</button>
          </form>
        </section>

        <footer className="cafe-footer">
          <p>📍 대한제국 서울 황실로 1 | ☎️ 02-KING-2020</p>
          <p>© 2026 The King Café | 짐이 곧 법이다 ⚔️</p>
        </footer>
      </div>
    </div>
  );
};

export default SeoulCafe;
