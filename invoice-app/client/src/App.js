import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppContext } from './context/appContext';
import { SignPage, ErrorPage, ProtectedRoute } from './pages';
import { SharedLayout, Invoice, InvoiceDetail } from './pages/dashboard';
import { AddInvoice, AlertBox } from './components';

function App() {
  const { showAlert, showForm, showError } = useAppContext();

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
          <Route
            path=":id"
            element={showError ? <ErrorPage /> : <InvoiceDetail />}
          />
        </Route>
        <Route path="/sign" element={<SignPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
