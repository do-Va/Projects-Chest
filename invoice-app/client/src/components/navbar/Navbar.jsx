import { Logo, Avatar } from '.';
import { useAppContext } from '../../context/appContext';

import Wrapper from './styles/navbar';

const Navbar = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <Logo />
      {user && <Avatar />}
    </Wrapper>
  );
};

export default Navbar;
