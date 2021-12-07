import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Jogos from '../pages/Jogos';
import JogoDetalhe from '../pages/JogoDetalhe';

import NotFound from '../pages/NotFound';

import Header from '../components/Header';
import Footer from '../components/Footer'
import Consoles from '../pages/Consoles';
import Sobre from '../pages/Sobre'

const RouteList = () => (
  <BrowserRouter>
    <nav>
      <Header/>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogos" element={<Jogos />} />
      <Route path="/jogo-detalhe" element={<JogoDetalhe />} />
      <Route path="/consoles" element={<Consoles />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <div>
      <Footer/>
    </div>

  </BrowserRouter>
);

export default RouteList;
