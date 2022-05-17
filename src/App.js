import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome';
import Header from './Components/Header/Header';
import Introduction from './Components/Main/Introduction';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Introduction />
    <Routes>
    
    
    
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
