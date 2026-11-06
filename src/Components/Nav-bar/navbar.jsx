import "./navbar.css";
import icon from "./icon.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="/" className="logo-container">
          <img src={icon} alt="Digital Impacts Logo" className="logo-image" />
        </a>
        <div className="nav-menu">
          <a href="/" className="nav-item">Home</a>
          <a href="/services" className="nav-item">Services</a>
          <a href="/about-us" className="nav-item">About Us</a>
          <a href="/portfolio" className="nav-item">Portfolio</a>
        </div>
        <div className="nav-button">
          <a href="/contact" className="nav-btn">Contact Us</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
