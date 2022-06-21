import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import InicioPage from './pages/InicioPage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import ContactoPage from './pages/ContactoPage';
import AblandadoresPage from './pages/AblandadoresPage';
import BombasPage from './pages/BombasPage';
import JardineriaPage from './pages/JardineriaPage';
import PiletaPage from './pages/PiletaPage';
import RiegoPage from './pages/RiegoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route Path="/" element={<InicioPage />} />
          <Route Path="nosotros" element={<NosotrosPage />} />
          <Route Path="productos" element={<ProductosPage />} />
          <Route Path="contacto" element={<ContactoPage />} />
          <Route Path="Ablandadores" element={<AblandadoresPage />} />
          <Route Path="Bombas" element={<BombasPage />} />
          <Route Path="Jardineria" element={<JardineriaPage />} />
          <Route Path="Pileta" element={<PiletaPage />} />
          <Route Path="Riego" element={<RiegoPage />} />
        </Routes>      
      </BrowserRouter>

       <Footer/>
    </div>
  );
}

export default App;
