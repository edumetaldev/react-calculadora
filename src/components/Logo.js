import React from "react";
import fcclogo from '../images/FreeCodeCamp_logo.svg';
import '../css/Logo.css';

const Logo = () => {

    return <div className='fcc-logo-contenedor'>
        <img
          src={fcclogo}
          className='fcc-logo'
          alt='logo de fcc'
        />
      </div>
};

export default Logo;