import React from 'react'
import CarModelPage from '../CarModelPage';
import Floor_Mat from '../../images/Hyundai/creta/All Model/all weather mat.jpg'
import Back_Seat_Organizer from '../../images/Hyundai/creta/All Model/back seat organizer.jpg'
import Body_Cover from '../../images/Hyundai/creta/All Model/body cover.jpg'
import Boot_Mat from '../../images/Hyundai/creta/All Model/boot mat.jpg'
import Bumper_Corner_Protector from '../../images/Hyundai/creta/All Model/bumper corner protector.jpg'
import Door_Visor from '../../images/Hyundai/creta/All Model/door visor.jpg'
import Height_Adjuster from '../../images/Hyundai/creta/All Model/height adjuster.jpg'
import Roof_Rails from '../../images/Hyundai/creta/All Model/roof rails.jpg'
import Steering_Wheel_Cover from '../../images/Hyundai/creta/All Model/steering wheel cover.jpg'
import White_Seat_Cover from '../../images/Hyundai/creta/All Model/white seat cover.jpg'
import Window_Sunshare from '../../images/Hyundai/creta/All Model/window sunshare.jpg'

const Creta_All_Models = () => {
    const images = [
        { src: Floor_Mat, alt: 'Black Seat Cover', description: 'Custom description for Rubber Floor Mat.' },
        { src: Back_Seat_Organizer, alt: 'Cup Holder', description: 'Custom description for Interior Roof Light.' },
        { src: Body_Cover, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Boot_Mat, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Bumper_Corner_Protector, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Door_Visor, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Height_Adjuster, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Roof_Rails, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Steering_Wheel_Cover, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: White_Seat_Cover, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
        { src: Window_Sunshare, alt: 'Reverse Camera', description: 'Custom description for Wipers.' },
      ];
    
      return <CarModelPage images={images} />;
}

export default Creta_All_Models
