import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignPage, ErrorPage, ProtectedRoute } from './pages';
import { SharedLayout, Invoice } from './pages/dashboard';
import AlertBox from './components/common/AlertBox';
import { useAppContext } from './context/appContext';

function App() {
  const { showAlert } = useAppContext();

  return (
    <BrowserRouter>
      {showAlert && <AlertBox />}

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Invoice />} />
        </Route>
        <Route path="/sign" element={<SignPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
