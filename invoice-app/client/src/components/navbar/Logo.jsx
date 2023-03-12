import { useNavigate } from 'react-router-dom';

import Wrapper from './styles/logo';
import logo from '../../assets/logo.svg';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/')}>
      <img src={logo} alt="" />
    </Wrapper>
  );
};

export default Logo;
