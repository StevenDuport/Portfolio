import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import handBack from '../../assets/handBack.png';
import arrow from '../../assets/arrow.png';
import head from '../../assets/head.png';
import headTop from '../../assets/headTopNew.png';
import './about.scss';

function About() {

  //state and function for the eyes 
  const myref = useRef();
  const [rot, setRot] = useState(0);
  const  handleMove = (eye) => {
    let x = (eye.current.getBoundingClientRect().left) + (eye.current.clientWidth / 2)
    let y = (eye.current.getBoundingClientRect().top) + (eye.current.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) + 180;
    setRot(rot);
  };

  // state for the button
  const [topHead, setTopHead] = useState(false);
  const [technos, setTechno] = useState(false);
  const openHead = () => {
    setTopHead(!topHead);
    setTechno(!technos);
  }

  return (
    <div className="about" onMouseMove={(event)=> (handleMove(myref))}>
      <Link to="/" className="about_back">
        <img src={handBack} className="about_back-img" alt="illustration de main"></img>
      </Link>
      <div className='eyes'>
        <div 
          ref={myref} 
          className='eye'
          style={{transform: "rotate("+ rot +"deg)"}}
        >
        </div>
        <div 
          ref={myref} 
          className='eye'
          style={{transform: "rotate("+ rot +"deg)"}}
        >
        </div>
      </div>
      <div className="about_name-flex">
        <h1 className="about_name">
          <span>S</span>
          <span>t</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>n&nbsp;</span>
          <span>D</span>
          <span>u</span>
          <span>p</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
        </h1>
        <div className='about_info'>
          <p className="about_info-item">since 1995</p>
          <p className="about_info-item">Villeparisis</p>
        </div>
      </div>
      <div className="about_text">
        <p className="about_text-item"><span className="about_span-hello">Hello !</span><br/> Je suis un jeune développeur front end. J'ai étudié à l'école O'clock où j'ai suivi une <span className="about_span">formation intensive</span> de 6 mois en tant que Développeur Web.</p>
        <p className="about_text-item">Passioné par <span className="about_span">l'illustration</span> et <span className="about_span">l'art</span>, j'aime mettre ma créativité à profit dans mes projets.</p>
      </div>
      <div className="about_skills">
        <svg viewBox="0 0 500 500">
          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
            <textPath xlinkHref="#curve" startOffset="4%">
              Technos utilisées
            </textPath>
          </text>
        </svg>
          <p className={topHead ? 'about_arrow-text--clicked' : 'about_arrow-text'}>Click </p>
          <img src={arrow} className={topHead ? 'about_arrow--clicked' : 'about_arrow'}/>
        <button 
          className="about_button"
          onClick={openHead}
        >
          <img src={headTop} className={topHead ? 'about_head-cliked' : 'about_head-top'}/>
          <img src={head} className="about_head"/>
        </button>
        <ul className="about_list">
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>HTML5</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>CSS3</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>JavaScript</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>PHP</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>ReactJs</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>Git/GitHub</li>
          <li className={technos ? 'about_list-item-cliked' : 'about_list-item'}>Procreate</li>
        </ul>
      </div>
    </div>
  );
}

// == Export
export default About;
