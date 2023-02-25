import { Navigate } from 'react-router-dom';

import { useAppContext } from '../context/appContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();

  if (!user) {
    return <Navigate to="/sign" />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
