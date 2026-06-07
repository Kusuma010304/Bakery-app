
import head from "/images/head.jpg";
function About() {
  
  return (
    <section className="heros" id="about">
      <div className="cont" data-aos="fade-right">
        <h1>About Bakery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <ul className="about-links" data-aos="fade-up">
          <li>Our People</li>
          <li>Our Values</li>
          <li>Our History</li>
          <li>Our Culture</li>
          <li>ingredients</li>
          <li>Our Bakery</li>
        </ul>
      </div>

      <div className="im" data-aos="rotate-right">
        <img
          src={head}
          alt="Freshly baked artisan bread"
        />
      </div>
    </section>
  );
}

export default About;