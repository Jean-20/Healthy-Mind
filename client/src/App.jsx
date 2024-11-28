import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Sedes from './pages/Sedes';
import Question from './pages/Question';
import Header from './pages/Header';
import Footer from './pages/Footer';
import './index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirección desde la raíz hacia la página principal */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Rutas que incluyen Header y Footer */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/preguntasFrecuentes" element={<Question />} />
        </Route>

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Componente Layout que incluye Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

// Componente para manejar páginas no encontradas
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;
