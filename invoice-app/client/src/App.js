import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppContext } from './context/appContext';
import { SignPage, ErrorPage, ProtectedRoute } from './pages';
import { SharedLayout, Invoice } from './pages/dashboard';
import AddInvoice from './components/form/AddInvoice';
import AlertBox from './components/common/AlertBox';

function App() {
  const { showAlert, showForm } = useAppContext();

  return (
    <BrowserRouter>
      {showAlert && <AlertBox />}
      {showForm && <AddInvoice />}

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
