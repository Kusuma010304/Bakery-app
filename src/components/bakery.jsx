import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const products = [
  {
    image: "/images/brownie.jpg",
    title: "Breads",
    description:
      "Our artisan breads are handmade with organic flour, naturally leavened, and baked fresh in our stone deck ovens every morning.",
  },
  {
    image: "/images/cookies.jpg",
    title: "Cookies",
    description:
      "From classic chocolate chunk to rich double-chocolate fudge, our cookies are baked to perfection with crisp edges and soft centers.",
  },
  {
    image: "/images/pastrie.jpg",
    title: "Pastries",
    description:
      "Indulge in our flaky croissants, cinnamon rolls, and seasonal tarts, crafted with premium butter and sweet local ingredients.",
  },
];

function Bakery() {
  return (
    <section className="bakery-section" data-aos="fade-up">
      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      
      <div className="footer-content" id="contact">
        <div className="newsletter">
          <h2>Sign up for the newsletter</h2>

          <p>
            Want to be the first to read our news? Subscribe to the newsletter
            to keep abreast of all events.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="subscribe-box">
            <input
              type="email"
              placeholder="Enter a valid email address"
              required
            />
            <button type="submit" className="btn">SUBMIT</button>
          </form>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
          </div>
        </div>

        <div className="hours-location">
          <h2>Hours & Location</h2>

          <div className="address">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
            Anakapalle<br />
            </a>
            <a href="tel:1234562253">9876543210</a>
          </div>

          <div className="hours">
            <p><strong>Monday - Sunday</strong></p>
            <p>7:00am - 8:00pm</p>
          </div>

          <p className="credit" style={{ marginTop: '20px', fontSize: '0.85rem', color: '#999' }}>
            Image from <span>Freepik</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bakery;