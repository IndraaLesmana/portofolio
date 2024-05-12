"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";


const Navbar = () => {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const handleNavClick = (page: string) => {
    setActivePage(page);
  };
 
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
          href='/'
            className={`navbar-link ${activePage === '/' ? 'active' : ''}`}
            onClick={() => handleNavClick('/')}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
          href='/resume'
            className={`navbar-link ${activePage === '/resume' ? 'active' : ''}`}
            onClick={() => handleNavClick('/resume')}
          >
            Resume
          </Link>
        </li>
        <li className="navbar-item">
          <Link
          href={'/project'}
            className={`navbar-link ${activePage === '/project' ? 'active' : ''}`}
            onClick={() => handleNavClick('/project')}
          >
            Project
          </Link>
        </li>
        <li className="navbar-item">
          <Link
          href='/about'
            className={`navbar-link ${activePage === '/about' ? 'active' : ''}`}
            onClick={() => handleNavClick('/about')}
          >
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link
          href={'/contact'}
            className={`navbar-link ${activePage === '/contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
