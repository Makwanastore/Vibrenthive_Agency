import './index.css';
import { Import } from 'lucide-react';  
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Pricing from './components/Pricing';


function App() {
  return (
    <div className="font-sans text-gray-800">

      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
