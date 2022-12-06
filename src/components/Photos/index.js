import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";
import { Columns, Square } from 'react-feather';

import './photos.scss';
import handBack from '../../assets/handBack.png';



function Photos () {

  const photos = [
    {
      src: require('../../assets/images/totem1.jpg'),
      width: 1600,
      height: 2200,
    },
    {
      src: require('../../assets/images/endeavor.jpg'),
      width: 1600,
      height: 2100
    },
    {
      src: require('../../assets/images/totem2.jpg'),
      width: 1600,
      height: 2100
    },
    {
      src: require('../../assets/images/titan.jpg'),
      width: 1600,
      height: 2000
    },
    {
      src: require('../../assets/images/sketch.jpg'),
      width: 1600,
      height: 2000
    },
    {
      src: require('../../assets/images/logo.jpg'),
      width: 1600,
      height: 1800
    },
    {
      src: require('../../assets/images/bouddha.jpg'),
      width: 1600,
      height: 1300
    },
    {
      src: require('../../assets/images/portrait.jpg'),
      width: 1600,
      height: 1600
    },
    {
      src: require('../../assets/images/shop.jpg'),
      width: 1600,
      height: 2000
    },
    {
      src: require('../../assets/images/totem3.jpg'),
      width: 1600,
      height: 2000
    },
    {
      src: require('../../assets/images/room.jpg'),
      width: 1600,
      height: 1600
    },
    {
      src: require('../../assets/images/disiz.jpg'),
      width: 1600,
      height: 2100
    },
    {
      src: require('../../assets/images/hand.jpg'),
      width: 1600,
      height: 1600
    },
    {
      src: require('../../assets/deskIllu.jpg'),
      width: 1600,
      height: 2200,
    },
  ];

  const [zoom, setZoom] = useState(2);
  const [clicked, setClicked] = useState(false);

  return(
    <div className="photos">
      <Link to="/" className="about_back">
        <img src={handBack} className="about_back-img" alt="illustration de main"></img>
      </Link>
      <h1 className="photos_title">
        <span>p</span>
        <span>h</span>
        <span>o</span>
        <span>t</span>
        <span>o</span>
        <span>s</span>
      </h1>
      <div className="photoAlbum">
        <PhotoAlbum 
          layout="masonry" 
          photos={photos} 
          columns={zoom}
          spacing={0}
        />
      </div>
      <p className="photo_resume">Un petit aperçu de mon univers et de mes illustrations. </p>
      <div className="photos_button-flex">
        <button className={clicked? " photos_button photos_button-square--clicked " : "photos_button photos_button-square"} onClick={() => {setZoom(1), setClicked(!clicked)}}><Square size={30} strokeWidth={3}/></button>
        <button className={clicked? "  photos_button photos_button-column--clicked " : "photos_button photos_button-column"} onClick={() => {setZoom(2), setClicked(!clicked)}}><Columns size={30} strokeWidth={3}/></button>
      </div>
    </div>
  );
}


export default Photos;
