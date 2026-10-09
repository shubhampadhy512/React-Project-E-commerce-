import React from 'react'
import "./Footer.css";

const columns = [
  {
    title: 'Get to Know Us',
    links: ['About Us', 'Careers', 'Press Releases', 'Corporate Information', 'Investor Relations'],
  },
  {
    title: 'Connect with Us',
    links: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube'],
  },
  {
    title: 'Make Money with Us',
    links: ['Sell on Our Platform', 'Become an Affiliate', 'Advertise Your Products', 'Self-Publish with Us', 'Become a Delivery Partner'],
  },
  {
    title: 'Let Us Help You',
    links: ['Your Account', 'Returns Centre', 'Track Your Order', 'Shipping Rates & Policies', 'Help'],
  },
]

const services = [
  { name: 'Music', desc: 'Stream millions of songs' },
  { name: 'Books', desc: 'Read and listen to bestsellers' },
  { name: 'Video', desc: 'Watch movies and shows' },
  { name: 'Pay', desc: 'Fast and secure payments' },
  { name: 'Business', desc: 'Everything for your business' },
  { name: 'Cloud', desc: 'Scalable web services' },
  { name: 'Gift Cards', desc: 'Give the perfect gift' },
  { name: 'Prime', desc: 'Fast delivery and perks' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      {/* Back to top */}
      <button className="footer-back-to-top" onClick={scrollToTop}>
        Back to top
      </button>

      {/* Main link columns */}
      <div className="footer-main">
        <div className="footer-columns">
          {columns.map((col) => (
            <div className="footer-column" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Logo + language / country row */}
      <div className="footer-middle">
        <div className="footer-logo">yourbrand</div>

        <div className="footer-selectors">
          <button className="footer-select">🌐 English</button>
          <button className="footer-select">🇮🇳 India</button>
        </div>
      </div>

      {/* Bottom services strip */}
      <div className="footer-bottom">
        <div className="footer-services">
          {services.map((s) => (
            <a href="#" className="footer-service" key={s.name}>
              <span className="service-name">{s.name}</span>
              <span className="service-desc">{s.desc}</span>
            </a>
          ))}
        </div>

        <div className="footer-legal">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()}, YourBrand.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  )
}

export default Footer