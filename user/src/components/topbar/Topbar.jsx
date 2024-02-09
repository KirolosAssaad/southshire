import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
// import { BiBook } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

// import hammer icon 
import { FaHammer } from 'react-icons/fa';


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#apprenticeship" onClick={()=> setActiveNav('#apprenticeship')} className={activeNav === '#apprenticeship' ? 'active' : ''}><FaHammer /></a>
      <a href="#testmonials" onClick={()=> setActiveNav('#testmonials')} className={activeNav === '#testmonials' ? 'active' : ''}><BiMessageSquareDetail /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineUser /></a>
    </nav>
  )
}

export default Topbar;