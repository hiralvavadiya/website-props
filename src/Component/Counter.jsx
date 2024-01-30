import React from 'react'

const Counter = (props) => {
  return (
    <>
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
    </>
  )
}

export default Counter