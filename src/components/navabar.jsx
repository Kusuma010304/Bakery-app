import { FaSearch, FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-left">
        <li><a href="#about">About Us</a></li>
        <li className="dropdown">
          Pages
          <ul className="dropdown-menu">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/chefs">Chefs</Link></li>
            <li><Link to="/workshop">Workshop</Link></li>
          </ul>
        </li>
        <li><a href="#gallery">Our Bread</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
       <h1>Taste the best😋</h1>
      <div className="icons">
        <FaSearch aria-label="Search" />
        <div className="cart-icon-wrapper">
          <FaShoppingCart aria-label="Cart" />
          <span className="cart-count-badge">0</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;