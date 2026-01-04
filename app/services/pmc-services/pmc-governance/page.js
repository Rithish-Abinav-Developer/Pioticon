"use client";
import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import AnimatedHeading from "@/app/Components/AnimatedHeading";
import HomepageBlogSlider from "@/app/Components/HomepageBlogSlider";
import Footer from "@/app/Components/Footer";
import HomepageHeroBanner from "@/app/Components/HomepageHeroBanner";
import HomepageServiceSlider from "@/app/Components/HomepageServiceSlider";
import HomepageIndustrySlider from "@/app/Components/HomepageIndustrySlider ";
import ClientsBG from "@/app/Components/ClientsBG";
import HomepageITestimonialSlider from "@/app/Components/HomepageITestimonialSlider";
import ServiceForm from "@/app/Components/ServiceForm";


export default function page() {

   const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,    
  });


  return (
   <>
 <section className='common_section core_values dark_bg_with_layer hero_section inner_page service_hero_section pmc_sub_hero_section'>

<div className='container'>
    <div className='section_heading_wrapper left_align full_width' data-aos="fade-up">
      <div className='page_breadcrumbs'>
        <ul>
            <li ><Link className='sub_heading white_text' href="/">Home</Link></li>
            <li ><Link className='sub_heading white_text' href="/services">Services</Link></li>
            <li ><Link className='sub_heading white_text' href="/services/pmc-services">PMC Services</Link></li>
        </ul>
      </div>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
            <p className='text white_text'><strong>Transforming project delivery through well-informed and well-timed strategic decision-making</strong></p>

      <p className='text white_text '>At PIOTICON, Our PMC Governance adapts to our client’s portfolio or project's needs - scaling governance levels based on size, complexity, risk, interdependencies, stakeholders, and required resources.</p>

    </div>

<div className='content_area services_hero_img' data-aos="fade-up">
<img src='/images/pmc_governance_hero.svg' alt='PMC Services' width="100%" />


</div>

</div>

</section>

<section className='common_section mis_vis'>
  <div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading'>Key Features</h3>
      <h2 className='main_heading'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
    </div>

    <div className='content_area'>
  <div className='image' data-aos="fade-right">
    <img src='/images/about_mis_vis.png' alt='about_mis_vis' width='100%' />
  </div>
  <div className='content' data-aos="fade-left">
    <ul className='list_with_icon'>
<li>
     <img className='list_icon' src='/images/vision.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_yellow'>Our Vision</h4>
        <p className='text'>Empowering enterprises achieve peak productivity through innovative project management solutions.</p>
     </div>
</li>

<li>
     <img className='list_icon' src='/images/mission.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_green'>Our Mission</h4>
        <p className='text'>Harmonizing human talent, advanced technology, and unified project management and control systems to drive business advancement.</p>
     </div>
</li>

<li>
     <img className='list_icon' src='/images/purpose.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_blue' >Our Purpose</h4>
        <p className='text'>Excelling in project outcomes through the application of performance-centric integrated Project Management Control (PMC) methodologies, refining processes, and achieving project objectives seamlessly</p>
     </div>
</li>
    </ul>
  </div>
    </div>

  </div>
</section>

<section className='common_section core_values dark_bg_with_layer'>

  <div className='bg_circle'>
    <div className='circle_stroke left' ></div>
    <div className='circle_stroke right'></div>

  </div>

<div className='container'>
    <div className='section_heading_wrapper' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Advantages</h3>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
    </div>

<div className='content_area'>
  <div className='_card' data-aos="fade-up">
    <img src='/images/integrity.svg' alt='' />
    <h3>Lorem ipsum dolor</h3>
    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
    <div className='_card' data-aos="fade-up">
    <img src='/images/integrity.svg' alt='' />
    <h3>Lorem ipsum dolor</h3>
    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
    <div className='_card' data-aos="fade-up">
    <img src='/images/integrity.svg' alt='' />
    <h3>Lorem ipsum dolor</h3>
    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
</div>

</div>

</section>

<section className='common_section  clients_section'>

<div className='container'>
    <div className='section_heading_wrapper' data-aos="fade-up">
      <h3 className='sub_heading '>Our Clients</h3>
      <h2 className='main_heading '>Structural PMC Validated by <span>Global Mega-projects.</span></h2>
            <Link href='#' className='common_btn'><span>Enquire Now <img src='/images/arrow-right.svg' alt='logo' /></span> </Link>

    </div>

<div className='content_area'>
<div className='row'>
  <div className='card' data-aos="slide-up">
    <img src='/images/c1.png' alt='clients' />
  </div>
    <div className='card' data-aos="slide-up">
    <img src='/images/c2.png' alt='clients' />
  </div>
    <div className='card' data-aos="slide-up">
    <img src='/images/c3.png' alt='clients' />
  </div>
  
</div>

<div className='row'>
  <div className='card' data-aos="slide-up">
    <img src='/images/c4.png' alt='clients' />
  </div>
    <div className='card' data-aos="slide-up">
    <img src='/images/c5.png' alt='clients' />
  </div>
    <div className='card' data-aos="slide-up">
    <img src='/images/c6.png' alt='clients' />
  </div>
     <div className='card' data-aos="slide-up">
    <img src='/images/c1.png' alt='clients' />
  </div>
  
</div>


<div className='row'>
      <div className='card invisible' data-aos="slide-up">
    <img src='/images/c6.png' alt='clients' />
  </div>
  <div className='card' data-aos="slide-up">
    <img src='/images/c6.png' alt='clients' />
  </div>
    <div className='card' data-aos="slide-up">
    <img src='/images/c2.png' alt='clients' />
  </div>


  
</div>

</div>

</div>

<ClientsBG/>

</section>




<section className='common_section testimonial dark_bg_with_layer left_padding_section'>

<div className='container'>
    <div className='section_heading_wrapper make_center' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Testimonials</h3>
      <h2 className='main_heading white_text'>Client Narratives Validate Our Structural <span>Governance Model.</span></h2>
    </div>

<div className='content_area'>
<HomepageITestimonialSlider/>
</div>

</div>

</section>

<section className="service_form_section common_section">
  <div className='container'>
    <div className='section_heading_wrapper' data-aos="fade-up">
      <h3 className='sub_heading '>Advantages</h3>
      <h2 className='main_heading '>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
    </div>

<div className="content_area">
  <ServiceForm/>
  </div>
  </div>
</section>



<Footer/>
  <AnimatedHeading/>
   </>
  )
}
