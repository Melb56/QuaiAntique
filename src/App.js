import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import Galerie from './pages/Galerie';
import Reservation from './pages/Reservation';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/galerie" element={ <Galerie /> } />
      <Route path="/menu" element={ <MenuPage /> } />
      <Route path="/reservation" element={ <Reservation /> } />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
