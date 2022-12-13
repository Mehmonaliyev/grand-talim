import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './components/Navbar';
import Kurslar from './components/Kurslar';
import BoshSahifa from './components/BoshSahifa';
import BizHaqimizda from './components/BizHaqimizda';
import Oqituvchilar from './components/Oqituvchilar';

function App() {
  return (
    <>
      <Navbar />
      <BoshSahifa />
      <BizHaqimizda />
      <Kurslar />
      <Oqituvchilar/>


    </>
  );
}

export default App;
