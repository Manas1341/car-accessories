import React from 'react'
import { Link } from 'react-router-dom'
import insta from '../images/insta.webp'
import fb from '../images/fb.png'
import twitter from '../images/twitter.png'
import logo from '../images/AutoCustomizeHub.jpg'
import '../CSS/MainPage.css'
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  max-width: 1000px;
  margin: 50px auto;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardBody = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardTitle = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardHeading = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  line-height: 1.6;
`;

const AboutUs = () => {
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

      <AboutUsContainer>
      <Card>
        <CardBody>
          <CardTitle>Welcome to Car Automization Hub</CardTitle>
          <CardText>
            Car Automization Hub is your premier destination for transforming your vehicle into a
            state-of-the-art masterpiece. We blend innovation, technology, and passion to provide
            unparalleled car customization services.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardHeading>Our Commitment</CardHeading>
          <CardText>
            Our team of skilled professionals is committed to delivering exceptional results, ensuring
            that your car not only meets but surpasses your expectations. We take pride in our attention
            to detail and strive for excellence in every project.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardHeading>Comprehensive Solutions</CardHeading>
          <CardText>
            Whether you're seeking to enhance your car's performance, elevate its exterior appearance,
            or upgrade its audio system, Car Automization Hub is your go-to solution. Join us on this
            exciting journey, and let's redefine your driving experience together.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardHeading>The Future of Car Customization</CardHeading>
          <CardText>
            Embrace the future of car customization with Car Automization Hub. We invite you to embark on
            a thrilling adventure where cutting-edge technology meets artistic expression, resulting in
            a vehicle that reflects your unique style and preferences.
          </CardText>
        </CardBody>
      </Card>
    </AboutUsContainer>
    </div>
  )
}

export default AboutUs
