import React from 'react'
import Header from '../Component/Header'
import Topbar from '../Component/Topbar'
import Footer from '../Component/Footer'

function Knowledge() {
  return (
   <div className='main'>
    <Topbar />
    <Header />
    <main id="main">
      
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">

          <ol>
          <li><a href="index.html">Home</a></li>
          </ol>
          
  
        </div>
      </div>
    <br></br> 
      <div class="container" data-aos="fade-in">
      <div class="section-title">
        <h2> Knowledge</h2>
      
      </div>
    </div>
      </main>
      <Footer/>
   </div>
    )
}

export default Knowledge