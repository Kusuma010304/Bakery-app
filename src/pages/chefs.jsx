function Chefs(){
    const chefs=[
        {
            id:1,
            name:"Chef John",
          image:"/images/john.jpg"},
          {
            id:2,
            name:"Chef Priya",
          image:"/images/priya.jpg"},
          {
            id:3,
            name:"Chef Giovanni",
           image:"/images/giovanni.jpg"},
          {
            id:4,
            name:"Chef Tony",
            image:"/images/tony.jpg"},
          {
            id:5,
            name:"Chef Luca",
            image:"/images/luca.jpg"},
          {
            id:6,
        name:"Chef Sophie",
          image:"/images/sophie.jpg"},
          {
            id:7,
        name:"Chef Jack",
          image:"/images/jack.jpg"},
          {
            id:8,
        name:"Chef Emily",
          image:"/images/emily.jpg"}
];
    return(
    <section className="chefs-section">
        <h2 data-aos="fade-right">Our Chefs 🤩</h2>
        <div className="chefs-grid" data-aos="fade-up">
        {chefs.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
          ))}
      </div>
    </section>
    );
}
export default Chefs;