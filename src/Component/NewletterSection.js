import React from 'react';

function NewletterSection() {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow">
                <div className="card-body mt-2">
                  <h4 className="card-title">Join Our Newsletter</h4>
                  <p className="card-text">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action="" method="post">
                  <input type="email" name="email" placeholder='Enter Email'></input>
                  <input type="submit" value="Subscribe"></input>
                </form>
                <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewletterSection;
