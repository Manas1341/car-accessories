import React from 'react';
import CarModelPage from '../CarModelPage';
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

const Safari_All_Models = () => {
  const images = [
    { src: Matress, alt: 'Matress', description: 'Custom description for Matress.' },
    { src: Puddle_Lights, alt: 'Puddle_Lights', description: 'Custom description for Puddle_Lights.' },
    { src: Window_SunShade, alt: 'Window_SunShade', description: 'Custom description for Window_SunShade.' },
    { src: Safari_Logo, alt: 'Safari_Logo', description: 'Custom description for Safari_Logo.' },
    { src: Arm_Rest, alt: 'Arm_Rest', description: 'Custom description for Arm_Rest.' },
    { src: Seat_Cover, alt: 'Seat_Cover', description: 'Custom description for Seat_Cover.' },
    { src: Infotenment, alt: 'Infotenment', description: 'Custom description for Infotenment.' },
    { src: Floor_Mat, alt: 'Floor_Mat', description: 'Custom description for Floor_Mat.' },
    { src: Chrome_Combo, alt: 'Chrome_Combo', description: 'Custom description for Chrome_Combo.' },
    { src: Wipers, alt: 'Wipers', description: 'Custom description for Wipers.' },
    { src: Mud_Flap, alt: 'Mud_Flap', description: 'Custom description for Mud_Flap.' },
    { src: Window_Wiser, alt: 'Window_Wiser', description: 'Custom description for Window_Wiser.' },
  ];

  return <CarModelPage images={images} />;
};

export default Safari_All_Models;
