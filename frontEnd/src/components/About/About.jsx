import React from 'react'
import { Link } from 'react-router-dom'

import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
        {/* =======About image======== */}
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
          <img src={aboutImg} alt='aboutImg' />
          <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
            <img src={aboutCardImg} alt='aboutCardImg' />
          </div>
        </div>

        {/* =======About content======== */}
        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
          <h2 className='heading'>Proud to be one of the nations best</h2>
          <p className='text__para'>
            For 30 years in a row, U.S. News & World Report has recognized us as one of the best publics
            hospitals in the Nation and #1 in Texas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum veniam tempore autem! Molestias quaerat sed expedita odit consectetur animi, nihil esse
            impedit vitae ad earum eius nostrum tempore, inventore veniam!
          </p>

          <p className='text__para mt-[30px]'>
            Our Best is something we strive for each day, caring for our patients-bot looking back at what
            we accomplished but towards what we can do tomorrow. providing the best. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Ex aspernatur quasi deserunt iste fugit nulla amet suscipit
            placeat vel. Inventore fuga odit molestiae cumque blanditiis velit magnam natus, nihil doloremque?
          </p>

          <Link to="/">
            <button className='btn'>Learn More</button>
          </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
