import {  BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';



function App() {
  return (
    <div className='w-full h-full font-inter bg-custom'>
   
  <Router>
    <Header/>
       
        <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
      
  
      </Router> 
     
     

      </div>
  
  );
}
export default App;
