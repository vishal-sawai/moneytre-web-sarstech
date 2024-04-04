import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import AboutUsSection from '../Component/AboutUsSection'

function AboutUs() {
  return (
    <div className="main">
<Topbar/>
<Header/>
<div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
            <ol>  
                <li> <Link to={'/'}><a>Home</a></Link>  </li>
            </ol>   
        </div>
        </div>
<AboutUsSection/>
<Footer/>

 </div>
  )
}

export default AboutUs