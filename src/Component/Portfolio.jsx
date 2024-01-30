import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../App.css';
import React from 'react'

function Portfolio() {
  const slider={
    loop:true,
    items:1,
    // margin:10,
    padding:2,
    nav:false,
    // navText:['next','prev']
  }
  return (
    <>
      <div className='title spacer'>
        <h1>Portfolio</h1>
        <small>Extraordinary art team & creative minimalism lover</small>
      </div>

      <section className='port'>
        {/* <div> */}
          <div className='spacer'>
            <h3>Details</h3>
            
            <table border={1} cellSpacing={0} cellPadding={4}>
              <tr>
                <th>Client:</th>
                <td> Envato Users</td>
              </tr>
              <tr>
                <th>Client:</th>
                <td> Envato Users</td>
              </tr>
              <tr>
                <th>Client:</th>
                <td> Envato Users</td>
              </tr>
            </table>
          </div>
          <p>Lorem ipsum dolor sit amet conseur adipisci inerene maximus ligula sempe metuse pelente mattis. Maecenas volutpat, diam eni sagittis quam porta quam. Sed id dolor consectetur fermentum volutpat accumsan purus iaculis libero. Donec vel ultricies purus iaculis libero.</p>
          <p>Etiam sit amet fringilla lacus susantebe sit ullamcorper pulvinar neque porttitor. Integere lectus. Praesent sede nisi eleifend fermum orci amet, iaculis libero. Donec vel ultricies purus. Name dictum sem ipsumebe euliquam volutpat, diam eni sagittis quam.</p>
        {/* </div> */}
      </section>

      <OwlCarousel className='owl-theme spacer' {...slider}>
        <div class='item'>
            <img src={require('../image/bg-1.jpeg')} ></img>
        </div>
        <div class='item'>
          <img src={require('../image/bg-2.jpeg')} ></img>
        </div>
        <div class='item'>
          <img src={require('../image/bg-3.jpeg')}></img>
        </div>
      </OwlCarousel>

      <hr color='lightgrey' className='spacer'/>
    </>
  )
}

export default Portfolio;