import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Introduction from './Components/Main/Introduction';
import AboutMe from './Components/Main/AboutMe';
import { Fade } from 'react-reveal';

function App() {
  return (
    <BrowserRouter>
    
    <Header />
    <Fade bottom>
    <Introduction />
    </Fade>
    <Fade bottom>
    <AboutMe />
    </Fade>
    
    <Routes>
    </Routes>

    </BrowserRouter>
  );
}

export default App;