import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function PrivacyPolicy() {
  return (

    <div className="main">
      <Topbar />
      <Header />

      <main id="main">

        <div class="breadcrumbs" data-aos="fade-in">
          <div class="container">

            <ol>
            <li> <Link to={'/'}><a>Home</a></Link>  </li>
           
            </ol>
           

          </div>
        </div>
        <div class="container" data-aos="fade-down">
          <br></br>

          <div class="section-title">
            <h2>Privacy Policy</h2>
          </div>
          <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-md-10 mt-5 mt-lg-0 d-flex align-items-stretch">
              <div class="container">
                <p>• When you register with Moneytre for receiving any information, we would automatically capture details
                  pertaining to your name, e-mail address, telephone number and other personal details. This assists us in
                  processing your registration and to analyse the site and page visitation and assign you a user name and
                  password, which you will use to access our services and information on an on-going basis. All such
                  information mentioned hereinafter will be referred to as “Personal Information”.</p>
                <p>
                  • While Moneytre has endeavoured to create a reliable website for its subscribers and users, the
                  confidentiality of any communication or information transmitted via our website or by e-mail cannot be
                  guaranteed. While disclosing Personal Information, users should be aware that it is potentially accessible
                  by others, and may be collected and used by others without the user's consent. Moneytre accepts no
                  responsibility for the security of “Personal Information” transmitted via the internet.
                </p>
                <p>
                  • Moneytre, in the course of delivering its services through this website, may become privy to Personal
                  Information of its subscribers and users, including information that is of a confidential nature. We will
                  limit the collection and use of Personal Information so obtained, only on a need-to-know basis and for the
                  stated purpose. Moneytre, is committed to protecting the privacy of its subscribers and users and takes
                  all reasonable measures to protect the confidentiality of subscriber / user personal information.
                </p>
                <p>
                  • Moneytre does not guarantee that “Moneytre”, its servers, or emails sent by us are free of virus.
                  Moneytre will not be held liable for any damage whatsoever arising from the use of this website.
                </p>
                <p>
                  • Moneytre will not disclose Personal Information individually and if we share any information to our
                  partners and affiliates, it will always be general information from our users. However, Moneytre reserves
                  the right to disclose or report Personal Information in limited circumstances where we believe that
                  disclosure is required under law, to cooperate with regulators or law enforcement authorities and to
                  protect our and our affiliates', rights and property.
                </p>
                <p>• Subscribers and users undertake that they shall not disclose to any other person or entity, in any
                  manner whatsoever, any information relating to Moneytre or its affiliates including their various
                  services, of a confidential nature obtained in the course of availing the services through this website.
                  Failure to comply with this obligation shall be deemed a serious breach of the terms herein and shall
                  entitle Moneytre or its affiliates to terminate the services, without prejudice to any damages.</p>
                <p>
                  • Moneytre, its affiliates' and related services websites may contain links to other websites that may be
                  neither operated nor controlled by Moneytre or its affiliates. Neither Moneytre nor its affiliates shall
                  be responsible for the ¬¬content, or the privacy practices, of these websites.
                </p>
                <p>• Moneytre reserves the right to update this privacy statement without notice. Please ensure that you
                  review this Privacy Policy statement periodically to see updates.</p>
              </div>
            </div>

          </div>


        </div>
        <br></br>
      </main>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy