import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <h2 style={{color:"white"}}>Bakery</h2>
        <p>Home-made Food</p>
      </div>

      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <hr />
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#pastries">Bakery Menu</a></li>
            <li><a href="#gallery">Visit Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Help</h3>
          <hr />
          <ul>
            <li>FAQs</li>
            <li>Allergens</li>
            <li><a href="#contact">Contact Us</a></li>
            <li>Have Your Say</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Get In Touch</h3>
          <hr />
          <p>
            <FaLocationDot aria-hidden="true" />
            <span>Anakapalle</span>
          </p>
          <p>
            <MdEmail aria-hidden="true" />
            <span>hi@bakery.com</span>
          </p>
          <p>
            <FaPhone aria-hidden="true" />
            <span>9876543210</span>
          </p>
        </div>

        <div className="footer-column subscribe">
          <h3>Subscribe</h3>
          <hr />
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              placeholder="Enter a valid email address"
              required
            />
            <button type="submit" className="btn">SEND A MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
        <p>&copy; 2026 Bakery Page. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;