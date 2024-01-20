import React from 'react';
import CarModelPage from '../CarModelPage';  // Assuming CarModelPage is in the same directory
import Door_Visor from '../../images/tata/Yodha/Door_Visor.jpg';
import Door_Guard from '../../images/tata/Yodha/Door_Guard.jpg';
import Car_Cover from '../../images/tata/Yodha/Car_Cover.jpg';
import AntiTheft_Image from '../../images/tata/Yodha/Anti_Theft_Image.jpg';
import Airflowvent_Cover from '../../images/tata/Yodha/Air_Flow_Vent_Cover.jpg';

const Yodha_All_Models = () => {
  const yodhaAllModelsImages = [
    { src: Door_Visor, alt: 'Door Visor' },
    { src: Door_Guard, alt: 'Door Guard' },
    { src: Car_Cover, alt: 'Car Cover' },
    { src: AntiTheft_Image, alt: 'Anti-Theft Image' },
    { src: Airflowvent_Cover, alt: 'Air Flow Vent Cover' },
  ];

  return <CarModelPage images={yodhaAllModelsImages} />;
}

export default Yodha_All_Models;
