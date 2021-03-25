/* eslint-disable */
import React from 'react';

const Hero = ({ name, powerstats, appearence, images }) => (
  <div className="Hero">
    <h2>
      {name}
    </h2>
    <div className="Hero_infos">
        <img src={images.md} alt={name} className="Hero_image" />
        <div>
            <h3>Stats :</h3>
            <ul>
            {
                Object.keys(powerstats).map(powerstat => <li>{powerstat} : {powerstats[powerstat]}</li>)
            }
            </ul>
        </div>
    </div>
  </div>
);

export default Hero;
/* eslint-disable */
