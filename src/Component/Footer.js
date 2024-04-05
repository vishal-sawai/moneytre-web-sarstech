import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function scrollToTop() {
  window.scrollTo({
    left: 0,
    // top: document.body.scrollHeight,
    top: 0,
    behavior: "smooth"

  });
}

function Footer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=''>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
            <div className="col-lg-2 col-md-6 footer-contact">
                <h3><span>Moneytre</span></h3>
                <p>
              201, Vilux Redefine,<br/>
              Deccan Gymkhana, <br/>
              Pune 411004. <br/><br/>
              <strong>Phone:</strong> +91 74109 12161<br/>
              <strong>Email:</strong> hkot3@yahoo.com<br/>
            </p>
              </div>
              <div className="col-lg-2 col-md-4 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/termsofuse" activeClassName="active" onClick={scrollToTop}>Terms of Use</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/privacypolicy" activeClassName="active" onClick={scrollToTop}>Privacy Policy</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/disclaimer" activeClassName="active" onClick={scrollToTop}>Disclaimer</NavLink></li>

                </ul>
              </div>
              <div className="col-lg-2 col-md-4 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/faqs" activeClassName="active" onClick={scrollToTop}>FAQ's</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/knowledge" activeClassName="active" onClick={scrollToTop}>Knowledge</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/blogs" activeClassName="active" onClick={scrollToTop}>Blogs</NavLink></li>


                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/archieves" activeClassName="active" onClick={scrollToTop}>Archives</NavLink></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 footer-links">
                <h4>Contact & Help</h4>
                <ul>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/contactus" activeClassName="active" onClick={scrollToTop}>Contact Us</NavLink></li>
                <li><i className="bx bx-chevron-right"></i> <NavLink to="/feedback" activeClassName="active" onClick={scrollToTop}>Feedback</NavLink></li>
                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/onboardadvisory" activeClassName="active" onClick={scrollToTop}>Onboard Advisors</NavLink></li>

                  <li><i className="bx bx-chevron-right"></i> <NavLink to="/wallofappreciation" activeClassName="active" onClick={scrollToTop}>Wall of Appreciation</NavLink></li>

                </ul>
              </div>
            
              <div className="col-lg-4 col-md-4 footer-links">
                <h4>Our Social Networks</h4>
                <p> please follow on our websites</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>MoneyTre</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>


      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>

  );
}

export default Footer;