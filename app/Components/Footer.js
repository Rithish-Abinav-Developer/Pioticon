import Link from 'next/link'
import React from 'react'

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>

<div className='container'>
    <div className='top_section' data-aos='fade-up'>
        <div className='content'>
            <h3 className='main_heading white_text'>A Conversation Focused on <span>Clarity and Control</span></h3>
            <p className='text white_text'>Every project reaches moments where structure matters more than speed. <br className='desktop_break'/>We work with leadership teams to bring coherence, visibility, and confidence to complex project environments.</p>
        </div>
              <Link href='#' className='common_btn'><span>Contact Us <img src='/images/arrow-right.svg' alt='logo' /></span> </Link>

    </div>

<div className='footer_links_section'>
    <div className='footer_links' data-aos='fade-up'>
          <a href='#' className='logo'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <ul className='social_links'>
        <li> <Link href='#'> <img src='/images/facebook.svg' alt='logo' /> </Link> </li>
        <li> <Link href='#'> <img src='/images/x.svg' alt='logo' /> </Link> </li>
        <li> <Link href='#'> <img src='/images/instagram.svg' alt='logo' /> </Link> </li>
        <li> <Link href='#'> <img src='/images/linkedin.svg' alt='logo' /> </Link> </li>

      </ul>
      <ul className='contact_details'>
        <li> <Link href='tel:+61475075910'> <img src='/images/footer_call.svg' alt='logo' /> +61 475 075 910 </Link> </li>
        <li> <Link href='mailto:info@pioticon.com'> <img src='/images/footer_mail.svg' alt='logo' /> info@pioticon.com </Link> </li>
        <li> <Link href='#'> <img src='/images/footer_pin.svg' alt='logo' /> Pioticon Pty Ltd (AUS)<br/>
ABN: 95 666 645 610,<br/>
QLD 4035 </Link> </li>
        <li> <Link href='#'> <img src='/images/footer_pin.svg' alt='logo' /> PIOTICON Ltd (NZ)<br/>
NZBN: 9429047277366, Auckland </Link> </li>

      </ul>
    </div>


  <div className='footer_links' data-aos='fade-up' data-aos-delay='200'>
         <h4>Quick Links</h4>
         <ul className='page_links'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about-us'>About Us</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
            <li><Link href='/blogs'>Blogs</Link></li>
            <li><Link href='/contact-us'>Contact Us</Link></li>
        </ul>
    </div>

      <div className='footer_links services_link' data-aos='fade-up' data-aos-delay='400'>
         <h4>Services </h4>
         <ul className='page_links'>
            <li className='no_link'>PMC Services</li>
            <li><Link href='#'>Overview </Link></li>
            <li><Link href='/services/pmc-services/pmc-governance'>PMC Governance</Link></li>
            <li><Link href='#'>Integrated Project Controls</Link></li>
            <li><Link href='#'>Scope, Strategy & Change</Link></li>
            <li><Link href='#'>Planning & Scheduling </Link></li>
            <li><Link href='#'>Cost Management</Link></li>
            <li><Link href='#'>Risk Management</Link></li>
            <li><Link href='#'>Performance Intelligence Communication</Link></li>
            <li><Link href='#'>Forensic Delay Analysis</Link></li>

        </ul>
         <ul className='page_links'>
            <li className='no_link'>Digital Solution</li>
            <li><Link href='#'>Overview </Link></li>
            <li><Link href='#'>PMC Governance</Link></li>
            <li><Link href='#'>Integrated Project Controls</Link></li>
            <li><Link href='#'>Scope, Strategy & Change</Link></li>
            <li><Link href='#'>Planning & Scheduling </Link></li>
            <li><Link href='#'>Cost Management</Link></li>
            <li><Link href='#'>Risk Management</Link></li>
            <li><Link href='#'>Performance Intelligence Communication</Link></li>
            <li><Link href='#'>Forensic Delay Analysis</Link></li>

        </ul>
    </div>

</div>


<p className='footer_copyrights text white_text text_center'>
  Pioticon © {currentYear} All Rights Reserved.
</p>

</div>

<img src='/images/end_logo.png' width='100%' alt='logo' data-aos='slide-up' />

    </footer>
  )
}
