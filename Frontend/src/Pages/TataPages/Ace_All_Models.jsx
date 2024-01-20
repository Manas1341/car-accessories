import React from 'react';
import CarModelPage from '../CarModelPage';
import Rubber_FloorMat from '../../images/tata/tata ace/61rxtLpnc8L._SX679_.jpg';
import Interior_RoofLight from '../../images/tata/tata ace/71Ai-1bxJ5L._SX679_.jpg';
import Wipers from '../../images/tata/tata ace/71oV1wdFAbL._SX679_.jpg';
import Digital_Clock from '../../images/tata/tata ace/816aR-BQuGL._SX679_.jpg';
import Fiber_BodyParts from '../../images/tata/tata ace/tata-ace-truck-fiber-body-parts-and-accessories-500x500.webp';

const Ace_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Rubber_FloorMat, alt: 'Rubber Floor Mat', description: 'Rubber Floor Mat.' },
    { src: Interior_RoofLight, alt: 'Interior Roof Light', description: 'Interior Roof Light.' },
    { src: Wipers, alt: 'Wipers', description: 'Wipers.' },
    { src: Digital_Clock, alt: 'Digital Clock', description: 'Digital Clock.' },
    { src: Fiber_BodyParts, alt: 'Fiber Body Parts', description: 'Fiber Body Parts.' },
  ];

  return <CarModelPage images={images} />;
};

export default Ace_All_Models;
