import React from 'react';
import '../../CSS/SecondPage.css';
import Bumper_Protector from '../../images/kia/sonet/bumper-protector.jpg';
import HeadLamp_Garnish from '../../images/kia/sonet/headlamp-garnish.jpg';
import HeadRest_Cushion from '../../images/kia/sonet/Head-Rest-Cushion.jpg';
import Black_Chrome_Kit from '../../images/kia/sonet/kia-sonet-black-combo-kit-550x550w.jpg.webp';
import Handle_Cover from '../../images/kia/sonet/kia-sonet-handle-cover-550x550.jpg.webp';
import Lead_FootStep from '../../images/kia/sonet/kia-sonet-led-foot-step-black-550x550w.jpeg.webp';
import ORVM_Garnish from '../../images/kia/sonet/orvm-garnish.jpg';
import Cabin_3DMat from '../../images/kia/sonet/sonet-3d-cabin-mat.jpg';
import Front_SunShade from '../../images/kia/sonet/sonet-sunshade-front.jpg';
import TailLamp_Garnish from '../../images/kia/sonet/tail-lamp-garnish.jpg';
import Wheel_Arch_Garnish from '../../images/kia/sonet/wheel-arch-garnish.jpg';
import Window_Beading_Chrome from '../../images/kia/sonet/window-beading-chrome.jpg';
import Body_Cover from '../../images/kia/sonet/BodyCover.jpg';
import CarModelPage from '../CarModelPage';

const Sonet_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Bumper_Protector, alt: 'Bumper Protector', description: 'Custom description for Bumper Protector.' },
    { src: HeadLamp_Garnish, alt: 'Headlamp Garnish', description: 'Custom description for Headlamp Garnish.' },
    { src: HeadRest_Cushion, alt: 'Head Rest Cushion', description: 'Custom description for Head Rest Cushion.' },
    { src: Black_Chrome_Kit, alt: 'Black Chrome Kit', description: 'Custom description for Black Chrome Kit.' },
    { src: Handle_Cover, alt: 'Handle Cover', description: 'Custom description for Handle Cover.' },
    { src: Lead_FootStep, alt: 'LED Foot Step', description: 'Custom description for LED Foot Step.' },
    { src: ORVM_Garnish, alt: 'ORVM Garnish', description: 'Custom description for ORVM Garnish.' },
    { src: Cabin_3DMat, alt: 'Cabin 3D Mat', description: 'Custom description for Cabin 3D Mat.' },
    { src: Front_SunShade, alt: 'Front Sun Shade', description: 'Custom description for Front Sun Shade.' },
    { src: TailLamp_Garnish, alt: 'Tail Lamp Garnish', description: 'Custom description for Tail Lamp Garnish.' },
    { src: Wheel_Arch_Garnish, alt: 'Wheel Arch Garnish', description: 'Custom description for Wheel Arch Garnish.' },
    { src: Window_Beading_Chrome, alt: 'Window Beading Chrome', description: 'Custom description for Window Beading Chrome.' },
    { src: Body_Cover, alt: 'Body Cover', description: 'Custom description for Body Cover.' },
  ];

    return <CarModelPage images={images} />;
};

export default Sonet_All_Models;
