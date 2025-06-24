import './App.css';
import { BrowserRouter as Router, Routes, Route, generatePath } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUpForm from './SignUpForm';
import Header from './Header';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
