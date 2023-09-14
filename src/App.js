
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  Route, 
  Routes
  } from 'react-router-dom';
  import Hero from './components/Hero';
import Reservations from './pages/Reservations';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
