import { MdCelebration } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { BsBricks } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import React from 'react';

function Home(props) {
  return (
    <div>
      <section className='section1'>
        <img src={require('../image/home-bg.jpeg')}/>
        <div className='img-text'>
          <p>The Design Makers</p>
          <samll>Extraordinary Design & Development Studio</samll>
        </div>
      </section>

      <section className='section2 container'>
        <div>
          <h1>Our mission is to make design simple and useful.</h1>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet conseur adipisci inerene maximus ligula sempe metuse pelente mattis. Maecenas volutpat, diam eni sagittise quame porta quam. Sed id dolor consectetur fermentum volutpat accumsan purus.</p>
        </div>
        <div>
          <p>Etiam sit amet fringilla lacus susantebe sit ullamcorper pulvinar neque porttitor. Integere lectus. Praesent sede nisi eleifend fermum orci amet, iaculis libero. Donec vel ultricies purus. Name dictum sem ipsumebe euliquam.</p>
        </div>
      </section>

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
      {/* <Counter></Counter> */}

      <hr color='grey'></hr>

      <section className='section4 container'>
        <div className='serice-text'>
          <h1>Our Services</h1>
          <p>We provide the best digital solutions.</p>
        </div>
        <div className='services spacer'>
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

      <section className='section5 spacer'>
      <div className='container'>
        <div className='img-text'>
          <div className='img1'>
            <img src={require('../image/service1.jpeg')} />
          </div>
          <div className='img2'>
            <img src={require('../image/service2.jpeg')} className='img2'/>
          </div>
          <div className='text'>
            <h1>Looking for exclusive digital services?</h1>
            <p>Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum. Proin fringilla augue at maximus vestibulum.</p>
            <button>view services</button>
          </div>
        </div>
      </div>
      </section>

      <section className="section6 spacer container">
        <div className='serice-text'>
          <h1>Our Blog</h1>
          <p>The latest news in our blog</p>
        </div>

        <div className="flex">
          {
            props.blog.map((item)=>{
              return (
                <>
                  <div >
                    <div className="blog-img">
                      <img src={item.img}/>
                    </div>
                      <div className='count-dsc'>
                        <h3>{item.title}</h3>
                        <small>{item.name}</small>
                        <p>{item.info}</p>
                      </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
      
    </div>
  )
}

export default Home;