import React from 'react';
import '../../CSS/SecondPage.css';
import Body_Cover from '../../images/kia/seltos/BodyCover.jpg';
import Dual_Layer_Mat from '../../images/kia/seltos/DualLayerMat.jpg';
import Tail_Lamp from '../../images/kia/seltos/kia-seltos-2019-tail-lamp-550x550w.jpg.webp';
import Black_Hybrid_Kit from '../../images/kia/seltos/kia-seltos-black-hybrid-combo-kit-550x550w.jpg.webp';
import Led_FogLight from '../../images/kia/seltos/kia-seltos-led-fog-light-550x550.jpg.webp';
import Fog_Lamp from '../../images/kia/seltos/kia-sonet-fog-lamp-550x550w.jpg.webp';
import Rear_Entertaintment_System from '../../images/kia/seltos/Rear-Entertainment-System.jpg';
import Screen_Protector from '../../images/kia/seltos/ScreenProtector.jpg';
import MudFlap from '../../images/kia/seltos/seltos-mudflap-550x550w.jpg.webp';
import Side_Step from '../../images/kia/seltos/side-step.jpg';
import TailLamp_Chrome_Garnish from '../../images/kia/seltos/TailLampChromeGarnish.jpg';
import Wheel_Arch_Chrome_garnish from '../../images/kia/seltos/WheelArchChromeGarnish_.jpg';
import Window_SideBeading from '../../images/kia/seltos/WindowSideBeading_.jpg';
import Window_SunShade_FrontDoor from '../../images/kia/seltos/WindowSunShadeFrontDoors_.jpg';
import Window_Visor from '../../images/kia/seltos/wind-visor-silver-line-sonet-2020-550x550h.jpg.webp';
import CarModelPage from '../CarModelPage';

const Seltos_All_Models = () => {
  // Import the images dynamically
  const images = [
    { src: Body_Cover, alt: 'Body Cover', description: 'Custom description for Body Cover.' },
    { src: Dual_Layer_Mat, alt: 'Dual Layer Mat', description: 'Custom description for Dual Layer Mat.' },
    { src: Tail_Lamp, alt: 'Tail Lamp', description: 'Custom description for Tail Lamp.' },
    { src: Black_Hybrid_Kit, alt: 'Black Hybrid Kit', description: 'Custom description for Black Hybrid Kit.' },
    { src: Led_FogLight, alt: 'LED Fog Light', description: 'Custom description for LED Fog Light.' },
    { src: Fog_Lamp, alt: 'Fog Lamp', description: 'Custom description for Fog Lamp.' },
    { src: Rear_Entertaintment_System, alt: 'Rear Entertainment System', description: 'Custom description for Rear Entertainment System.' },
    { src: Screen_Protector, alt: 'Screen Protector', description: 'Custom description for Screen Protector.' },
    { src: MudFlap, alt: 'Mud Flap', description: 'Custom description for Mud Flap.' },
    { src: Side_Step, alt: 'Side Step', description: 'Custom description for Side Step.' },
    { src: TailLamp_Chrome_Garnish, alt: 'Tail Lamp Chrome Garnish', description: 'Custom description for Tail Lamp Chrome Garnish.' },
    { src: Wheel_Arch_Chrome_garnish, alt: 'Wheel Arch Chrome Garnish', description: 'Custom description for Wheel Arch Chrome Garnish.' },
    { src: Window_SideBeading, alt: 'Window Side Beading', description: 'Custom description for Window Side Beading.' },
    { src: Window_SunShade_FrontDoor, alt: 'Window Sun Shade Front Door', description: 'Custom description for Window Sun Shade Front Door.' },
    { src: Window_Visor, alt: 'Window Visor', description: 'Custom description for Window Visor.' },
  ];

  return <CarModelPage images={images} />;
};

export default Seltos_All_Models;
