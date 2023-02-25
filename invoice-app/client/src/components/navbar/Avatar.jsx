import Wrapper from './styles/avatar';
import avatar from '../../assets/image-avatar.jpg';
import { useAppContext } from '../../context/appContext';

const Avatar = () => {
  const { user } = useAppContext();

  return (
    <Wrapper>
      <div className="circle">{user?.name[0]}</div>
    </Wrapper>
  );
};

export default Avatar;
