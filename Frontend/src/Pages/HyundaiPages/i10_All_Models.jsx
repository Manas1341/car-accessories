import React from 'react'
import CarModelPage from '../CarModelPage';
import Head_Lamp_Garnish from '../../images/Hyundai/i10/1650-T7S39AP000_Head-Lamp-Garnish_fiery-red_.jpg'
import Fog_Light_Cover from '../../images/Hyundai/i10/1652-T7S39AP001_Fog-Light-Cover-Garnish_fiery-red_.jpg'
import Tail_Lamp_Garnish from '../../images/Hyundai/i10/1653-T7S24AP000_Tail-Lamp-Garnish_fiery-red.jpg'
import Floor_Mat from '../../images/Hyundai/i10/all weather mat.jpg'
import Rear_Boot_Granish from '../../images/Hyundai/i10/1731-T7S28AP001_Rear-Boot-Garnish---Chrome_fiery-red_-(10).jpg'
import Bumper_Corner_Protector from '../../images/Hyundai/i10/1731-T7S28AP001_Rear-Boot-Garnish---Chrome_fiery-red_-(10).jpg'
import Body_Cover from '../../images/Hyundai/i10/body cover.jpg'
import Cushion from '../../images/Hyundai/i10/cushion.jpg'
import Door_Still_Guard from '../../images/Hyundai/i10/door sill guard.jpg'
import Door_Visor from '../../images/Hyundai/i10/door visor.jpg'
import Head_Rest_Cushion from '../../images/Hyundai/i10/head rest cushion.jpg'
import Mud_Flaps from '../../images/Hyundai/i10/mud flaps.jpg'
import Seat_Cover from '../../images/Hyundai/i10/seat cover.jpg'
import Steering_Wheel_Cover from '../../images/Hyundai/i10/steering wheel cover.jpg'

const i10_All_Models = () => {
  const images = [
    { src: Head_Lamp_Garnish, alt: 'Black Seat Cover', heading: 'Head Lamp Garnish', description: 'Stylish accessory to enhance front aesthetics.' },
    { src: Fog_Light_Cover, alt: 'Cup Holder', heading: 'Fog Light Cover', description: 'Durable protection for fog lights.' },
    { src: Tail_Lamp_Garnish, alt: 'Reverse Camera', heading: 'Tail Lamp Garnish', description: 'Adds sophistication to the rear end.' },
    { src: Floor_Mat, alt: 'Black Seat Cover', heading: 'Rubber Floor Mat', description: 'High-quality mats for a clean interior.' },
    { src: Rear_Boot_Granish, alt: 'Cup Holder', heading: 'Rear Boot Garnish', description: 'Elevates rear exterior style.' },
    { src: Bumper_Corner_Protector, alt: 'Reverse Camera', heading: 'Bumper Corner Protector', description: 'Safeguards against scratches and dings.' },
    { src: Body_Cover, alt: 'Reverse Camera', heading: 'Body Cover', description: 'Durable protection for the car\'s exterior.' },
    { src: Cushion, alt: 'Reverse Camera', heading: 'Cushion', description: 'Stylish and ergonomic seat comfort.' },
    { src: Door_Still_Guard, alt: 'Reverse Camera', heading: 'Door Sill Guard', description: 'Protects door sills from scuffs and scratches.' },
    { src: Door_Visor, alt: 'Reverse Camera', heading: 'Door Visor', description: 'Reduces glare and shields from rain.' },
    { src: Head_Rest_Cushion, alt: 'Reverse Camera', heading: 'Headrest Cushion', description: 'Adds extra comfort to headrests.' },
    { src: Mud_Flaps, alt: 'Reverse Camera', heading: 'Mud Flaps', description: 'Prevents mud and debris splashing onto the body.' },
    { src: Seat_Cover, alt: 'Reverse Camera', heading: 'Seat Cover', description: 'Protects and personalizes car seats.' },
    { src: Steering_Wheel_Cover, alt: 'Reverse Camera', heading: 'Steering Wheel Cover', description: 'Improves grip and adds style.' },
  ];
  
  
    
      return <CarModelPage images={images} />;
}

export default i10_All_Models
