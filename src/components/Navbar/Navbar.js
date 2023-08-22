import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="arturo kim logo"/>
      <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="portfolio-content" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  )
}