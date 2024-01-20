// CompanyPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/AutoCustomizeHub.jpg';
import YourComponent from './YourComponent';
import CarDetails from './CarDetails';
import BrandCarousel from './BrandCarousel';

const CompanyPage = ({ company }) => {
  const [selectedDetails, setSelectedDetails] = useState(null);

  const handleSelectModelVariant = (details) => {
    setSelectedDetails(details);
  };

  return (
    <>
      <header className="header">
        <div className="LOGO">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <div>
          <ul className="Navbar">
            <li className="nav-item">
              <Link className="link-item" to="/">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link-item" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link-item" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="container">
        <div className="main-container">
          <div className="sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header"></div>
              <div className="sidebar-content">
                
                <YourComponent onSelectModelVariant={handleSelectModelVariant} company={company}  />
              </div>    
            </div>
          </div>
          <div className="page-content">
            
            {selectedDetails && <CarDetails details={selectedDetails} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
