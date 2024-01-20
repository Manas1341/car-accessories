import React from 'react';
import CarModelPage from '../CarModelPage';
import Alloy_Wheels from '../../images/tata/safari/base model/Alloy Wheels.webp';
import Exterir_Antenna from '../../images/tata/safari/base model/safari-exterior-antenna.webp';
import Exterior_Lamp from '../../images/tata/safari/base model/safari-exterior-daytime-running-lamp-drl.webp';
import Front_Logo from '../../images/tata/safari/base model/safari-exterior-front-logo.webp';
import Grille from '../../images/tata/safari/base model/safari-exterior-grille-2.webp';
import Steering_Controls from '../../images/tata/safari/base model/safari-interior-right-steering-mounted-controls-2.webp';
import Headlight from '../../images/tata/safari/base model/shopping.webp';
import Matress from '../../images/tata/safari/All Models/51q5taxN-TL.jpg';
import Puddle_Lights from '../../images/tata/safari/All Models/61vhzeqWUnL._SX679_.jpg';
import Window_SunShade from '../../images/tata/safari/All Models/71h+PtWcS3L._SX679_.jpg';
import Safari_Logo from '../../images/tata/safari/All Models/81qbcgCYfDL._SX679_.jpg';
import Arm_Rest from '../../images/tata/safari/All Models/car-armrest-bmw-type-black-550x550.jpg.webp';
import Seat_Cover from '../../images/tata/safari/All Models/car-seat-cover-black-with-yellow-thread-550x550h.jpg.webp';
import Infotenment from '../../images/tata/safari/All Models/dsp-hardware-motorbhp-android-stereo-550x550.jpg.webp';
import Floor_Mat from '../../images/tata/safari/All Models/safari-550x550.jpg.webp';
import Chrome_Combo from '../../images/tata/safari/All Models/safari-2021-chrome-combo-kit-1-550x550w.jpg.webp';
import Wipers from '../../images/tata/safari/All Models/scorpio-wiper_1-550x550w.jpg.webp';
import Mud_Flap from '../../images/tata/safari/All Models/tata-safari-2021-mud-flap-550x550.jpeg.webp';
import Window_Wiser from '../../images/tata/safari/All Models/wind-visor-silver-line-safari-2021-550x550h.jpg.webp';

const Safari_Base_Model = () => {
  const safariBaseModelImages = [
    { src: Alloy_Wheels, alt: 'Alloy Wheels', description: 'Custom description for Alloy Wheels.' },
    { src: Exterir_Antenna, alt: 'Exterior Antenna', description: 'Custom description for Exterior Antenna.' },
    { src: Exterior_Lamp, alt: 'Exterior Lamp', description: 'Custom description for Exterior Lamp.' },
    { src: Front_Logo, alt: 'Front Logo', description: 'Custom description for Front Logo.' },
    { src: Grille, alt: 'Grille', description: 'Custom description for Grille.' },
    { src: Steering_Controls, alt: 'Steering Controls', description: 'Custom description for Steering Controls.' },
    { src: Headlight, alt: 'Headlight', description: 'Custom description for Headlight.' },
    { src: Matress, alt: 'Matress', description: 'Custom description for Matress.' },
    { src: Puddle_Lights, alt: 'Puddle Lights', description: 'Custom description for Puddle Lights.' },
    { src: Window_SunShade, alt: 'Window SunShade', description: 'Custom description for Window SunShade.' },
    { src: Safari_Logo, alt: 'Safari Logo', description: 'Custom description for Safari Logo.' },
    { src: Arm_Rest, alt: 'Arm Rest', description: 'Custom description for Arm Rest.' },
    { src: Seat_Cover, alt: 'Seat Cover', description: 'Custom description for Seat Cover.' },
    { src: Infotenment, alt: 'Infotainment', description: 'Custom description for Infotainment.' },
    { src: Floor_Mat, alt: 'Floor Mat', description: 'Custom description for Floor Mat.' },
    { src: Chrome_Combo, alt: 'Chrome Combo', description: 'Custom description for Chrome Combo.' },
    { src: Wipers, alt: 'Wipers', description: 'Custom description for Wipers.' },
    { src: Mud_Flap, alt: 'Mud Flap', description: 'Custom description for Mud Flap.' },
    { src: Window_Wiser, alt: 'Window Wiser', description: 'Custom description for Window Wiser.' },
  ];

  return <CarModelPage images={safariBaseModelImages} />;
}

export default Safari_Base_Model;
