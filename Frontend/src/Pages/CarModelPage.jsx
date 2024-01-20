import React, { useState } from 'react';
import '../CSS/SecondPage.css';


const CarModelPage = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="page-content-container">
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-card" onClick={() => openImage(index)}>
              <img src={image.src} className='page-content-image' alt={image.alt} />
              <div className="card-content">
                <p>{image.heading}</p>
                <p>{image.description}</p>
                {/* Add more custom content if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeImage}>
          <div className="lightbox-content">
            <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default CarModelPage;
