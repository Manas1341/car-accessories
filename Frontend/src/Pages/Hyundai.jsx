import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import insta from '../images/insta.webp';
import fb from '../images/fb.png';
import twitter from '../images/twitter.png';
import logo from '../images/AutoCustomizeHub.jpg';
import '../CSS/tata.css';
import CarDetails from './CarDetails';


const YourComponent = ({ onSelectModelVariant }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [categories, setCategories] = useState([
    { id: 'suvs', label: "SUV's", cars: [
      { name: 'Hyundai Creta', variants: ['Creta Base Model', 'Creta All Models'] },
      { name: 'Hyundai Alcazar', variants: ['Alcazar All Models'] },
      { name: 'Hyundai Venue', variants: ['Venue Base Model', 'Venue All Models'] },
    ] },
    { id: 'hatchback', label: 'HatchBack', cars: [
      { name: 'Hyundai i10', variants: ['i10 All Models'] },
      { name: 'Hyundai i20', variants: ['i20 Base Model', 'i20 All Models'] },
    ] },
    { id: 'Sedan', label: 'Sedan', cars: [
      { name: 'Hyundai Verna', variants: ['Verna Base Model', 'Verna All Models'] },
    ] },
  ]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSelectedCar('');
    setSelectedModel('');
  };

  const handleCarChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCar(selectedValue);
    setSelectedModel('');
  };

  const handleModelChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedModel(selectedValue);
  
    // Find the selected car and its variants
    const selectedCarData = categories
      .find((category) => category.id === selectedCategory)
      ?.cars.find((car) => car.name === selectedCar);
  
    // Ensure the selected car data exists before proceeding
    if (selectedCarData) {
      // Construct the details object including selectedVariant
      const details = {
        selectedModel: selectedModel,
        selectedVariant: selectedValue,
        // description: /* Add description if available */,
        // accessories: /* Add accessories if available */,
      };
  
      onSelectModelVariant(details);
    }
  };
  

  const handleResetFilters = () => {
    setSelectedCategory('');
    setSelectedCar('');
    setSelectedModel('');
  };

  return (
    <div className="sidebar-content">
      <h3 style={{ textAlign: 'center' }}>Hyundai</h3>

      <ul>
        {/* First Dropdown - Categories */}
        <li>
          <label htmlFor="carCategories">Select Category</label>
          <select id="carCategories" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="" disabled>Select</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </li>

        {/* Second Dropdown - Cars */}
        {selectedCategory && (
          <li>
            <label htmlFor="carModels">Select a Car</label>
            <select id="carModels" value={selectedCar} onChange={handleCarChange}>
              <option value="" disabled>Select</option>
              {categories
                .find((category) => category.id === selectedCategory)
                ?.cars.map((car) => (
                  <option key={car.name} value={car.name}>
                    {car.name}
                  </option>
                ))}
            </select>
          </li>
        )}

        {/* Third Dropdown - Variants */}
        {selectedCar && (
          <li>
            <label htmlFor="carVariants">Select Particular Model</label>
            <select id="carVariants" value={selectedModel} onChange={handleModelChange}>
              <option value="" disabled>Select </option>
              {categories
                .find((category) => category.id === selectedCategory)
                ?.cars.find((car) => car.name === selectedCar)?.variants.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
            </select>
          </li>
        )}
      </ul>

      <button onClick={handleResetFilters}>Reset Filters</button>
    </div>
  );
};


const Hyundai = () => {
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

        <div className="Navbar-2">
          <Link>
            <img src={insta} className="header-img" alt="Instagram" />
          </Link>
          <Link>
            <img src={fb} className="header-img" alt="FaceBook" />
          </Link>
          <Link>
            <img src={twitter} className="header-img" alt="FaceBook" />
          </Link>
        </div>
      </header>

      <div className="container">
          <div className="sidebar">
            <div className="sidebar-card">
              <div className="sidebar-header"></div>
              <div className="sidebar-content">
                <YourComponent onSelectModelVariant={handleSelectModelVariant} />
              </div>    
            </div>
          </div>
          <div className="page-content">
          {selectedDetails && <CarDetails details={selectedDetails} companyFolder="HyundaiPages" />}
          </div>
      </div>
    </>
  );
};

export default Hyundai;
