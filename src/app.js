import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Counterapp from './counterapp';        
import RandomNumber from './randomnumber';   

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counterapp />} />
        <Route path="/rng" element={<RandomNumber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;