import React from 'react'

function Blog(props) {
  return (
    <>
      <div className='title spacer'>
        <h1>Blog</h1>
        <small>Extraordinary art team & creative minimalism lover</small>
      </div>

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

      <hr color='lightgrey' className='spacer'/>
    </>
  )
}

export default Blog;