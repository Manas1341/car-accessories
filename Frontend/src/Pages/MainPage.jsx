import React from 'react'
import '../CSS/MainPage.css'
import image1 from '../images/image-1 (2).jpg'
import insta from '../images/insta.webp'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'

import diverse from '../images/diverse.jpg'
import convinence from '../images/convinence.jpg'
import logo from '../images/AutoCustomizeHub.jpg'
import { Link } from 'react-router-dom'
import BrandCarousel from './BrandCarousel'
const MainPage = () => {
  return (
    <div>
      <header className='header'>
        <div className='LOGO'>
            <img src={logo} className='logo-img' alt="" />
        </div>
        <div>
            <ul className='Navbar' >
                <li className='nav-item'>
                    <Link className='link-item' to="/">
                        Home Page
                    </Link>
                </li>
                <li className='nav-item'>
                <Link className='link-item' to="/aboutus">
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className='link-item' to="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>

        <div className='Navbar-2'>
            <Link>
                <img src={insta} className='header-img' alt="Instagram" />
            </Link>
            <Link>
                <img src={fb} className='header-img' alt="FaceBook" />
            </Link>
            <Link>
                <img src={twitter} className='header-img' alt="FaceBook" />
            </Link>
        </div>
        
      </header>

      <div className='Brands'>
        <div className='brand-center' >    
            <p style={{fontSize:'32px' , color:'#EE3B24' , fontWeight:'bold' }}>Top Brands&nbsp;</p>
            <p style={{fontSize:'32px' , fontWeight:'bold' }}> Available</p>
        </div>

        <BrandCarousel/>
        
      </div>
        <div>
            <div className='speacility'>
                <p style={{fontSize:'32px' , color:'#EE3B24' , fontWeight:'bold' }}>Why&nbsp;</p>
                <p style={{fontSize:'32px' ,  fontWeight:'bold' }}> Choose Us?</p>            
            </div>
            <div className='spec'>
                <div className='spec-content'>
                    <img src={diverse} alt="Diverse Selection" className='spec-image' />
                    <div className='text-center'>
                        <h2>Diverse Selection</h2>
                        <p>Variety of car accessories for all types of Vehicles</p>
                    </div>
                </div>
                <div className='spec-content'>
                    <img src={convinence} alt="Diverse Selection" className='spec-image' />
                    <div className='text-center'>
                        <h2>Convenience</h2>
                        <p>Shop conveniently online for hassle-free car enhancements.</p>
                    </div>
                </div>
            </div>
        </div>
        

      <div className='down-image' >
        <img className='img' src={image1} alt="" />
      </div>

      <footer className='footer'>
        <div className='main-footer' >
            <div className='sec-footer'>
                <h3 style={{color:'#D7D7D7', fontSize:'20px'}}>Company Name</h3>
                <p></p>
            </div>
            <div className='sec-footer'>
                <h3 style={{color:'#D7D7D7',fontSize:'20px'}}>PRODUCTS</h3>
            </div>
            
            <div className='sec-footer'>
                <h3 style={{color:'#D7D7D7',fontSize:'20px'}}>Contact</h3>
            </div>
            
        </div>
      </footer>
    </div>
  )
}

export default MainPage
