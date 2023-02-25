import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Wrapper from './styles/sharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
