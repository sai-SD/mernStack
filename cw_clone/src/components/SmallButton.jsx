import React from 'react';
import './Style.css';

const SmallButton = () => {
  return (
    <>
      <button className='basicButton smallButton'>create an account now</button>
      <br />
      <button className='basicButton smallButton'>click here to login</button>
      <br />
      <button className='basicButton mediumButton'>log in</button>
      <br />
      <button className='basicButton largeButton'>create an account</button>
    </>
  );
}

export default SmallButton;