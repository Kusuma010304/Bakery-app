import Head from "/images/head.jpg";
import Gallery from "../components/gallery";
function Workshop(){
    return(
        <section  className="workshop" data-aos="fade-up">
            <h2>Workshop</h2>
            <div className="workshop-section">
            <img src={Head} alt="Workshop" />
            </div>
            <p>
                Join us for an immersive baking experience where you'll learn the art of creating delicious pastries and breads from our expert chefs.
            </p>
            <button>Join our team</button>
            <Gallery />     
        </section>  
    );
}
export default Workshop;