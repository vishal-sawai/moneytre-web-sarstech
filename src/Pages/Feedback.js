import React from 'react'
import {Link} from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Feedback() {
  return (
    <div className='main'>
      <Topbar />
      <Header />

      <section class="breadcrumbs">

        <div class="container">
          <ol>
            <li> <Link to={'/'}><a>Home</a></Link>  </li>
          </ol>
     </div>
      </section>
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-down">
          <div class="section-title">
            <h2>Feedback</h2>
          </div>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-md-8 mt-5 mt-lg-0 d-flex align-items-center">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="form-group col-md-12">
                    <label for="name">Enter your full name</label>
                    <input type="text" name="name" class="form-control" id="name" required />
                  </div>
                  <div class="form-group col-md-12 mt-3 mt-md-0">
                    <label for="name">Enter your email</label>
                    <input type="email" class="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div class="form-group col-md-12 mt-3 mt-md-0">
                    <label for="name">Enter your Mobile No.</label>
                    <input type="email" class="form-control" name="mobile" id="mobile" required />
                  </div>
                <div class="form-group mt-3">
                  <label for="name">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject" required />
                </div>
                <div class="form-group mt-3">
                  <label for="name">Message</label>
                  <textarea class="form-control" name="message" rows="10" required></textarea>
                </div>
                <br></br>
                <br></br>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>

                <div class="text-center"><button type="submit">Submit</button></div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  


  )
}

export default Feedback