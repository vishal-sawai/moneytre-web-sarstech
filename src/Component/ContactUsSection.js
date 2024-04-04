import React from 'react'
import { Link } from 'react-router-dom'

function ContactUsSection() {
  return (
    <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title">
        <h2>Contact Us</h2>
        <h3>Feel free to <span>Connect</span></h3>
      
      </div>

      <div class="row">

        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>201, Vilux Redefine, Deccan Gymkhana, Pune 411004.</p>
            </div>

            <div class="email">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>hkot3@yahoo.com</p>
            </div>

            <div class="phone">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 74109 12161</p>
            </div>

           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.23120153327!2d73.8371157750378!3d18.518451382574657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfa899663d31%3A0x8b17e65d6bc36d04!2sVilux%20Redefine!5e0!3m2!1sen!2sin!4v1705393118592!5m2!1sen!2sin"
              frameborder="0" style={{ border: 0, width: '100%', height: '300px' }} allowfullscreen></iframe>
          
          </div>

        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" class="form-control" id="name" required/>
              </div>
              <div class="form-group col-md-6 mt-3 mt-md-0">
                <label for="name">Your Email</label>
                <input type="email" class="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Subject</label>
                <input type="text" name="Subject" class="form-control" id="Subject" required/>
              </div>
              <div class="form-group col-md-6 mt-3 mt-md-0">
                <label for="name">Mobile Number</label>
                <input type="number" class="form-control" name="Mobile Number" id="Mobile Number" required/>
              </div>
            </div>
            <div class="form-group mt-3">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="8" required></textarea>
            </div>
            <br/>
            <br/>
            <br/>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Submit</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
  )
}

export default ContactUsSection