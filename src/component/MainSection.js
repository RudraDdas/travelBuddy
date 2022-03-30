import React from 'react'
import './MainSection.css'
import { main_content } from './mainsectioncontent'
import {sidecontent_array} from './mainsectionsidecontent'

function MainSection() {

    return (
        <div className='main_section'>
        <div className="main_section_long">
            <h2 style={{textDecoration:'underline'}}>Our main Attractions</h2>
            {main_content.map((item)=>{
                return (
          <div className='second_section' data-aos="fade-right" data-aos-duration='1000'>
            <div className='img_section'>
                <img src={item.img} alt="imggg" />
                <section className='label'>   
                <span> <i class="fas fa-thumbs-up"></i>100 likes</span>
           
               <span>
                  <i class="fas fa-comment"></i>200 comments</span>
  
                  <span><i class="fas fa-share"></i> 20 shares</span>
              </section>
            </div>
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
            
                 <hr />
  
          </div>
          
             ) })
        }
        </div>
         
        <div className="main_section_shrt">
            <h2>Other highlights</h2>
            <div className='main_section_list'>
                <ul>
                    <li  data-aos="fade-left" data-aos-delay="100">lorem</li>
                    <li  data-aos="fade-left" data-aos-delay="200">ipsum</li>
                    <li  data-aos="fade-left" data-aos-delay="300">dolor</li>
                    <li  data-aos="fade-left" data-aos-delay="400">slit</li>
                </ul>
            </div>
            <div>
            {sidecontent_array.map((item)=>{
                return (
          <div className='third_section' data-aos="fade-left">
            <div className='img_section'>
                <img src={item.img} alt="imggg" />
                {/* <section className='label'>   
                <span> <i class="fas fa-thumbs-up"></i>100 likes</span>
           
               <span>
                  <i class="fas fa-comment"></i>200 comments</span>
  
                  <span><i class="fas fa-share"></i> 20 shares</span>
              </section> */}
            </div>
               <h2>{item.heading}</h2>
               <p>{item.description}</p>
            
                 <hr />
  
          </div>
          
             )})
        }
            </div>

        </div>
            
        </div>
    )
}

export default MainSection
