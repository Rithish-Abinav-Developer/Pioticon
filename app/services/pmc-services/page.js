import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <>
    
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
    
    </>
  )
}
