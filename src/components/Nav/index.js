import { Link } from 'react-router-dom';

import insta from '../../assets/work.png';
import photo from '../../assets/photo.png';
import email from '../../assets/email.png';
import aboutMe from '../../assets/aboutMe.png';
import './nav.scss';


function Nav() {
  return (
    <div className="nav">
      <Link to="/work" className="nav_button">
        <span className="nav_icon nav_icon--work">
          <img src={insta} className="nav_icon--img"/>
        </span>
        <span className="nav_name">Work</span>
      </Link>
      <Link to="/about" className="nav_button">
        <span className="nav_icon nav_icon--about">
        <img src={aboutMe} className="nav_icon--img"/>
        </span>
        <span className="nav_name">About Me</span>
      </Link>
      <Link to="/contact" className="nav_button">
        <span className="nav_icon nav_icon--contact">
        <img src={email} className="nav_icon--img"/>
        </span>
        <span className="nav_name">Contact</span>
      </Link>
      <Link to="/photos" className="nav_button">
        <span className="nav_icon nav_icon--photo">
          <img src={photo} className="nav_icon--img"/>
        </span>
        <span className="nav_name">Photos</span>
      </Link>
    </div>
  );
}

// == Export
export default Nav;
