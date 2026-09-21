import React from 'react';

export function Home({ onNavigate }) {
  const categories = [
    { title: 'Automotive', icon: '🚗', desc: 'Powertrain & EV motor simulation' },
    { title: 'Off-Highway', icon: '🚜', desc: 'Heavy machinery & hydraulics' },
    { title: 'Defense', icon: '🛡️', desc: 'Tactical electronics & sensors' },
    { title: 'Stationary', icon: '⚡', desc: 'Grid storage & power inverters' },
    { title: 'Aerospace', icon: '✈️', desc: 'Avionics & flight controllers' },
    { title: 'Robotics', icon: '🤖', desc: 'Actuators & micro-controllers' },
  ];

  const caseStudies = [
    {
      title: 'Fleet analytics for heavy-duty vehicles',
      badge: 'Automotive',
      desc: 'Real-time telemetry validation and thermal load simulation across 500+ active node clusters.',
      linkText: 'Read case study →'
    },
    {
      title: 'High-voltage inverter thermal management',
      badge: 'Stationary',
      desc: '3D structural thermal modeling reducing cooling overhead by 24% under continuous load.',
      linkText: 'Read case study →'
    },
    {
      title: 'Autonomous UAV flight control circuit',
      badge: 'Aerospace',
      desc: 'Sub-millisecond loop validation for quad-rotor flight controllers with hardware-in-the-loop testing.',
      linkText: 'Read case study →'
    }
  ];

  const filters = ['All Industries', 'Automotive', 'Off-Highway', 'Defense', 'Stationary', 'Aerospace', 'Robotics'];

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', color: 'var(--text-main)', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section className="tech-grid-bg" style={{
        position: 'relative',
        padding: 'clamp(40px, 8vw, 90px) 24px clamp(40px, 6vw, 70px) 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Left Hero Text */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(255, 107, 0, 0.12)',
            border: '1px solid var(--orange-primary)',
            borderRadius: '20px',
            fontSize: '13px',
            color: 'var(--orange-primary)',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--yellow-cyber)' }} className="pulse-orange" />
            3D Hardware & Electrical Simulation Platform
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            color: '#FFFFFF'
          }}>
            Design. <br />
            <span className="highlight-orange">Simulate.</span> <br />
            <span className="highlight-yellow">Validate.</span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
            maxWidth: '560px',
            marginBottom: '36px',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            Build, connect and test hardware systems in an interactive 3D simulation environment. Real-time electrical telemetry validation, 3D component CAD assembly, and live hardware bridging.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onNavigate('Workbench')} 
              className="btn-primary" 
              style={{ padding: '14px 28px', fontSize: '16px' }}
            >
              Create Simulation ⚡
            </button>
            <button 
              onClick={() => onNavigate('Projects')} 
              className="btn-outline" 
              style={{ padding: '14px 28px', fontSize: '16px' }}
            >
              Open Project 📂
            </button>
          </div>
        </div>

        {/* Right Hero Visual Composition */}
        <div className="theme-card pulse-orange" style={{
          padding: '24px',
          borderRadius: '20px',
          background: 'var(--bg-surface)',
          color: 'var(--text-main)',
          border: '1px solid var(--steel-border-orange)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-orange)'
        }}>
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--steel-border)',
            paddingBottom: '12px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-heading)', color: 'var(--orange-primary)', fontWeight: '700' }}>
              HARDWARE VIEWPORT // LIVE SIMULATION
            </span>
            <span style={{ fontSize: '12px', background: 'rgba(255, 214, 0, 0.15)', color: 'var(--yellow-cyber)', border: '1px solid var(--yellow-cyber)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
              ● 60 FPS ACTIVE
            </span>
          </div>

          {/* SVG Hardware Diagram Mockup */}
          <div className="dark-tech-grid" style={{ position: 'relative', height: '220px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', background: '#0D1117' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* MCU Box */}
              <rect x="20" y="70" width="90" height="60" rx="8" fill="rgba(255, 107, 0, 0.15)" stroke="#FF6B00" strokeWidth="2" />
              <text x="65" y="105" fill="#FF6B00" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">MCU R1</text>

              <line x1="110" y1="100" x2="160" y2="100" stroke="#FFD600" strokeWidth="2.5" strokeDasharray="5 5" />

              {/* Main Inverter Box */}
              <rect x="160" y="50" width="100" height="100" rx="10" fill="rgba(255, 214, 0, 0.1)" stroke="#FFD600" strokeWidth="2" />
              <text x="210" y="95" fill="#F0F6FC" fontSize="13" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">3D Inverter</text>
              <text x="210" y="115" fill="#FF6B00" fontSize="11" textAnchor="middle">5.0V / 2.4A</text>

              <line x1="260" y1="100" x2="310" y2="100" stroke="#FF6B00" strokeWidth="2.5" />

              {/* Motor Circle */}
              <circle cx="340" cy="100" r="28" fill="rgba(255, 107, 0, 0.2)" stroke="#FF6B00" strokeWidth="2" />
              <text x="340" y="104" fill="#FFD600" fontSize="12" textAnchor="middle" fontWeight="bold" fontFamily="Space Grotesk">Motor</text>
            </svg>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid var(--steel-border)',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>TEMPERATURE</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--yellow-cyber)' }}>34.2 °C</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>POWER DISSIPATION</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--orange-primary)' }}>1.25 W</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)' }}>STATUS</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#38D9A9' }}>Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category / Hardware Domains Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 80px auto', padding: '0 24px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: '800',
          marginBottom: '24px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ color: 'var(--yellow-cyber)' }}>///</span> Hardware Engineering Domains
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px'
        }}>
          {categories.map((cat, i) => (
            <div
              key={i}
              className="theme-card theme-card-hover"
              style={{
                padding: '22px 18px',
                borderRadius: '16px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
              onClick={() => onNavigate('Workbench')}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{cat.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '6px' }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4' }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies / Hardware Systems Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#FFFFFF' }}>
              Hardware <span className="highlight-orange">Validations</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '400' }}>
              Real-world hardware projects modeled, simulated, and stress-tested in 3D.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
            {filters.map((f, index) => (
              <button
                key={index}
                style={{
                  background: index === 0 ? 'rgba(255, 107, 0, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: index === 0 ? '1px solid var(--orange-primary)' : '1px solid var(--steel-border)',
                  color: index === 0 ? 'var(--orange-primary)' : 'var(--text-muted)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {caseStudies.map((cs, idx) => (
            <div 
              key={idx} 
              className="theme-card theme-card-hover" 
              style={{ 
                padding: '28px', 
                borderRadius: '18px', 
                display: 'flex', 
                flexDirection: 'column', 
                justify: 'space-between'
              }}
            >
              <div>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(255, 214, 0, 0.12)',
                  border: '1px solid var(--yellow-cyber)',
                  color: 'var(--yellow-cyber)',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginBottom: '16px'
                }}>
                  {cs.badge}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '700', color: '#FFFFFF', marginBottom: '12px' }}>
                  {cs.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '24px' }}>
                  {cs.desc}
                </p>
              </div>

              <div 
                onClick={() => onNavigate('Workbench')}
                style={{
                  color: 'var(--orange-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {cs.linkText}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


