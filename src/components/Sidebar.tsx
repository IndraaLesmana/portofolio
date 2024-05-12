"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaChevronDown, FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure
          className="avatar-box"
        >
          <Image
            src="/indra.jpg"
            alt="Muhamad Indra Lesmana"
            width={150}
            height={150}
            className="img"
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Muhamad Indra Lesmana">
            Muhamad Indra Lesmana
          </h1>
          <p className="title">Web Developer</p>
          {/* <Link href='/' className="flex gap-2" style={{ background: "hsl(240, 1%, 17%)" }}><FaFileDownload /> <span>Download My CV</span></Link> */}
        </div>
        <button
          className="info_more-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Show Contacts</span>
          <FaChevronDown className="icon-chevron"/>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineEmail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:muhamadindralesmana12@gmail.com"
                className="contact-link"
              >
                muhamadindralesmana12@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+6283178126771" className="contact-link">
                +6283178126771
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">25 Maret 2006</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Katapang, Bandung, Indonesia</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
