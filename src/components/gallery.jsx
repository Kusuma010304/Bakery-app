
import img1 from '/images/img1.jpg'
import img2 from '/images/img2.jpg'
import img3 from '/images/img3.jpg'
import img4 from '/images/img4.jpg'


function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h1 className="title" data-aos="fade-right" data-aos-duration="1000">Our Bread</h1>
      <p className="subtitle" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">A values-driven bakery</p>
      <div className="images">
        {images.map((url, index) => (
          <div className="img-wrapper" key={index}>
            <img src={url} alt={`Freshly baked bread ${index + 1}`} />
          </div>
        ))}
      </div>
      <p className="credit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        Images from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
      </p>
    </section>
  );
}

export default Gallery;