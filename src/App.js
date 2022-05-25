import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Introduction from './Components/Main/Introduction';
import AboutMe from './Components/Main/AboutMe';
import { Fade } from 'react-reveal';
import Skills from './Components/Main/Skills';
import Projects from './Components/Main/Projects';
import Contact from './Components/Main/Contact';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter>
    
    
    
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/main' element={<div>
       <Header />
       <Fade bottom>
       <Introduction />
       </Fade>
       <Fade bottom>
       <AboutMe />
       </Fade>
       <Skills />
      <Projects />
      <Contact />
      </div>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
