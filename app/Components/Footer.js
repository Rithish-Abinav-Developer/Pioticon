import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>

<div className='container'>
    <div className='top_section' data-aos='fade-up'>
        <div className='content'>
            <h3 className='main_heading white_text'>Initiate High-Level <span>Governance Discussion.</span></h3>
            <p className='text white_text'>Your project's performance is a function of its governing structure. If systemic complexity or operational fragility is compromising your delivery, contact us to initiate a focused, structural dialogue on reform.</p>
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
            <li><Link href='#'>Home</Link></li>
            <li><Link href='#'>About Us</Link></li>
            <li><Link href='#'>Projects</Link></li>
            <li><Link href='#'>Blogs</Link></li>
            <li><Link href='#'>Contact Us</Link></li>
        </ul>
    </div>

      <div className='footer_links services_link' data-aos='fade-up' data-aos-delay='400'>
         <h4>Services </h4>
         <ul className='page_links'>
            <li className='no_link'>PMC Services</li>
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


</div>

<img src='/images/end_logo.png' width='100%' alt='logo' data-aos='slide-up' />

    </footer>
  )
}
