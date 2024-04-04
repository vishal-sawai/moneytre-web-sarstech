/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom';
import Topbar from '../Component/Topbar';
import Header from '../Component/Header';
import { useState } from 'react';
import Validation from '../Component/LoginValidation';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';



const clientId = "379584754029-ulud7jcf7ekdmreablefi60kuq2cc7ih.apps.googleusercontent.com";


function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setErrors(Validation(values));
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const navigate = useNavigate();

  // Google Login
  const onSuccess = (res) => {
    console.log('Login Success! currentUser:', res.profileObj);
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('profileObj', JSON.stringify(res.profileObj));

    // Redirect to Dashboard
    navigate('/');
  }

  const onFailure = (res) => {
    console.log('Login Failed:', res);
  }


  return (
    <div className='main' >
      <Topbar />
      <Header />

      <div className="container">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-top py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src="assets/img/logo.png" alt="" />
                    <h3><span>MONEYTRE</span></h3>
                  </a>
                </div>

                <div className="card mb-3">

                  <div className="card-body">

                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    <form className="row g-3 needs-validation" action='' onSubmit={handleSubmit}>

                      <div className="col-12">
                        <label for="yourEmail" className="form-label">Your Email</label>
                        <input type="email" name="email" className="form-control" id="yourEmail" onChange={handleInput} required />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                      </div>

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleInput} required />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                      <div className="forgotpassword" >
                        <span><a className="link signup-link"><NavLink to="/forgotpassword" activeClassName="active">Forgot Password?</NavLink></a></span>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Login</button>
                      </div>
                      <div className="col-12">

                        <p className="small mb-0">Don't have account?<a><NavLink to="/register" activeClassName="active"> Create an account</NavLink></a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <span className="text-center fw-bold text-danger" style={{ fontSize: "20px" }}>OR</span>
              <div className='flex'>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                  className='googleBtn my-2 mx-auto d-flex align-items-center justify-content-center'
                />
              </div>

              <div className="credits">
                By Log in, you agree to our <a><NavLink to="/privacypolicy" activeClassName="active">Privacy Policy,</NavLink></a><a><NavLink to="/termsofuse" activeClassName="active">  Terms of Use  </NavLink></a><a>and</a><a><NavLink to="/disclaimer" activeClassName="active">  Disclaimer</NavLink></a>
              </div>
              <div>



              </div>
            </div>
          </div>
        </section>
      </div>

      <footer id="footer">
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>MoneyTre</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Login