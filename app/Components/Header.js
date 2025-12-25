"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {

  const [shownav, setShownav] = useState(false);

  return (
    <header>
        <div className='container'>

      <Link href='/' className='logo'>
        <img src='/images/logo.svg' alt='logo' />
      </Link>

      <nav className={` ${shownav ? 'active' : ''}`}>
        <ul>
            <li><Link href='about-us'>About Us</Link></li>

            <li><Link href='#'>Services</Link>
            <ul className='sub_menu'>
                <li><Link href='#'>Projects</Link></li>
            <li><Link href='#'>Blogs</Link></li>
            <li><Link href='#'>Contact Us</Link></li>
            </ul>
            </li>

            <li><Link href='#'>Projects</Link></li>
            <li><Link href='#'>Blogs</Link></li>
            <li><Link href='#'>Contact Us</Link></li>
        </ul>
      </nav>

      <Link href='#' className='common_btn header_btn'><span>Enquire Now <img src='/images/arrow-right.svg' alt='logo' /></span> </Link>

      <button className='mobile_menu_btn' onClick={() => setShownav(!shownav)}> 
       
        {shownav? <img src='/images/menu_close.svg' alt='menu' /> :  <img src='/images/menu_btn.svg' alt='menu' /> }

        </button>

      </div>



    </header>
  );
}
