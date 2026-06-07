function Features(){
    const features=[
        {
            icon:"🥖",
            title:"Baked Fresh Daily",
            desc:"Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft"
        },
        {
            icon:"🧁",
            title:"Great Value",
            desc:"With the most competitive prices on the market we are able to deliver great value without compromising on taste"
        },
        {
            icon:"🏫",
            title:"Institutions",
            desc:"We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow"
        },
        {
            icon:"🚚",
            title:"Delivery To Your Door",
            desc:"We deliver the items to your door"
        },
        {
            icon:"🎁",
            title:"No Order Too Large",
            desc:"dont order tooo largee"
        }
    ];
    return(
        <section className="features">
            <div className="title" data-aos="fade-right" data-aos-duration="1000">
                <h1>We bake fresh, handmade bread</h1> 
                <h1>pastries and cakes every day</h1>
            </div>
            <div className="card-container">
            {features.map((item,index)=>(
                <div className="card" key={index} data-aos="fade-left" data-aos-duration="1000" data-aos-delay={100 * (index + 1)}>
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
             </div>
        </section>


    );
}
export default Features;
// import {
//   FaBreadSlice,
//   FaStore,
//   FaSchool,
//   FaTruck,
//   FaBox,
// } from "react-icons/fa";

// function Features() {
//   const features = [
//     {
//       icon: <FaBreadSlice />,
//       title: "Baked Fresh Daily",
//       desc: "Freshly baked bread every day with premium ingredients.",
//     },

//     {
//       icon: <FaStore />,
//       title: "Great Value",
//       desc: "Best quality products at affordable prices.",
//     },

//     {
//       icon: <FaSchool />,
//       title: "Institutions",
//       desc: "Serving schools, colleges and hotels daily.",
//     },

//     {
//       icon: <FaTruck />,
//       title: "Fast Delivery",
//       desc: "Fresh bakery products delivered to your doorstep.",
//     },

//     {
//       icon: <FaBox />,
//       title: "Bulk Orders",
//       desc: "No order is too large for our bakery team.",
//     },
//   ];

//   return (
//     <section className="features">

//       <div className="title">
//         <h1>
//           We Bake Fresh Handmade Bread,
//           <br />
//           Pastries & Cakes Every Day
//         </h1>
//       </div>

//       <div className="card-container">
//         {features.map((item, index) => (
//           <div className="card" key={index}>
//             <div className="icon">{item.icon}</div>

//             <h3>{item.title}</h3>

//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }

// export default Features;