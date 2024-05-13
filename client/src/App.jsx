import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./pages/Contact.jsx";
import BusinessElectricity from "./pages/BusinessElectricity.jsx";
import DomesticEnergy from "./pages/DomesticEnergy.jsx";
import CorporateEnergy from "./pages/CorporateEnergy.jsx";
import BusinessTelicom from "./pages/BusinessTelicom.jsx";
import Conditions from "./pages/Conditions.jsx";
import Complaint from "./pages/Complaint.jsx";
import Policy from "./pages/Policy.jsx";
import Business from "./pages/Business.jsx";
import BestPrices from "./pages/BestPrices.jsx";
import GasInfo from "./pages/GasInfo.jsx";
import Quotes from "./pages/Quotes.jsx";
import Thanku from "./pages/Thanku.jsx";
import Lbu from "./pages/Lbu.jsx";
import GasElecric from "./pages/GasElecric.jsx";
import AllSector from "./pages/AllSector.jsx";
import Guides from "./pages/Guides.jsx";
import About from "./pages/About.jsx";
import Supplier from "./pages/Supplier.jsx";
import OurSector from "./pages/OurSector.jsx";
import BusinessWater from "./pages/BusinessWater.jsx";

function App() {


  return (
    <>
     <Toaster/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/contact-us" element={<Contact/>}/>
       <Route path="/business-electricity" element={<BusinessElectricity/>}/>
       <Route path="/domestic-energy" element={<DomesticEnergy/>}/>
       <Route path="/corporate-energy" element={<CorporateEnergy/>}/>
       <Route path="/business" element={<Business/>}/>
       <Route path="/business-telicom" element={<BusinessTelicom/>}/>
       <Route path="/term-condition" element={<Conditions/>}/>
       <Route path="/complaint" element={<Complaint/>}/>
       <Route path="/policy" element={<Policy/>}/>
       <Route path="/best-price" element={<BestPrices/>}/>
       <Route path="/gas-info" element={<GasInfo/>}/>
       <Route path="/quotes" element={<Quotes/>}/>
       <Route path="/thanku" element={<Thanku/>}/>
       <Route path="/lbu" element={<Lbu/>}/>
       <Route path="/gas-electric" element={<GasElecric/>}/>
       <Route path="/all-sector" element={<AllSector/>}/>
       <Route path="/guides" element={<Guides/>}/>
       <Route path="/our-sector" element={<OurSector/>}/>
       <Route path="/supplier" element={<Supplier/>}/>
       <Route path="/about-us" element={<About/>}/>
       <Route path="/business-water" element={<BusinessWater/>}/>
     </Routes>
    </>
  )
}

export default App
