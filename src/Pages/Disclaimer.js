import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Disclaimer() {
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
        <br></br>
        <div class="container" data-aos="fade-down">
          <div class="section-title">
            <h2>General Disclaimer</h2>
          </div>
          <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-md-10 mt-5 mt-lg-0 d-flex align-items-stretch">
              <div class="container">
                <p>Information provided to you is protected by copyright and other intellectual property
                  rights or similar rights, which unless indicated otherwise, are the property of
                  Moneytre. No information made available to you can be reproduced, distributed or
                  published in whole or in part by any recipient, user or visitor for any purpose, without
                  the prior express written consent of Moneytre.</p>
                <p>
                  For the purpose of this advisory, the term information, whether past or present,
                  includes all and any views, opinions, recommendations, analysis, reports,
                  suggestions and informative content (collectively hereinafter referred to as
                  &quot;Information&quot;) published by Moneytre from time to time. All Information provided by
                  Moneytre is believed to be up-to-date at the time it is posted and any content, form,
                  structure, service offerings as also the location and jurisdiction of this advisory, is
                  subject to variation without any notice.
                </p>
                <p>
                  No Information or service from Moneytre shall be relied upon as constituting
                  personal investment advice. Information provided by Moneytre is for the use of the
                  intended person only and it is not to be relied upon as authoritative or taken in
                  substitution for the exercise of judgment by any recipient. Any recommendation,
                  opinion or price targets discussed in this information may not be achieved due to
                  multiple risk factors including without limitation the market volatility, sector volatility,
                  corporate actions, macro or micro economic factors, the unavailability of complete
                  and accurate information. Moneytre, its Directors, officers, employees and
                  consultants accept no liability whatsoever for any direct or consequential loss or
                  damage arising from any use of Information in any form or manner, contained in
                  information.
                </p>
                <p>
                  While all reasonable care has been taken to ensure that Information published by
                  Moneytre is not untrue or misleading at the time of its publication, neither Moneytre
                  nor its officers or employees makes any representation or warranty as to the
                  accuracy or completeness of such Information. No liability is accepted for any loss
                  whether direct or indirect, incidental or consequential, arising out of any of the
                  research materials not being true and accurate.
                </p>
                <p>
                  Information from Moneytre is available for access to only those person (hereinafter
                  referred to as &quot;Authorized Persons&quot;) who agree to comply with all registration, terms
                  of use, subscription terms and other terms introduced by Moneytre from time to time
                  in order to comply with local laws or other regulatory requirements. Authorized
                  Persons are those who are Resident Indians as defined under appropriate laws and
                  not being less than 18 years of age as on date of access. It is the responsibility of
                  persons to ensure there will be no breach of any laws or regulatory requirements by
                  reason of their choosing to visit or access and/or download information from
                  Moneytre.
                </p>
                <p>The information provided by Moneytre is hosted in India and is subject to the
                  exclusive jurisdiction of Indian laws.  All visits to our information, including access,
                  downloading or usage of any and all information shall be subject to and governed in
                  accordance with Indian laws exclusively and visitors or users or recipient of any
                  information agree to be bound by the same.</p>
                <p>Moneytre and any of its officers or employees may have a position or otherwise be
                  interested in any transactions in investments based on the recommendations.</p>

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

export default Disclaimer