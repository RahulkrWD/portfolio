import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<>

    <nav className="text-center pt-3 navbar1">
      <a className='navbar-items' href="#skills">Skills</a>
      <a className='navbar-items' href="#projects">Projects</a>
      <a className='navbar-items' href="#certificate">Certificate</a>
      <a className='navbar-items' href="#services">Services</a>
      <a className='navbar-items' href="#contact">Contact</a>
    </nav>
    <nav className="navbar2  pt-3">
    <h3 className='text-light'><i className="fa-solid fa-angle-left"></i>code/<i className="fa-solid fa-angle-right"></i></h3>
    <div className="dropdown">
            <Link
              className="navbar-items dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
              <a className="dropdown-item" href="#skills">Skills</a>
              </li>
              <li>
              <a className="dropdown-item" href="#projects">Projects</a>
              </li>
              <li>
              <a className="dropdown-item"href="#certificate">Certificate</a>
              </li>
              <li>
              <a className="dropdown-item"href="#services">Services</a>
              </li>
              <li>
              <a className="dropdown-item" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
    </nav>
    </>
  );
}

export default Navbar;
