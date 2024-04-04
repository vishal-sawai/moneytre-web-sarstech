import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function OnboardAdvisory() {
  return (
    <div className="main">

      <Topbar />
      <Header />
      <main id="main" data-aos="fade-in">
        <div class="breadcrumbs">
          <div class="container">
            <ol>
              <li> <Link to={'/'}><a>Home</a></Link>  </li>

            </ol>

          </div>
        </div>
        <section id="trainers" class="trainers">
          <div class="container" >
            <div class="section-title">
              <h2>Onboard Advisory</h2>
            </div>
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team/ranjitvichare.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Ranjit Vichare</h4>
                    <span>Web Development</span>
                    <p>
                      Ranjit Eknath Vichare has been successfully and consistently delivering views and recommendations that have resulted in win win situation across different categories of investors and traders. He has written in depth and all-encompassing reports on different asset class, for well-known research houses and brokerage firms.
                    </p>
                    <p>
                      He has over 38 years of exposure to the Capital Markets, beginning 1986. His specialization cuts across multiple facets of Capital Markets. He brings together diverse skills sets, which include Technical Analysis, Fund Management, Mind Programming, Market Strategy and Planning, Institutional Framework, Product and Service Structuring and Applied Capital Market Education.
                    </p>

                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team/indrajit2.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Indrazith Shantharaj is a Trader, Investor, a Best Selling Author, and award-winning entrepreneur based in Bangalore, India.
                    </p>
                    <p>
                      He is a former IT professional with 10 Yrs experience. He has voluntarily opted to pursue a full-time career in stock markets, which is his subject of passion and expertise.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src="assets/img/team//team-2.jpg" class="img-fluid" alt="" />
                  <div class="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum
                      temporibus
                    </p>

                  </div>
                </div>
              </div>



            </div>

          </div>
        </section>








      </main>
      <Footer />
    </div>
  )
}

export default OnboardAdvisory