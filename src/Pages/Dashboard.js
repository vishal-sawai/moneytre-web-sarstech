import React from 'react'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Hero from '../Component/Hero'
import Counter from '../Component/Counter'
import KnowHetalSection from '../Component/KnowHetalSection'
import FAQs from '../Component/FAQs'
import ContactUsSection from '../Component/ContactUsSection'
import Footer from '../Component/Footer'
import AboutUsSection from '../Component/AboutUsSection'
import NewletterSection from '../Component/NewletterSection'
import Services from '../Component/Services'



function Dashboard() {
    return (
        <div className="main">
            <Topbar />
            <Header />
            <Hero />
            <br></br>
            <AboutUsSection />
            <Counter />
            <KnowHetalSection />
            <Services />
            <FAQs />
            <ContactUsSection />
            <NewletterSection />
            <Footer />


        </div>
    )
}

export default Dashboard