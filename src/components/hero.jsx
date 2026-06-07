import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import hero from "/images/hero.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="content" data-aos="fade-right">
        <h3>fresh bread & baked goods</h3>
        <h1>Baked fresh daily</h1>
        <p>
          <FaMapMarkerAlt aria-hidden="true" />
          <span>Anakapalle</span>
        </p>
        <p>
          <FaPhoneAlt aria-hidden="true" />
          <span>9876543210</span>
        </p>
        <span className="hours-text">
          Monday - Wednesday 9am - 7pm <br />
          Thursday - Saturday 9am - 8pm <br />
          Sunday 9am - 6pm
        </span><br />
        <a href="#pastries" className="btn">View Products</a>
      </div>
      <div className="image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <img 
          src={hero}
          alt="Baker with freshly baked bread" 
          className="hero-image"
        />                
      </div>
    </section>
  );
}

export default Hero;
