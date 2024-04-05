import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import axios from 'axios'
import { Toaster, toast } from "react-hot-toast";

function Feedback() {

  // Server Url
  const serverUrl = process.env.REACT_APP_SERVER_URL;


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { full_name: name, email, mobile_no: mobile, subject, message };
    try {
      const response = await axios.post(`${serverUrl}/feedback/create_feedback`, formData);
      if (response) {
        toast.success("Your feedback has been sent. Thank you!");
      }
      // Clear input fields
      setName('');
      setEmail('');
      setMobile('');
      setSubject('');
      setMessage('');

    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

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

          <Toaster />

          <div class="section-title">
            <h2>Feedback</h2>
          </div>
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-md-8 mt-5 mt-lg-0 d-flex align-items-center">

              <form onSubmit={handleSubmit} role="form" class="php-email-form">
                <div class="row">
                  <div class="form-group col-md-12">
                    <label for="name">Enter your full name</label>
                    <input type="text" name="name" class="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div class="form-group col-md-12 mt-3 mt-md-0">
                    <label for="name">Enter your email</label>
                    <input type="email" class="form-control" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div class="form-group col-md-12 mt-3 mt-md-0">
                  <label for="name">Enter your Mobile No.</label>
                  <input type="text" class="form-control" name="mobile" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
                </div>
                <div class="form-group mt-3">
                  <label for="name">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div class="form-group mt-3">
                  <label for="name">Message</label>
                  <textarea class="form-control" name="message" rows="10" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                </div>
                {/* <br></br>
                <br></br>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                */}

                <div class="text-center mt-2 d-grid gap-2"><button type="submit">Submit</button></div>
              </form>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>



  )
}

export default Feedback