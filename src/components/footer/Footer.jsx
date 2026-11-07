import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <ul className={styles.links}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/about">About</Link></li>
        <li><Link className={styles.link} to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.socialmeadias}>
        <FaGithubSquare/>
        <BsFacebook/>
        <FaTwitter/>
        <FaLinkedin/>
        <FaWhatsapp/>
      </div>
      <p>© {new Date().getFullYear()} Robosoft Services</p>

      
    </footer>
  );
};

export default Footer;
