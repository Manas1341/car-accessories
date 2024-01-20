import React from 'react';
import CarModelPage from '../CarModelPage';
import Sill_Plate from '../../images/tata/altroz/All Models/altroz1-sil-plate-550x550w.jpg.webp';
import Floor_Mats from '../../images/tata/altroz/All Models/altroz-550x550.jpg.webp';
import Handle_Chromes from '../../images/tata/altroz/All Models/altroz-550x550h.jpg.webp';
import Window_Chromes from '../../images/tata/altroz/All Models/altroz-550x550w.jpg.webp';
import MudFlap from '../../images/tata/altroz/All Models/altroz-mudflap-550x550w.jpg.webp';
import ArmRest from '../../images/tata/altroz/All Models/beige-console-car-armrest-550x550w.jpeg.webp';
import Seat_Covers from '../../images/tata/altroz/All Models/car-seat-cover-premium-black-550x550h.jpg.webp';
import Tail_Lamp from '../../images/tata/altroz/All Models/tata-altroz-2020-tail-lamp-550x550w.jpg.webp';
import Body_Cover from '../../images/tata/altroz/All Models/tata-altroz-body-cover-550x550w.jpg.webp';
import LED_DRLlight from '../../images/tata/altroz/All Models/tata-altroz-led-drl-light-550x550.jpeg.webp';
import Safety_Guard from '../../images/tata/altroz/All Models/tata-altroz-safety-guard-550x550.jpg.webp';
import Wind_Visor from '../../images/tata/altroz/All Models/wind-visor-silver-line-altroz-2020-550x550w.jpg.webp';

const Altroz_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Sill_Plate, alt: 'Sill Plate', description: 'Custom description for Sill Plate.' },
    { src: Floor_Mats, alt: 'Floor Mats', description: 'Custom description for Floor Mats.' },
    { src: Handle_Chromes, alt: 'Handle Chromes', description: 'Custom description for Handle Chromes.' },
    { src: Window_Chromes, alt: 'Window Chromes', description: 'Custom description for Window Chromes.' },
    { src: MudFlap, alt: 'Mud Flap', description: 'Custom description for Mud Flap.' },
    { src: ArmRest, alt: 'Arm Rest', description: 'Custom description for Arm Rest.' },
    { src: Seat_Covers, alt: 'Seat Covers', description: 'Custom description for Seat Covers.' },
    { src: Tail_Lamp, alt: 'Tail Lamp', description: 'Custom description for Tail Lamp.' },
    { src: Body_Cover, alt: 'Body Cover', description: 'Custom description for Body Cover.' },
    { src: LED_DRLlight, alt: 'LED DRL Light', description: 'Custom description for LED DRL Light.' },
    { src: Safety_Guard, alt: 'Safety Guard', description: 'Custom description for Safety Guard.' },
    { src: Wind_Visor, alt: 'Wind Visor', description: 'Custom description for Wind Visor.' },
  ];

  return <CarModelPage images={images} />;
};

export default Altroz_All_Models;
