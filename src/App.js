import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './components/Navbar';
import Kurslar from './components/Kurslar';
import BoshSahifa from './components/BoshSahifa';
import BizHaqimizda from './components/BizHaqimizda';
import Oqituvchilar from './components/Oqituvchilar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BoshSahifa />
      <BizHaqimizda />
      <Kurslar />
      <Oqituvchilar />
      <Footer />

    </>
  );
}

export default App;
