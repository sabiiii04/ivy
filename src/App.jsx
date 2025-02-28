import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Amenities from "./pages/Amenities.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";

function App(){
  return (
      <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/amenities" element={<Amenities/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/careers" element={<Careers/>}/>
        </Routes>
      </>
  )
}
export default App;