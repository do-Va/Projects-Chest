import Wrapper from './styles/avatar';
import avatar from '../../assets/image-avatar.jpg';

const Avatar = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="" />
    </Wrapper>
  );
};

export default Avatar;
