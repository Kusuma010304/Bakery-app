import main from "/images/main.jpg";
import small from "/images/small.jpg"
function Imgcnt() {
  return (
    <section className="about-section" data-aos="fade-right">
      { <img
        src={main}
        alt="Artisan bakery items being prepared"
         className="main-img"
      /> }

      <div className="content-card" data-aos="fade-left">
        <h2>
          We've had one goal: to bake the best tasting breads,
          cakes and pastries.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <a href="#pastries" className="btn">View Products</a>
        <p className="credit" style={{ marginTop: '20px', fontSize: '0.8rem', color: '#999' }}>
          Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600 }}>Freepik</a>
        </p>
      </div>
    <div className="ks">
      { <img
        className="small-img" data-aos="fade-up"
        src={small}
        alt="Oven fresh buns"
      /> }
      </div>
    </section>
  );
}

export default Imgcnt;