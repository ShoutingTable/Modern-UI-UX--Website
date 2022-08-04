import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href = "#home">Home</a></p>
  <p><a href = "#wcme0502">What is GPT3?</a></p>
  <p><a href = "#possibility">Open AI</a></p>
  <p><a href = "#features">Case Studies</a></p>
  <p><a href = "#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className = "cme0502__navbar">
      <div className = "cme0502__navbar-links">
        <div className = "cme0502__navbar-links_logo">
          <img src = {logo} alt = "logo" />
        </div>
        <div className = "cme0502__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className = "cme0502__navbar-sign">
        <p>Sign in</p>
        <button type = "button">Sign up</button>
      </div>
      <div className = "cme0502__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color = "fff" size = {27} onClick = {() => setToggleMenu(false)} />
          : <RiMenu3Line color = "fff" size = {27} onClick = {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className = "cme0502__navbar-menu_container scale-up-center">
            <div className = "cme0502__navbar-menu_-container-links">
              <Menu />
              <div className = "cme0502__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type = "button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar