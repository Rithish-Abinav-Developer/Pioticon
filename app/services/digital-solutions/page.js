"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Stack1 from '@/app/Components/Stack1';
import Stack3 from '@/app/Components/Stack3';
import HomepageIndustrySlider from '@/app/Components/HomepageIndustrySlider ';
import HomepageITestimonialSlider from '@/app/Components/HomepageITestimonialSlider';
import ClientsBG from '@/app/Components/ClientsBG';
import Footer from '@/app/Components/Footer';
import AnimatedHeading from '@/app/Components/AnimatedHeading';



export default function page() {

useEffect(() => {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".stack_card");
    if (!cards.length) return;

    const offsetGap = 10;
    const scaleStep = 0.025;
    const total = cards.length;
    const lastCard = cards[total - 1];

      const mm = gsap.matchMedia();

    // ================= STACK CARDS =================
    mm.add("(min-width: 1024px)", () => {
      cards.forEach((card, i) => {
        gsap.to(card, {
          scale: 1 - (total - i - 1) * scaleStep,
          opacity: 1 - (total - i - 1) * scaleStep,
          y: i * offsetGap,
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: `center center+=${(i+2) * offsetGap}`,
            endTrigger: lastCard,
            end: `center center+=${4 * offsetGap}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            // markers: true,
          },
        });
      });
    });

    // ================= SVG TRIGGERS =================
    ScrollTrigger.create({
      trigger: cards[0],
      start: "top 80%",
      once: true,
      onEnter: () => {
        cards.forEach(card => card.classList.add("active"));

        const stack1Paths = document.querySelectorAll(
          ".stack_card1 path:not(#line)"
        );
        const stack3Paths = document.querySelectorAll(
          ".stack_card3 path"
        );
        const line = document.querySelector(".stack_card1 #line");

        // Stack 1 fade-in
        gsap.fromTo(
          stack1Paths,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.01,
            stagger: 0.01,
            ease: "power1.out",
          }
        );

        // Stack 3 scroll fade
        gsap.fromTo(
          stack3Paths,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".stack_card3",
              start: "center 80%",
              end: "center center",
              scrub: true,
            },
          }
        );

        // Line draw
        if (line) {
          const length = line.getTotalLength();
          line.style.strokeDasharray = length;
          line.style.strokeDashoffset = length;

          gsap.to(line, {
            strokeDashoffset: 0,
            duration: 4,
            ease: "power1.out",
          });
        }
      },
    });

    ScrollTrigger.refresh();
  });

  return () => ctx.revert();
}, []);




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
            <li ><Link className='sub_heading white_text' href="/services/digital-solutions">Digital Solutions</Link></li>
        </ul>
      </div>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
      <p className='text white_text w_80 t_w_100'>Integrated Project Management and Control service provider with a focus of building Performance Improvement-Oriented Technique with Intelligent Coherent Network.</p>

    </div>

<div className='content_area services_hero_img' data-aos="fade-up">
<img src='/images/digital_solutions_hero.svg' alt='PMC Services' width="100%" />
</div>

</div>

</section>


<section className='common_section service_overview pt-0'>
    <div className='container'>
        <div className='left_content section_heading_wrapper left_align'>
          
                 <h3 className='sub_heading white_text'>Digital Solutions</h3>
      <h2 className='main_heading white_text'>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span></h2>
           
        </div>

         <div className='overview_list' data-aos="fade-up">
           
          <ul className='icon_with_text'>
            <li>
              <img src='/images/ds_ic1.svg' alt=''/>
              <p className='text white_text'>PMC & Integrated <br className='desktop_break'/>Performance</p>
            </li>

               <li>
              <img src='/images/ds_ic2.svg' alt=''/>
              <p className='text white_text'>Land Surveying & <br className='desktop_break'/>Quantity Survey</p>
            </li>

               <li>
              <img src='/images/ds_ic3.svg' alt=''/>
              <p className='text white_text'>Construction Smart <br className='desktop_break'/>Site & IoTs</p>
            </li>

               <li>
              <img src='/images/ds_ic4.svg' alt=''/>
              <p className='text white_text'>Design & Construction <br className='desktop_break'/>Information Management</p>
            </li>

             

            </ul>         

       
        </div>

    </div>
</section>


<section className='common_section implementation_approach'>
  <div className='container'>
    <div className='section_heading_wrapper left_align' data-aos="fade-up">
      <h3 className='sub_heading'>Implementation Approach</h3>
      <h2 className='main_heading'>A holistic strategy to connect the right dots and <span>achieve sustainable results</span></h2>
    </div>

    <div className='content_area'>

        <div className='card stack_card stack_card1'>
            <div className='content'>
<h3>Unlocking high performance with a holistic analysis in 4 key areas</h3>
<ul>
    <li>PMC & Integrated Project performance.</li>
    <li>Construction Smart Site & IoTs.</li>
    <li>Land Survey and Quantity Surveying.</li>
    <li>Design & Construction Information Management.</li>
</ul>
            </div>
            <div className='image'>
                <Stack1 />
            </div>
        </div>

         <div className='card stack_card stack_card2'>
            <div className='content'>
<h3>Crafting an end-to-end implementation plan to</h3>
<ul>
    <li>Bring together all components into the data integration & analytics stage</li>
    <li>Accelerate digital transformation</li>
    <li>Enhance project performance</li>
</ul>
            </div>
            <div className='image'>
                <img src='/images/stack2.png' alt='' width="100%" />
            </div>
        </div>

         <div className='card stack_card stack_card3'>
            <div className='content'>
<h3>Our 5-step holistic process</h3>
<ul>
    <li><strong>Step 1- Assess</strong> the current stage of each element, under four key components.</li>
    <li><strong>Step 2 – Gap</strong> analysis between the current digital stage and stage 3 – data integration & analytics.</li>
    <li><strong>Step 3 – Evaluate</strong> the Client’s existing tools’ capability to reach the Data Integration and analytics stage. </li>
    <li><strong>Step 4 – Collaborate</strong> with the Digital partners to implement a cost-effective solution.</li>
    <li><strong>Step 5 – Train</strong> teams and Implement the agreed Digital Solutions.</li>
</ul>
            </div>
            <div className='image'>
                    <Stack3 />
            </div>
        </div>

    </div>

  </div>
</section>

<section className='common_section core_values dark_bg_with_layer'>



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
      <h2 className='main_heading white_text'>Client Narratives Validate Our <span>Structural Governance Model.</span></h2>
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
