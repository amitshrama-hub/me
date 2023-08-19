import React from 'react'
import '../componentsCSS/Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BiLogoFacebook} from 'react-icons/bi'
import {FiInstagram} from 'react-icons/fi'
import {RiMessengerLine} from 'react-icons/ri'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Amit Sharma</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://www.facebook.com/profile.php?id=100064918011518&sk=about" target='_blank'><BiLogoFacebook/></a>
        <a href="https://www.linkedin.com/in/amit-sharma-5957ba223" target='_blank'><BsLinkedin/></a>
        <a href="https://www.instagram.com/parashar__amit_/" target='_blank'><FiInstagram/></a>
        <a href="https://m.me/id=100064918011518" target='_blank'><RiMessengerLine/></a>
        
        

      </div>

      <div className="footer_copyright">
        <small>&copy; AMIT SHARMA. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
