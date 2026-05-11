

const LandingPage = () => {
  return (
    <div className="landing-app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🌲</span>
            <span className="logo-text">Passwords Storage</span>
          </div>

          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Community</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Pricing</a>
          </div>

          <button className="register-btn">Register Now →</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Lessons and insights<br />
              <span className="highlight">from 8 years</span>
            </h1>
            <p className="hero-subtitle">
              Where to grow your business as a photographer: site or social media?
            </p>
            <button className="cta-button">Register</button>
          </div>

          <div className="hero-illustration">
            <div className="monitor">
              <div className="monitor-screen">
                <div className="code-lines">
                  <div className="line"></div>
                  <div className="line short"></div>
                  <div className="line"></div>
                  <div className="line short"></div>
                </div>
              </div>
            </div>
            
            <div className="person">
              <div className="person-body">
                <div className="person-head"></div>
                <div className="person-torso"></div>
                <div className="person-arm"></div>
              </div>
              <div className="laptop"></div>
            </div>
            
            <div className="gear-icon">⚙️</div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <div className="section-header">
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>

        <div className="clients-logos">
          <div className="client-logo">●●●</div>
          <div className="client-logo">◉</div>
          <div className="client-logo">01</div>
          <div className="client-logo">logoipsum</div>
          <div className="client-logo">∞</div>
          <div className="client-logo">□</div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-header">
          <h2>Manage your entire community<br />in a single system</h2>
          <p className="subtext">Who is Nexcent suitable for?</p>
        </div>

        <div className="cards-container">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="card-icon">👥</div>
            <h3>Membership</h3>
            <p>Organisations, associations, clubs</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="card-icon">🏢</div>
            <h3>National</h3>
            <p>Chambers of commerce, federations</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="card-icon">🏠</div>
            <h3>Clubs And</h3>
            <p>Sports clubs, hobby clubs, interest groups</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;