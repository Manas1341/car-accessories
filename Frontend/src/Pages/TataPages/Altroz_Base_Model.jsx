import React from 'react';
import CarModelPage from '../CarModelPage';
import Exterior_Anteena from '../../images/tata/altroz/base/altroz-exterior-antenna.webp';
import Exterior_Headlight from '../../images/tata/altroz/base/altroz-exterior-headlight.webp';
import Exterior_RearLogo from '../../images/tata/altroz/base/altroz-exterior-rear-logo.webp';
import Alloy_Wheel from '../../images/tata/altroz/base/altroz-exterior-wheel.webp';
import Infotainment_System from '../../images/tata/altroz/base/altroz-interior-infotainment-system.webp';
import RearViewMirror_OrvmControls from '../../images/tata/altroz/base/altroz-interior-outer-rear-view-mirror-orvm-controls.webp';
import RearRow_ChargingPoint from '../../images/tata/altroz/base/altroz-interior-rear-row-charging-point.webp';
import Steering_AudioControls from '../../images/tata/altroz/base/tata-altroz-steering-mounted-audio-controls-146.webp';
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
    { src: Exterior_Anteena, alt: 'Exterior Anteena', description: 'Custom description for Exterior Anteena.' },
    { src: Exterior_Headlight, alt: 'Exterior Headlight', description: 'Custom description for Exterior Headlight.' },
    { src: Exterior_RearLogo, alt: 'Exterior Rear Logo', description: 'Custom description for Exterior Rear Logo.' },
    { src: Alloy_Wheel, alt: 'Alloy Wheel', description: 'Custom description for Alloy Wheel.' },
    { src: Infotainment_System, alt: 'Infotainment System', description: 'Custom description for Infotainment System.' },
    { src: RearViewMirror_OrvmControls, alt: 'Rear View Mirror & Orvm Controls', description: 'Custom description for Rear View Mirror & ORVM Controls.' },
    { src: RearRow_ChargingPoint, alt: 'Rear Row Charging Point', description: 'Custom description for Rear Row Charging Point.' },
    { src: Steering_AudioControls, alt: 'Steering Audio Controls', description: 'Custom description for Steering Audio Controls.' },
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
