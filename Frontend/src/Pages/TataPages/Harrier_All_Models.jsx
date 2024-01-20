import React from 'react';
import CarModelPage from '../CarModelPage';
import Floor_Mats from '../../images/tata/harrier/All Models/4.5d-car-floor-mats-550x550w.jpg.webp';
import Window_Curtains from '../../images/tata/harrier/All Models/41abS6rkTFL._SY300_SX300_QL70_FMwebp_.webp';
import Front_Grill from '../../images/tata/harrier/All Models/41ne9kT4yJL._SX300_SY300_QL70_FMwebp_.webp';
import Seat_Cover from '../../images/tata/harrier/All Models/car-seat-cover-black-with-white-thread-550x550h.jpg.webp';
import Sil_Plate from '../../images/tata/harrier/All Models/harrier1-sil-plate-550x550.jpg.webp';
import Floor_Mat2 from '../../images/tata/harrier/All Models/harrier-550x550.jpg.webp';
import Window_Cromes from '../../images/tata/harrier/All Models/harrier-550x550w.jpg.webp';
import Mud_Flap from '../../images/tata/harrier/All Models/harrier-mudflap-550x550h.jpg.webp';
import Wipers from '../../images/tata/harrier/All Models/harrier-wiper-550x550w.jpg.webp';
import Body_Cover from '../../images/tata/harrier/All Models/tata-harrier-body-cover-550x550w.jpg.webp';

const Harrier_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Floor_Mats, alt: 'Floor Mats', description: 'Custom description for Floor Mats.' },
    { src: Window_Curtains, alt: 'Window Curtains', description: 'Custom description for Window Curtains.' },
    { src: Front_Grill, alt: 'Front Grill', description: 'Custom description for Front Grill.' },
    { src: Seat_Cover, alt: 'Seat Cover', description: 'Custom description for Seat Cover.' },
    { src: Sil_Plate, alt: 'Sill Plate', description: 'Custom description for Sill Plate.' },
    { src: Floor_Mat2, alt: 'Floor Mat', description: 'Custom description for Floor Mat.' },
    { src: Window_Cromes, alt: 'Window Chromes', description: 'Custom description for Window Chromes.' },
    { src: Mud_Flap, alt: 'Mud Flap', description: 'Custom description for Mud Flap.' },
    { src: Wipers, alt: 'Wipers', description: 'Custom description for Wipers.' },
    { src: Body_Cover, alt: 'Body Cover', description: 'Custom description for Body Cover.' },
  ];

  return <CarModelPage images={images} />;
};

export default Harrier_All_Models;
