import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import SignPage from './pages/Sign';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
