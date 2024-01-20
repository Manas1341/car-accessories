import React from 'react';
import CarModelPage from '../CarModelPage';
import Exterior_FrontLogo from '../../images/tata/tiago/base/tiago-exterior-front-logo-2.webp';
import Exterior_Orvm_Blinker from '../../images/tata/tiago/base/tiago-exterior-orvm-blinker-2.webp';
import Alloy_18inch_Wheels from '../../images/tata/tiago/base/tiago-exterior-wheel-18.webp';
import Cup_Holders from '../../images/tata/tiago/base/tiago-interior-cup-holders-2.webp';
import Infotainment_System from '../../images/tata/tiago/base/tiago-interior-infotainment-system-4.webp';
import Steering_AudioControls from '../../images/tata/tiago/base/tiago-interior-left-steering-mounted-controls-2.webp';
import Cabin_LightControls from '../../images/tata/tiago/base/tiago-interior-roof-mounted-controls-sunroof-cabin-light-controls.webp';
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

const Tiago_Base_Model = () => {
  const baseModelImages = [
    { src: Exterior_FrontLogo, alt: 'Exterior Front Logo', description: 'Custom description for Exterior Front Logo.' },
    { src: Exterior_Orvm_Blinker, alt: 'Exterior Orvm Blinker', description: 'Custom description for Exterior Orvm Blinker.' },
    { src: Alloy_18inch_Wheels, alt: 'Alloy 18inch Wheels', description: 'Custom description for Alloy 18inch Wheels.' },
    { src: Cup_Holders, alt: 'Cup Holders', description: 'Custom description for Cup Holders.' },
    { src: Infotainment_System, alt: 'Infotainment System', description: 'Custom description for Infotainment System.' },
    { src: Steering_AudioControls, alt: 'Steering AudioControls', description: 'Custom description for Steering AudioControls.' },
    { src: Cabin_LightControls, alt: 'Cabin Light Controls', description: 'Custom description for Cabin Light Controls.' },
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

  return <CarModelPage images={baseModelImages} />;
};

export default Tiago_Base_Model;
