import React from 'react'

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 d-flex flex-column justify-content-center">
          <div className="mx-3">
            <h1 className="d-flex justify-content-start mt-3 mb-3">Welcome to  <span>   Moneytre</span></h1>
            <div className="d-flex justify-content-start mt-3 mb-3"> 
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-4 d-flex justify-content-center align-items-center">
          <img src="assets/img/blog/blog-1.jpg" data-aos="zoom-out" data-aos-delay="100" className="img-fluid" alt="" style={{maxWidth:"110%",marginRight:"15%",marginLeft:"2%"}} />
        </div>
      </div>
    </div>
  </section>


  )
}

export default Hero


