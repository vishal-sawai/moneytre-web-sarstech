/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Topbar from '../Component/Topbar';
import Header from '../Component/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { GoogleLogin } from 'react-google-login';
import * as yup from 'yup';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// server Url
const serverUrl = process.env.REACT_APP_SERVER_URL;

// Define validation schema
const schema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});



function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data
      await schema.validate(values);

      // API Call
      const formData = { email: values.email, password: values.password };
      axios.post(`${serverUrl}/useronboarding/login`, formData)
        .then((response) => {
          toast.success("Login Successful!");

          const token = response.data.accessToken;

          // Save the token in local storage
          localStorage.setItem('accessToken', token);

          // Redirect to Dashboard after 2 seconds
          setTimeout(() => {
            navigate('/');
          }, 2000);

        }).catch((error) => {
          if (error.response.status === 401) {
            toast.error("Invalid Email or Password. Please try again.");
          }
          if (error.response.status === 500) {
            toast.error("Something went wrong. Please try again later.");
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

  // Google Login
  const onSuccess = async (res) => {
    try {
      const formData = { email: res.profileObj.email, name: res.profileObj.name, googleId: res.profileObj.googleId, imageUrl: res.profileObj.imageUrl };
      const response = await axios.post(`${serverUrl}/useronboarding/googleLogin`, formData);
      if (response.status === 201) {
        toast.success("Login Successful!");

        const token = response.data.accessToken;

        // Save the token in local storage
        localStorage.setItem('accessToken', token);

        // Redirect to Dashboard after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }

    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };
  const onFailure = (res) => {
    toast.error("Login Failed! Please try again.");
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

                <Toaster />

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
              <div className='flex googleBtn'>
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