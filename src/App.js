import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Moreprojects from './components/Moreprojects';


function App() {
  return (
    <div className='w-full h-full font-inter bg-custom'>
    
  <Router>
  
    <Header/>
    <Routes>
   <Route path='/moreprojects' element={<Moreprojects/>}/>
   </Routes>
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
