import React from 'react';
import './Header.scss';

import img from '../img/duck.png';
import img2x from '../img/duck@2x.png';
import img3x from '../img/duck@3x.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header--wrapper">
        <img
          className="header--logo"
          src={img}
          srcSet={`${img2x} 2x, ${img3x} 3x`}
          alt="duck logo"
        />
        <div className="header--name">Captain Quack</div>
      </div>
    </header>
  );
};
export default Header;
