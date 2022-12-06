import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom';
import { Linkedin } from 'react-feather';
import handBack from '../../assets/handBack.png';
import './contact.scss';

function Contact()  {
  const form = useRef();
  const inputName = useRef();
  const inputMail = useRef();
  const inputText = useRef();

  const [sendMail, setSendMail] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0sqgei7', 'template_q3ifhsm', form.current, '9FctJhTYUTS3wvU8l')
      .then((result) => {
          console.log(result.text);
          setSendMail(!sendMail);
          inputName.current.value = "";
          inputMail.current.value = "";
          inputText.current.value = "";
      }, (error) => {
          console.log(error.text);
      }).then(()=>{
        setTimeout(() => {
          setSendMail(false);
        }, 2000)  
      })
      ;
  };

  return (
    <div className="contact">
      <Link to="/" className="about_back">
      <img src={handBack} className="about_back-img" alt="illustration de main"></img>
      </Link>
     
      <form className="contact_form" ref={form} onSubmit={sendEmail}>
        <label className="contact_form-label contact_form-label--name">Nom</label>
        <input 
          className="contact_form-input contact_form-input--name" 
          type="text" 
          name="user_name"
          ref={inputName}
          required
        />
        <label className="contact_form-label contact_form-label--email">Email</label>
        <input 
          className="contact_form-input contact_form-input--email" 
          type="email" 
          name="user_email"
          ref={inputMail}
          required 
        />
        <textarea 
          className="contact_form-text" 
          name="message"
          ref={inputText}
          placeholder='Mon message...'
          required
        />
        <button className="contact_form-button" type="submit" value="Send">
          <div className= {sendMail ? 'thick-arrow-validate' : 'thick-arrow-right'}></div>
        </button>
        <div className="section_color section_color-red">
          <p>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </p>
        </div>
        <div className="section_color section_color-green"></div>
        <div className="section_color section_color-back"></div>
        <div className="section_color section_color-blue"> <a href='https://www.linkedin.com/in/steven-duport/' className="section_color-blue--link" target="_blank"><Linkedin/></a></div>
      </form>
    </div>
  );
};

export default Contact;
