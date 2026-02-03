import './KBeautyShop.css';

const KBeautyShop = ({ onClose }) => {
  const products = [
    {
      id: 1,
      name: 'F4 글로우 세럼',
      nameEn: 'F4 Glow Serum',
      price: '₩88,000',
      rating: 4.9,
      reviews: 2340,
      tag: '구준표 Pick',
      emoji: '✨'
    },
    {
      id: 2,
      name: '금잔디 수분 크림',
      nameEn: 'Geum Jan Di Cream',
      price: '₩42,000',
      rating: 4.8,
      reviews: 1890,
      tag: '서민픽',
      emoji: '🌼'
    },
    {
      id: 3,
      name: '신화그룹 선크림',
      nameEn: 'Shinhwa Sun Cream',
      price: '₩128,000',
      rating: 4.7,
      reviews: 3210,
      tag: '재벌급',
      emoji: '☀️'
    },
    {
      id: 4,
      name: '꽃보다 립틴트',
      nameEn: 'Flower Lip Tint',
      price: '₩38,000',
      rating: 4.9,
      reviews: 4520,
      tag: '베스트',
      emoji: '🌸'
    },
  ];

  return (
    <div className="demo-overlay" onClick={onClose}>
      <div className="demo-container kbeauty-shop" onClick={e => e.stopPropagation()}>
        <button className="demo-close" onClick={onClose}>✕</button>
        
        <header className="shop-header">
          <nav className="shop-nav">
            <span className="shop-logo">🌸 F4 Beauty</span>
            <div className="shop-icons">
              <span>🔍</span>
              <span>💖</span>
              <span>🛒</span>
            </div>
          </nav>
          <div className="shop-banner">
            <div className="banner-content">
              <span className="banner-tag">🌸 Boys Over Flowers</span>
              <h1>F4 뷰티 컬렉션</h1>
              <p>신화그룹 VIP 할인 Up to 50% OFF</p>
              <button className="shop-btn">쇼핑하기 Shop Now 💐</button>
            </div>
            <div className="banner-emoji">🌹</div>
          </div>
        </header>

        <section className="shop-categories">
          <div className="category">🧴 준표 스킨</div>
          <div className="category">💄 잔디 메이크업</div>
          <div className="category">🧖 F4 마스크</div>
          <div className="category">💅 신화 네일</div>
        </section>

        <section className="shop-products">
          <h2>🌸 F4 인기 상품 Best Sellers</h2>
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image">
                  <span className="product-emoji">{product.emoji}</span>
                  <span className="product-tag">{product.tag}</span>
                  <button className="wishlist-btn">💖</button>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.nameEn}</p>
                  <div className="product-rating">
                    <span>⭐ {product.rating}</span>
                    <span>({product.reviews.toLocaleString()})</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="cart-btn">담기</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="shop-footer">
          <div className="footer-features">
            <span>🚁 헬기배송</span>
            <span>💝 F4포장</span>
            <span>🔄 무료반품</span>
          </div>
          <p>© 2026 F4 Beauty | 거의 다 왔어, 금잔디! 🌸</p>
        </footer>
      </div>
    </div>
  );
};

export default KBeautyShop;
