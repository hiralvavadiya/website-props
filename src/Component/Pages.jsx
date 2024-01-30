import { MdCelebration } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { BsBricks } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import '../App.css';
import React from 'react'

function Pages(props) {
  return (
    <>
    <div className='title spacer'>
        <h1>Pages</h1>
        <small>Extraordinary art team & creative minimalism lover</small>
    </div>

    <section className='section3 container spacer'>
        <div className='cnt-box'>
          {
            props.demo.map((item)=>{
              return(
                <div>
                  <div className='number-count'>{item.no}</div>
                  <div className='count-desc'>
                  {item.icon}
                  <span>{item.data}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>

      <section className='section4 container'>
        <div className='serice-text'>
          <h1>Our Services</h1>
          <p>We provide the best digital solutions.</p>
        </div>
        <div className='services'>
          <div className='row1'>
            <div>
              <MdCelebration className='servce-icon'/>
              <h3>Branding</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <RiComputerLine className='servce-icon'/>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              < FaRegFileAlt className='servce-icon'/>
              <h3>Product Design</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
          </div>
          <div className='row2'>
            <div>
              <GrTask className='servce-icon'/>
              <h3>Research</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <BsBricks className='servce-icon'/>
              <h3>Development</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
            <div>
              <TbTargetArrow className='servce-icon'/>
              <h3>Production</h3>
              <p>Lorem ipsum dolor sit amet, rembe adipiscing elite. Inwege maximus ligula semper metusere pellentesque mattis. Maecenas volutpat, diam enime volutpa.</p>
              <a href='#'>Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <hr color='lightgrey' className="spacer" />
    </>
  )
}

export default Pages;