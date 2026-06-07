// import croissant from "/images/croissant.jpg";
const products = [
  {
    id: 1,
    name: "croissant",
    image: "/images/croissant.jpg"
  },
  {
    id: 2,
    name: "Brownies",
    image: "/images/brownies.jpg"
  },
  {
    id: 3,
    name: "cinnamon bun",
    image: "/images/cinnamon.jpg"
  },
  {
    id: 4,
    name: "turkish bagels",
    image: "/images/bagels.jpg"
  },
  {
    id: 5,
    name: "Doughnuts",
    image: "/images/doughnuts.jpg"
  },
  {
    id: 6,
    name: "Tarts",
    image: "/images/tarts.jpg"
  },
  {
    id: 7,
    name: "shortbread",
    image: "/images/shortbread.jpg"
  },
  {
    id: 8,
    name: "Cookies",
    image: "/images/cookies.jpg"
  }
];

function Pastries() {
  return (
    <section className="pastries" id="pastries">
      <h1 data-aos="fade-right">Brownies, Pastries, etc</h1>

      <div className="cards">
        {products.map((item) => (
          <div className="crd" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>
              Sample text. Click to select the text box.
              Click again or double click to start editing.
            </p>

            <a href="/">more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pastries;
