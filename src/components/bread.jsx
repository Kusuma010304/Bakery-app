import imgcnt from "/images/imgcnt.jpg"
function Bread() {
  return (
    <section className="fresh-bread">
      <div  data-aos="fade-right">
        <img
          src={imgcnt}
          alt="Bakers preparing fresh bread dough"
          className="imgcnt"
        />
      </div>
      <div className="content" data-aos="fade-left">
        <p className="sub-title">Fresh baked breads</p>
        <h1>Baked fresh daily by bakers with passion</h1>
        <p className="description">
          Article evident arrived express highest men did boy. Mistress
          sensible entirely am so. Quick can manor smart money hopes worth
          too. Comfort produce husband boy her had hearing. Law others theirs
          passed but wishes. You day real less till dear read.
        </p>
        <ul>
          <li>
            <span>✔</span> Tasty, fresh bread baked daily
          </li>
          <li>
            <span>✔</span> We bake real, clean-label bread
          </li>
        </ul>
        <a href="#pastries" className="btn">View Products</a>
        <p className="credit" style={{ marginTop: '20px', fontSize: '0.85rem', color: '#999' }}>
          Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 600 }}>Freepik</a>
        </p>
      </div>
    </section>
  );
}

export default Bread;