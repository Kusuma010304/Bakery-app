const testimonials = [
  {
    name: "STELLA LARSON",
    text: "Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft.",
  },
  {
    name: "NICK JHONSON",
    text: "With the most competitive prices on the market they are able to deliver great value without compromising on taste.",
  },
  {
    name: "OLGA IVANOVA",
    text: "We serve a wide range of institutions including universities, airlines, hotels and schools. Highly recommend this bakery!",
  },
  {
    name: "PAUL HUDSON",
    text: "The croissants and cinnamon buns are out of this world! Melt in your mouth goodness every single time.",
  },
  {
    name: "CASH HUDSON",
    text: "Superb customer service and prompt delivery. They handle bulk orders for our hotel group with absolute professionalism.",
  },
  {
    name: "MIKE PERRY",
    text: "I come here every morning for their sourdough bread. It has the perfect crust and soft, airy interior. Truly artisan!",
  },
];

function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="testimonial-title" data-aos="fade-left">Testimonials</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote">❞</div>

            <p className="testimonial-text">"{item.text}"</p>

            <h4 className="testimonial-name">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
