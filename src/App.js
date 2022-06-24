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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="productos" element={<ProductosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="Ablandadores" element={<AblandadoresPage />} />
          <Route path="Bombas" element={<BombasPage />} />
          <Route path="jardineria" element={<JardineriaPage />} />
          <Route path="Pileta" element={<PiletaPage />} />
        </Routes>      
      </BrowserRouter>

       <Footer/>
    </div>
  );
}

export default App;
