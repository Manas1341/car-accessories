import MainPage from "./Pages/MainPage";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Tata from "./Pages/Tata";
import Mahindra from "./Pages/Mahindra"
import Suzuki from "./Pages/Suzuki"
import Hyundai from "./Pages/Hyundai";
import Kia from "./Pages/Kia" 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route> 
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tata" element={<Tata/>}></Route>
        <Route path="/mahindra" element={<Mahindra/>}></Route>
        <Route path="/suzuki" element={<Suzuki/>}></Route>
        <Route path="/hyundai" element={<Hyundai/>}></Route>
        <Route path="/kia" element={<Kia/>}></Route>
      </Routes>
    </>
  );
}

export default App;
