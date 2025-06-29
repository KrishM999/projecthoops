import './App.css';
import { BrowserRouter as Router, Routes, Route, generatePath } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUpForm from './SignUpForm';
import Header from './Header';
import SponsorUs from './SponsorUs';

function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <main style={{ paddingTop: "100px", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/sponsor-us" element={<SponsorUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
