import { Route, Routes } from 'react-router-dom';


import PhoneInfo from '../PhoneInfo';
import Nav from '../Nav';
import About from '../about';
import Work from '../Work';
import Contact from '../contact';
import Photos from '../Photos';

import './phone.scss';

function Phone() {
  return (
    <div className="phone">
       <Routes>
        <Route path="/" element={<><PhoneInfo /> <Nav /></>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/photos" element={<Photos />}/>
      </Routes>
    </div>
  );
}

// == Export
export default Phone;
