import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <SocialMedia/>
    </div>
  );
}

export default App;
