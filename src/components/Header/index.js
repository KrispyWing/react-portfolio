import React from 'react';
import coverImage from '../../assets/cover/hero-bg.jpg'


function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Kris Pennimpede</h1>
      <img src={coverImage} alt='toronto skyline'></img>
      {props.children}
    </header>
  )
}

export default Header;