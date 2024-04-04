import React from 'react'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import { Link } from 'react-router-dom'
import KnowHetalSection from '../Component/KnowHetalSection'
import Footer from '../Component/Footer'

function KnowHetal() {
  return (
    <div className='main'>
      <Topbar />
      <Header />
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
          <ol>
            <li> <Link to={'/'}><a>Home</a></Link>  </li>
          </ol>
        </div>
      </div>
      <KnowHetalSection />
      <Footer />
    </div>
  )
}

export default KnowHetal