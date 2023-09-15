import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  Route, 
  Routes
  } from 'react-router-dom';
  import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
