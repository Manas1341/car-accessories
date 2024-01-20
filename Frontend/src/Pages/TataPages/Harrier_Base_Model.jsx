import React from 'react';
import CarModelPage from '../CarModelPage';
import Alloy_Wheels from '../../images/tata/harrier/base model/alloy-wheels-200x200.jpg';
import Fog_Lamp from '../../images/tata/harrier/base model/harrier-exterior-front-fog-lamp.webp';
import HeadLights from '../../images/tata/harrier/base model/HeadLights.webp';
import Stearing_AudioControls from '../../images/tata/harrier/base model/tata-harrier-steering-mounted-audio-controls55.webp';
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

const Harrier_Base_Model = () => {
  // Import the images dynamically
  const images = [
    { src: Alloy_Wheels, alt: 'Alloy Wheels', description: 'Custom description for Alloy Wheels.' },
    { src: Fog_Lamp, alt: 'Fog Lamp', description: 'Custom description for Fog Lamp.' },
    { src: HeadLights, alt: 'HeadLights', description: 'Custom description for HeadLights.' },
    { src: Stearing_AudioControls, alt: 'Steering Audio Controls', description: 'Custom description for Steering Audio Controls.' },
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

export default Harrier_Base_Model;
