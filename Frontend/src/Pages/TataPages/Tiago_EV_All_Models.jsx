import React from 'react';
import CarModelPage from '../CarModelPage';
import Wipers from '../../images/tata/tiago/All Models/amaze-wiper_1-550x550w.jpg.webp';
import Floor_Mats from '../../images/tata/tiago/All Models/life-long-mat-tiago-2020-550x550h.jpg.webp';
import Body_Cover from '../../images/tata/tiago/All Models/tata-tiago-body-cover-550x550w.jpg.webp';
import Fog_Lamp from '../../images/tata/tiago/All Models/tata-tiago-fog-lamp-550x550w.jpg.webp';
import LED_DRLLights from '../../images/tata/tiago/All Models/tata-tiago-led-drl-lights-550x550.jpeg.webp';
import Side_Cladding from '../../images/tata/tiago/All Models/tata-tiago-side-cladding-550x550w.jpg.webp';
import Tail_Lamp from '../../images/tata/tiago/All Models/tata-tiago-tail-lamp-550x550w.jpg.webp';
import Window_Chromes from '../../images/tata/tiago/All Models/tiago-550x550w.jpg (1).webp';
import Handles from '../../images/tata/tiago/All Models/tiago-550x550w.jpg.webp';
import Chrome_Combo from '../../images/tata/tiago/All Models/tiago-2020-chrome-combo-kit-550x550h.jpg.webp';
import Sill_Plate from '../../images/tata/tiago/All Models/tiago-sil-plate-550x550h.jpg.webp';

const Tiago_EV_All_Models = () => {
  const evAllModelsImages = [
    { src: Wipers, alt: 'Wipers', description: 'Custom description for Wipers.' },
    { src: Floor_Mats, alt: 'Floor Mats', description: 'Custom description for Floor Mats.' },
    { src: Body_Cover, alt: 'Body Cover', description: 'Custom description for Body Cover.' },
    { src: Fog_Lamp, alt: 'Fog Lamp', description: 'Custom description for Fog Lamp.' },
    { src: LED_DRLLights, alt: 'LED DRLLights', description: 'Custom description for LED DRLLights.' },
    { src: Side_Cladding, alt: 'Side Cladding', description: 'Custom description for Side Cladding.' },
    { src: Tail_Lamp, alt: 'Tail Lamp', description: 'Custom description for Tail Lamp.' },
    { src: Window_Chromes, alt: 'Window Chromes', description: 'Custom description for Window Chromes.' },
    { src: Handles, alt: 'Handles', description: 'Custom description for Handles.' },
    { src: Chrome_Combo, alt: 'Chrome Combo', description: 'Custom description for Chrome Combo.' },
    { src: Sill_Plate, alt: 'Sill Plate', description: 'Custom description for Sill Plate.' },
  ];

  return <CarModelPage images={evAllModelsImages} />;
};

export default Tiago_EV_All_Models;
