import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Jogos from '../pages/Jogos';

import NotFound from '../pages/NotFound';

import Header from '../pages/Home/components/Header';
import Footer from '../pages/Home/components/Footer'

const RouteList = () => (
  <BrowserRouter>
    <nav>
      <Header/>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jogos" element={<Jogos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <div>
      <Footer/>
    </div>

  </BrowserRouter>
);

export default RouteList;
