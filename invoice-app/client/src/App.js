import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import { SignPage, ErrorPage } from './pages';
import AlertBox from './components/common/AlertBox';
import { useAppContext } from './context/appContext';

function App() {
  const { showAlert } = useAppContext();

  return (
    <BrowserRouter>
      <Navbar />
      {showAlert && <AlertBox />}

      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
