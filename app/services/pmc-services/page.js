import AnimatedHeading from '@/app/Components/AnimatedHeading'
import ClientsBG from '@/app/Components/ClientsBG'
import Footer from '@/app/Components/Footer'
import HomepageIndustrySlider from '@/app/Components/HomepageIndustrySlider '
import HomepageITestimonialSlider from '@/app/Components/HomepageITestimonialSlider'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
      <AnimatedHeading/>
      <section className='common_section core_values dark_bg_with_layer hero_section inner_page service_hero_section about_hero_section'>

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
      <p className='text white_text w_80 t_w_100'>Integrated Project Management and Control service provider with a focus of building Performance Improvement-Oriented Technique with Intelligent Coherent Network.</p>

    </div>

<div className='content_area services_hero_img' data-aos="fade-up">
<img src='/images/pmc_hero.png' alt='PMC Services' width="100%" />
</div>

</div>

</section>


<section className='common_section service_overview pt-0'>
    <div className='container'>
        <div className='left_content section_heading_wrapper left_align'>
          
                 <h3 className='sub_heading white_text'>PMC Services</h3>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
           
        </div>

         <div className='overview_list' data-aos="fade-up">
           
          <ul className='icon_with_text'>
            <li>
              <img src='/images/pmc_ic1.svg' alt=''/>
              <p className='text white_text'>Project Management & Control Governance</p>
            </li>

               <li>
              <img src='/images/pmc_ic2.svg' alt=''/>
              <p className='text white_text'>Cost Management</p>
            </li>

               <li>
              <img src='/images/pmc_ic3.svg' alt=''/>
              <p className='text white_text'>Performance Intelligence & Communication</p>
            </li>

               <li>
              <img src='/images/pmc_ic4.svg' alt=''/>
              <p className='text white_text'>Integrated Project Controls</p>
            </li>

               <li>
              <img src='/images/pmc_ic5.svg' alt=''/>
              <p className='text white_text'>Risk & Contingency Management</p>
            </li>

               <li>
              <img src='/images/pmc_ic6.svg' alt=''/>
              <p className='text white_text'>Forensic Delay Analysis</p>
            </li>

               <li>
              <img src='/images/pmc_ic7.svg' alt=''/>
              <p className='text white_text'>Project Planning & Scheduling</p>
            </li>

            </ul>         

       
        </div>

    </div>
</section>


<section className='common_section mis_vis'>
  <div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading'>Our Mission, Vision and Purpose</h3>
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

<section className='common_section key_features dark_bg_with_layer'>


<div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Implementation Approach</h3>
      <h2 className='main_heading white_text'>A holistic strategy to connect the right dots and <span>achieve sustainable results</span></h2>
    </div>

<div className='content_area'>
<div className='image' data-aos="fade-up">
  <img src='/images/pmc_implementation_approach.svg' alt='key_features' width="100%" />
</div>

 <div className='content key_cards_grid key_cards_grid_4 no_padding' >
   <div className='key_card card_yellow' data-aos="fade-up">
      <img className='key_card_icon' src='/images/align.svg' alt=''/>
    <h4>Align</h4>
    <p className='text white_text'>understand the current maturity of Project Management and Control(PMC), and align the expectation with clarity. </p>
   </div>

    <div className='key_card card_green' data-aos="fade-up" data-aos-delay="200">
      <img className='key_card_icon' src='/images/plan.svg' alt=''/>
    <h4>Plan</h4>
    <p className='text white_text'>Develop an iterative PMC plan for continuous improvement and results.</p>
   </div>

    <div className='key_card card_blue' data-aos="fade-up" data-aos-delay="400">
      <img className='key_card_icon' src='/images/implement.svg' alt=''/>
    <h4>Implement</h4>
    <p className='text white_text'>Upskill the existing team and enroll new resources to implement the PMC system.</p>
   </div>

       <div className='key_card card_white' data-aos="fade-up" data-aos-delay="400">
      <img className='key_card_icon' src='/images/review.svg' alt=''/>
    <h4>Review</h4>
    <p className='text white_text'>Closely review performance for effective governance and process improvements.</p>
   </div>


  </div>

</div>

</div>

</section>


<section className='common_section mis_vis methodology'>
  <div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading'>Our Mission, Vision and Purpose</h3>
      <h2 className='main_heading'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
    </div>

    <div className='content_area'>
  <div className='image' data-aos="fade-right">
    <img src='/images/piotocon_methodology.svg' alt='piotocon_methodology' width='100%' />
  </div>
  <div className='content' data-aos="fade-left">
    <ul className='list_with_icon'>
<li>
     <img className='list_icon' src='/images/vision.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_yellow'>First principle thinking </h4>
        <p className='text'>Focus on first principle thinking to solve problems. </p>
     </div>
</li>

<li>
     <img className='list_icon' src='/images/mission.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_green'>PDCA process</h4>
        <p className='text'>Seamlessly integrate the macro and micro levels, utilizing an efficient plan-do-check-act process.</p>
     </div>
</li>

<li>
     <img className='list_icon' src='/images/purpose.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_blue' >Top-down+Bottom-up technique</h4>
        <p className='text'>Granular breaking down of project levels, enabling top-down planning, monitoring, and control, as well as extraction of critical and meaningful insights from the bottom-up level to enable accuracy.</p>
     </div>
</li>

<li>
     <img className='list_icon' src='/images/purpose.svg' alt='about_mis_vis' />
     <div className='list_content'>
        <h4 className='list_title text_blue' >An integrated approach </h4>
        <p className='text'>Thoroughly understanding project scope and complexity and adopting an integrated approach to implement functional processes and systems that align with the project objectives.</p>
     </div>
</li>

    </ul>
  </div>
    </div>

  </div>
</section>


<section className='common_section key_features dark_bg_with_layer'>


<div className='container'>
    <div className='section_heading_wrapper' data-aos="fade-up">
      <h3 className='sub_heading white_text'>Pi System</h3>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
      <p className='text white_text'>At PIOTICON, our commitment to continuous improvement is evident through our integrated performance improvement system, known as the Pi system. Our teams, comprised of trained professionals, possess deep subject matter knowledge, excel in expert execution, and consistently deliver value-added outcomes.</p>
    </div>

<div className='content_area'>
<div className='image' data-aos="fade-up">
  <img src='/images/pi_system.svg' alt='pi_system' width="100%" />
</div>


</div>

</div>

</section>


<section className='common_section industries_section left_padding_section'>

<div className='container'>
    <div className='section_heading_wrapper make_center' data-aos="fade-up">
      <h3 className='sub_heading'>Industries We Serves</h3>
      <h2 className='main_heading'>Integrated Governance Across All Complex <span>Project Ecosystems.</span></h2>
      <p className='text'>We specialize in high-complexity capital programs for infrastructure (rail, bridges, roads), energy, and mining. Our structural PMC eliminates operational fragility and governance gaps inherent in these ecosystems.</p>
    </div>

<div className='content_area'>
<HomepageIndustrySlider color={'black'}/>
</div>

</div>

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

<Footer/>
    
    </>
  )
}
