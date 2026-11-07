import React,{useState} from 'react'
import styles from './Navbar.module.css'
import rslogo from '../../assets/RS LOGO.jpg'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const[open,setOpen]=useState(false)


  return (
    <nav className={styles.navigation}>
        <Link  to="/"><img className={styles.rslogo} src={rslogo} alt="company logo" /></Link>
        <div className={styles.icon} onClick={()=>setOpen(!open)}><GiHamburgerMenu/></div>
      <ul  className={`${open?styles.show:styles.list}`} >
        
        
        <li> <Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/about">About us</Link></li>
        <li><Link className={styles.link} to="/contact">Contact</Link></li>
        <li><Link className={styles.link} to="/carousel">Gallery</Link></li>
        <li className={styles.services}><Link className={styles.link} to="/services">Services ∇</Link>
            <ul className={styles.dropdown}>
                <li>Robot installation</li>
                <li>Commissioning</li>
                <li>Programming</li>
                <li>Replacement</li>
                <li>Troubleshooting</li>
                <li>Safty setup</li>
                <li>Automation</li>
                <li>Ramp up & launch</li>
                <li>Customer training</li>
            </ul>
        </li>
        <li><Link className={styles.link} to="/work">Our works</Link></li>
        <li className={styles.expertise}><Link className={styles.link} to="/expertise">Our Expertise ∇</Link>
            <ul className={styles.dropdown2}>
                <li>Industrial Robot</li>
                <li>BIW Automation</li>
                <li>Robot Trajectory</li>
                <li>I/O mapping</li>
                <li>7th & 8th axes</li>
                <li>PLC Robot</li>
                <li>Optimization</li>
                <li>programming</li>
                <li>Customer training</li>
            </ul>
        </li>
        
      </ul>
      <div className={styles.buttons}>
        <button className={styles.login}><Link className={styles.link} to="/contact">Log In</Link></button>
        <button className={styles.signup}><Link className={styles.link} to="/contact">Sign Up</Link></button>
      </div>
    </nav>
  )
}

export default Navbar
