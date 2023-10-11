import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';


function App() {


  return (
    <Router >
      
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/certifications" element={<Certifications/>}/>
        <Route path="/contactme" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
