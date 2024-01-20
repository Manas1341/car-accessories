import React from 'react'
import CarModelPage from '../CarModelPage';
import Mat_3D from '../../images/Hyundai/alcazar/3D mat.jpg'
import Floor_Mat from '../../images/Hyundai/alcazar/all weather mat.jpg'
import Back_Seat_Organizer from '../../images/Hyundai/alcazar/back seat organizer.jpg'
import Body_Cover from '../../images/Hyundai/alcazar/body cover.jpg'
import Boot_Mat from '../../images/Hyundai/alcazar/boot mat.jpg'
import Car_Document_Organizer from '../../images/Hyundai/alcazar/car document organizer.jpg'
import Door_Side_Moulding from '../../images/Hyundai/alcazar/door side moulding.jpg'
import Door_Visor from '../../images/Hyundai/alcazar/door visor.jpg'
import Height_Adjuster from '../../images/Hyundai/alcazar/height adjuster.jpg'
import Seat_Cover from '../../images/Hyundai/alcazar/seat cover.jpg'
import Side_Step from '../../images/Hyundai/alcazar/side step.jpg'
import Sunshade from '../../images/Hyundai/alcazar/sunshade.jpg'


const Alcazar_All_Models = () => {
    const images = [
        { src: Mat_3D, alt: 'Black Seat Cover', description: 'Custom description for Rubber Floor Mat.' },
        { src: Floor_Mat, alt: 'Cup Holder', description: 'Custom description for Interior Roof Light.' },
        { src: Back_Seat_Organizer, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Body_Cover, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Boot_Mat, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Car_Document_Organizer, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Door_Side_Moulding, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Door_Visor, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Height_Adjuster, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Seat_Cover, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Side_Step, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Sunshade, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
      ];
    
      return <CarModelPage images={images} />;
}

export default Alcazar_All_Models
