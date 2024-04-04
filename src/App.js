import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import AboutUs from './Pages/AboutUs';
import Archieves from './Pages/Archieves';
import ContactUs from './Pages/ContactUs';
import Faqs from './Pages/Faqs';
import Knowledge from './Pages/Knowledge';
import Login from './Pages/Login';
import OnboardAdvisory from './Pages/OnboardAdvisory';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Products from './Pages/Products';
import Register from './Pages/Register';
import TermsofUse from './Pages/TermsofUse';
import WallAppreciation from './Pages/WallAppreciation';
import WhyUs from './Pages/WhyUs';
import Feedback from './Pages/Feedback';
import KnowHetal from './Pages/KnowHetal';
import Disclaimer from './Pages/Disclaimer';
import Blogs from './Pages/Blogs';
import ContactUsSection from './Component/ContactUsSection';
import BlogDetails from './Pages/BlogDetails';
import ForgotPassword from './Pages/ForgotPassword';
import Profile from './Pages/Profile';




function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/archieves" element={<Archieves />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/knowhetal" element={<KnowHetal />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/product" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/termsofuse" element={<TermsofUse />} />
        <Route path="/wallofappreciation" element={<WallAppreciation />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/onboardadvisory" element={<OnboardAdvisory />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contactussection" element={<ContactUsSection />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
