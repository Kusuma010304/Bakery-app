import Bakery from "../components/bakery";
import img10 from "/images/img10.jpg";
function Abouts(){
  return(
    <div className="page-1">
          <img src={img10} alt="Abouts" />
          <h2 data-aos="zoom-in" style={{ marginTop: "20px" ,textAlign: "center",justifyContent: "center",marginLeft: "20px" ,alignItems: "center" }}>Welcome to our bakery, where every loaf and pastry is made with love, care, and the finest ingredients. We are passionate about creating fresh breads, delicious pastries, and sweet treats that bring happiness to every customer</h2>
          <button data-aos="zoom-in" style={{ marginTop: "20px" ,textAlign: "center",justifyContent: "center",marginLeft: "30%"  ,alignItems: "center" }}>About-us</button>
          <button data-aos="zoom-in" style={{ marginTop: "20px" ,textAlign: "center",justifyContent: "center",marginLeft: "20px" ,alignItems: "center" }} >View-products</button>
          <Bakery />
    </div>
  );
}
export default Abouts;