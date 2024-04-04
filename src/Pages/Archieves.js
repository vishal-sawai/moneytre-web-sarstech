import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Footer from '../Component/Footer'


function Archieves() {
  return (
      <div className='main'>
        <Topbar/>
        <Header/>
        <main id="main" data-aos="fade-in">
      <div class="breadcrumbs">
        <div class="container">
          <ol>
          <li> <Link to={'/'}><a>Home</a></Link>  </li>
        
          </ol>
       
        </div>
      </div>

<br></br>

      <div class="container">
        <div class="section-title">
          <h2> Archives</h2>
        
        </div>
      </div>





  </main>
  <Footer/>
      </div>
  )
}

export default Archieves