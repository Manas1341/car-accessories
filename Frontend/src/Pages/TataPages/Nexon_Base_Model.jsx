import React from 'react';
import CarModelPage from '../CarModelPage';
import Car_Cover from '../../images/tata/nexon/Base Model/Car Cover.webp';
import Chrome_Accessories from '../../images/tata/nexon/Base Model/nexon-combo-kit-550x550h.jpg.webp';
import SmallSize_ArmRest from '../../images/tata/nexon/All Models/51VJqqIQ8dL._SX679_.jpg';
import Doors_ShockAbsorbers from '../../images/tata/nexon/All Models/61FIN9nUy8L._SX679_.jpg';
import LogoName from '../../images/tata/nexon/All Models/61RGUEq3OIL._SX679_.jpg';
import BootSpace_Mat from '../../images/tata/nexon/All Models/61Sojt3h+zS._SX679_.jpg';
import Front_Chromes from '../../images/tata/nexon/All Models/71-QuFjdnAL._SX679_.jpg';
import Nexon_Stickers from '../../images/tata/nexon/All Models/71ftpiMlf2L._SX679_.jpg';
import Nexon_BodyCover from '../../images/tata/nexon/All Models/71j3QgfxQtL._SX679_.jpg';
import Key_Cover from '../../images/tata/nexon/All Models/81mJ-gM2SHL._SX679_.jpg';

const Nexon_Base_Model = () => {
  const images = [
    { src: Car_Cover, alt: 'Car_Cover', description: 'Custom description for Car_Cover.' },
    { src: Chrome_Accessories, alt: 'Chrome_Accessories', description: 'Custom description for Chrome_Accessories.' },
    { src: SmallSize_ArmRest, alt: 'SmallSize_ArmRest', description: 'Custom description for SmallSize_ArmRest.' },
    { src: Doors_ShockAbsorbers, alt: 'Doors_ShockAbsorbers', description: 'Custom description for Doors_ShockAbsorbers.' },
    { src: LogoName, alt: 'LogoName', description: 'Custom description for LogoName.' },
    { src: BootSpace_Mat, alt: 'BootSpace_Mat', description: 'Custom description for BootSpace_Mat.' },
    { src: Front_Chromes, alt: 'Front_Chromes', description: 'Custom description for Front_Chromes.' },
    { src: SmallSize_ArmRest, alt: 'SmallSize_ArmRest', description: 'Custom description for SmallSize_ArmRest.' },
    { src: Nexon_Stickers, alt: 'Nexon_Stickers', description: 'Custom description for Nexon_Stickers.' },
    { src: Nexon_BodyCover, alt: 'Nexon_BodyCover', description: 'Custom description for Nexon_BodyCover.' },
    { src: Key_Cover, alt: 'Key_Cover', description: 'Custom description for Key_Cover.' },
  ];

  return <CarModelPage images={images} />;
};

export default Nexon_Base_Model;
