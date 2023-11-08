import React from 'react';
import image from '../../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id="header">
      <img src={image} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
