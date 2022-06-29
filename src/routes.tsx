import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
