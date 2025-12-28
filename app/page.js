"use client";
import React from 'react'
import HomepageHeroBanner from './Components/HomepageHeroBanner'
import Link from 'next/link'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import HomepageServiceSlider from './Components/HomepageServiceSlider';
import HomepageIndustrySlider from './Components/HomepageIndustrySlider ';
import ClientsBG from './Components/ClientsBG';
import HomepageITestimonialSlider from './Components/HomepageITestimonialSlider';
import HomepageBlogSlider from './Components/HomepageBlogSlider';
import Footer from './Components/Footer';
import AnimatedHeading from './Components/AnimatedHeading';

export default function page() {

   const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.4,    
  });


  return (
   <>
   <HomepageHeroBanner />
  <AnimatedHeading/>
<section className='common_section who_we_are'>
  <div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading'>Who We Are</h3>
      <h2 className='main_heading'>Integrated Project Management and <span>Control Service provider</span></h2>
    </div>

    <div className='content_area'>
     <div className='image' data-aos="fade-right">
<img src='/images/who-we-are.png' alt='section_image' width='100%' />
     </div>
     <div className='content' data-aos="fade-left">
<p className='text'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
      <Link href='#' className='common_btn'><span>Enquire Now <img src='/images/arrow-right.svg' alt='logo' /></span> </Link>
  {/* ✅ COUNTER SECTION */}
              <div className="counter_section" ref={ref}>
                <div className="counter">
                  <h3>
                    {inView && <CountUp end={2000} duration={2} suffix="+" />}
                  </h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className="counter">
                  <h3>
                    {inView && <CountUp end={1} duration={2} suffix="M+" />}
                  </h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className="counter">
                  <h3>
                    {inView && <CountUp end={100} duration={2} suffix="+" />}
                  </h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className="counter">
                  <h3>
                    {inView && <CountUp end={8} duration={2} suffix="+" />}
                  </h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              {/* ✅ END COUNTER */}
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
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Our Core Values</h3>
      <h2 className='main_heading white_text'>The Structural Foundation for <span>High-Integrity Delivery.</span></h2>
    </div>

<div className='content_area'>
  <div className='_card' data-aos="fade-up">
    <img src='/images/integrity.svg' alt='' />
    <h3>Integrity Above All</h3>
    <p className='text'>Conducting ourselves with honesty, transparency, and ethics.</p>
  </div>
    <div className='_card' data-aos="fade-up" data-aos-delay="200">
    <img src='/images/unyielding.svg' alt='' />
    <h3>Unyielding Courage</h3>
    <p className='text'>Being courageous and choosing what’s right in every situation, learning from our mistakes, and achieving truly transformative success.</p>
  </div>
    <div className='_card' data-aos="fade-up" data-aos-delay="400">
    <img src='/images/enduring.svg' alt='' />
    <h3>Enduring Excellence</h3>
    <p className='text'>Prioritizing excellence by constantly improving our processes and practices to deliver the highest quality results for our clients and achieve exceptional long-term outcomes.</p>
  </div>
</div>

</div>

</section>

<section className='common_section  services_section left_padding_section has_slider'>

<div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading '>What we do</h3>
      <h2 className='main_heading '>Integrated Solutions Convert Systemic Complexity into <span>Predictable Performance.</span></h2>
            <Link href='#' className='common_btn'><span>Enquire Now <img src='/images/arrow-right.svg' alt='logo' /></span> </Link>

    </div>

<div className='content_area'>
<HomepageServiceSlider/>
</div>

</div>

</section>


<section className='common_section industries_section dark_bg_with_layer left_padding_section'>

<div className='container'>
    <div className='section_heading_wrapper make_center' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Industries We Serves</h3>
      <h2 className='main_heading white_text'>Integrated Governance Across All Complex <span>Project Ecosystems.</span></h2>
      <p className='text white_text'>We specialize in high-complexity capital programs for infrastructure (rail, bridges, roads), energy, and mining. Our structural PMC eliminates operational fragility and governance gaps inherent in these ecosystems.</p>
    </div>

<div className='content_area'>
<HomepageIndustrySlider/>
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

<section className='common_section industries_section left_padding_section'>

<div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading '>Blogs</h3>
      <h2 className='main_heading '>Structural Root Cause <span>Analysis and Reform Pathways.</span></h2>
            <Link href='#' className='common_btn'><span>Know More<img src='/images/arrow-right.svg' alt='logo' /></span> </Link>

    </div>

<div className='content_area'>
<HomepageBlogSlider/>
</div>

</div>

</section>

<Footer/>

   </>
  )
}
