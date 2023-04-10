import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Compare from './Compare';
import Timeline from './Timeline';
import Navbar from './Components/navbar.js';
import Footer from './Components/footer.js';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Compare' element={<Compare />} />
        <Route path='Timeline' element={<Timeline />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
