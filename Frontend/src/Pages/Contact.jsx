import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import insta from '../images/insta.webp'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import logo from '../images/AutoCustomizeHub.jpg'

import '../CSS/MainPage.css'

const Contact = () => {
    const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#45a049' : '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.3s'
  };
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
      <h1 style={{textAlign:'center'}}>Contact Us</h1>
        <form style={{display:'flex' , flexDirection:'column' , alignItems:'center' , marginTop:'50px'}}>
        <label style={{fontSize:'20px' , marginBottom:'10px'}} htmlFor="name">Name:</label>
        <input style={{width:'300px' , padding:'10px' , marginBottom:'20px',borderRadius:'5px',border:'1px solid grey',fontSize:'16'}} type="text" id="name" name="name" required/>
        
        <label style={{fontSize:'20px' , marginBottom:'10px'}} htmlFor="email">Email:</label>
        <input style={{width:'300px' , padding:'10px' , marginBottom:'20px',borderRadius:'5px',border:'1px solid grey',fontSize:'16'}} type="text" id="email" name="email" required/>
        
        <label style={{fontSize:'20px' , marginBottom:'10px'}} htmlFor="message">Message:</label>
        <textarea style={{width:'300px' , padding:'10px' , marginBottom:'20px',borderRadius:'5px',border:'1px solid grey',fontSize:'16'}} id="message" name="message" required></textarea>
        
        <input  type="submit" value="Submit" style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
        </form>
    </div>
  )
}

export default Contact
