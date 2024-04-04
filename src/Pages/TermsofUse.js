import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function TermsofUse() {
  return (

    <div class="main">
      <Topbar />
      <Header />

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
          <h2>Terms of Use</h2>
        </div>
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-md-10 mt-5 mt-lg-0 d-flex align-items-strech">
            <div class="container ">
              <p>• Moneytre allows you the access to information, services, notes and other material through its website
                “Moneytre.in”. On accessing the website you agree to be bound by “Prime Analytics Terms” (“Terms of Use”,
                “Privacy Policy”, “General Disclaimer”, “Newsletter Disclaimer”, “Subscription Agreement”). You will be
                registered for the subscription once you agree to the Terms. Moneytre acceptance of you, is dependent on
                your assent of all the Terms. The website “monetytre.in” is accessible to all but the certain contents are
                made available to registered users only. If the terms laid down are flouted at any time, Moneytre reserves
                the right to revoke the registration.</p>
              <p>
                • If for any reason you do not agree with our terms of use, then do not access the website “Moneytre.in”.
                Any use of the website will construe that the terms of use have been accepted.
              </p>
              <p>
                • You agree that the Online Contents, Trading lessons, Videos, E Books and Articles are the prime property
                of Moneytre. You agree not to copy, sell, display, publish, transfer, distribute and commercially exploit
                the contents of the website “Moneytre.in”.
              </p>
              <p>
                • Moneytre reserve the right to modify, reschedule or discontinue any of its offered programmes without
                any notice. Moneytre is neither obligated nor liable to any one for discontinuance of its programmes. You
                agree to indemnify Prime Analytics and its associates from any and all claims, liabilities, losses and
                damages accrued on account of your actions.
              </p>
              <p>
                • At the time of registration with Moneytre, payment in full is expected. It is the sole responsibility of
                the participant to check for accuracy, suitability and relevance of the selected course. No refund will be
                made once the payment has been made. Also the registration is non-transferable.
              </p>

            </div>
          </div>

        </div>
      </div>
  <Footer />
    </div>



  )
}

export default TermsofUse