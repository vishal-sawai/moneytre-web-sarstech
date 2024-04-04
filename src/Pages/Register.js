import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Topbar from '../Component/Topbar';
import Header from '../Component/Header';
import SignupValidation from '../Component/SignupValidation';

function Register() {

  
  const [values, setValues] = useState({  
    name:'',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setErrors(SignupValidation(values));
  }
const handleInput = (e) => {  
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }
  return (
    <div className='main'>
      <Topbar />
      <Header />

      <div className="container">

        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
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
                      <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p className="text-center small">Enter your personal details to create account</p>
                    </div>

                    <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label for="yourName" className="form-label">Your Name</label>
                        <input type="text" name="name" className="form-control" id="yourName" onChange={handleInput} required />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                        <div className="invalid-feedback">Please, enter your name!</div>
                      </div>

                      <div className="col-12">
                        <label for="yourEmail" className="form-label">Your Email</label>
                        <input type="email" name="email" className="form-control" id="yourEmail"  onChange={handleInput}required />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                      </div>
                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleInput} required />
                        {errors.password && <p className="text-danger">{errors.password}</p>}
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                    
                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Confirm Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleInput}required />
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
                        <div className="invalid-feedback">Please enter your confirm password!</div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">Create Account</button>
                      </div>
                      <div className="col-12">

                        <p className="small mb-0">Already have an account?<a><NavLink to="/login" activeClassName="active"> Log in </NavLink></a></p>
                      </div>
                    </form>

                  </div>
                </div>


                <div className="credits">

                  By create an account , you agree to our <a><NavLink to="/privacypolicy" activeClassName="active">Privacy Policy,</NavLink></a><a><NavLink to="/termsofuse" activeClassName="active">  Terms of Use </NavLink></a><a>and </a><a><NavLink to="/disclaimer" activeClassName="active">  Disclaimer</NavLink></a>
                </div>

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

export default Register