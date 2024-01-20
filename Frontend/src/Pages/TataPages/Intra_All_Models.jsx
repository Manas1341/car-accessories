import React from 'react';
import CarModelPage from '../CarModelPage';
import Wipers from '../../images/tata/intra/51PmTz8r-jL.jpg';
import Side_Mirrors from '../../images/tata/intra/61v96hkCiEL._AC_UF1000,1000_QL80_.jpg';
import Floor_Mat from '../../images/tata/intra/81GeA9cH9hL._SX679_.jpg';
import Alloy_Wheels from '../../images/tata/intra/tata-intra-v30-gallery-slider-tyre.jpg';
import FogLamp_HeadLight from '../../images/tata/intra/tata-intra-v30-head-light.jpg';

const Intra_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Wipers, alt: 'Wipers', description: 'Custom description for Wipers.' },
    { src: Side_Mirrors, alt: 'Side Mirrors', description: 'Custom description for Side Mirrors.' },
    { src: Floor_Mat, alt: 'Floor Mat', description: 'Custom description for Floor Mat.' },
    { src: Alloy_Wheels, alt: 'Alloy Wheels', description: 'Custom description for Alloy Wheels.' },
    { src: FogLamp_HeadLight, alt: 'Fog Lamp Head Light', description: 'Custom description for Fog Lamp Head Light.' },
  ];

  return <CarModelPage images={images} />;
};

export default Intra_All_Models;
