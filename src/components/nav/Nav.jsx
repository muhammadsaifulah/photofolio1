import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { BiCamera } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import './nav.css'; // Import CSS file for styles

export const Nav = () => {
  const menu = useRef();

  const showMenu = () => {
    menu.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    menu.current.style.transform = 'translateX(100%)';
  };

  return (
    <div className="d-flex main p-3 align-items-center justify-content-between">
      <div className="logo">
        <div className="d-flex align-items-center gap-2">
          <BiCamera size={40} color='#32CF93' />
          <h3>PhotoFolio</h3>
        </div>
      </div>
      <div ref={menu} className="menu">
        <IoMdClose onClick={closeMenu} size={30} className='cross' />
        <ul className='text-uppercase d-flex list-unstyled gap-3 p-0 m-0 clr '>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li className='position-relative gal'>
            Gallery <FaChevronDown />
            <div className="sub-menu position-absolute py-2">
              <ul className='list-unstyled text-capitalize d-flex flex-column gap-2'>
                <li>nature</li>
                <li>people</li>
                <li>architecture</li>
                <li>animal</li>
                <li>sports</li>
                <li>travel</li>
                <li className='d-flex position-relative justify-content-between align-items-center sub-sub '>
                  sub menu <MdChevronRight />
                  <div className="sub-menu-child position-absolute py-2">
                    <ul className='list-unstyled text-capitalize d-flex flex-column gap-2 '>
                      <li>nature</li>
                      <li>people</li>
                      <li>architecture</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <div className="social-icons">
        <div className="d-flex gap-3">
          <FaTwitter size={25} aria-label="Twitter" />
          <FaInstagram size={25} aria-label="Instagram" />
          <FaLinkedin size={25} aria-label="LinkedIn" />
          <FaFacebook size={25} aria-label="Facebook" />
        </div>
      </div>
      <RxHamburgerMenu onClick={showMenu} size={30} className='list' cursor='pointer' />
    </div>
  );
};
