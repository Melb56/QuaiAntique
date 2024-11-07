import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Galerie from './components/Galerie';
import Reservation from './components/Reservation';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/galerie" element={ <Galerie /> } />
      <Route path="/menu" element={ <Menu /> } />
      <Route path="/reservation" element={ <Reservation /> } />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
