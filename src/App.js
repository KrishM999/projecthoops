import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUpForm from './SignUpForm';
import Header from './Header';
import Footer from './Footer';
import SponsorUs from './SponsorUs';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> 
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/sponsor-us" element={<SponsorUs />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;

