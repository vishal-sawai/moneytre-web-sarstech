import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Topbar from '../Component/Topbar';
import Header from '../Component/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import * as yup from 'yup';

// Server Url
const serverUrl = process.env.REACT_APP_SERVER_URL;

// Define validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase char')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase char')
    .required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
});

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''

  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data
      await schema.validate(values);

      // API Call
      const formData = { name: values.name, email: values.email, password: values.password };
      axios.post(`${serverUrl}/useronboarding/register`, formData)
        .then((response) => {
          if (response.status === 201) {
            toast.success("Account Created Successfully!");
            // Redirect to Login after 2 seconds
            setTimeout(() => {
              navigate('/login');
            }, 2000);
          }
        })
        .catch((error) => {
          if (error.response.status === 409) {
            toast.error("Email already exists, Please try with another email.");
          }
          if (error.response.status === 500) {
            toast.error("Something went wrong. Please try again later.");
          }
          if (error.response.status === 400) {
            toast.error("All data are required");
          }
        });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        // Update errors state with validation error
        setErrors({ ...errors, [error.path]: error.message });
      }
    }

  }
  const handleInput = async (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    // Re-validate the input
    try {
      await yup.reach(schema, name).validate(value);
      // If validation was successful, remove the error message
      setErrors({ ...errors, [name]: undefined });
    } catch (error) {
      // If validation failed, do nothing
    }
  };

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

                <Toaster />

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

                      <div className="col-12">
                        <label for="yourPassword" className="form-label">Confirm Password</label>
                        <input type="password" name="confirmPassword" className="form-control" id="yourPassword" onChange={handleInput} required />
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