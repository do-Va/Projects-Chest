import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/goBackBtn';
import icon from '../../assets/icon-arrow-left.svg';

const GoBackBtn = ({ form }) => {
  const { displayForm } = useAppContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (form) {
      displayForm(false);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <button type="button" className="btn-back" onClick={handleClick}>
        <img src={icon} alt="left arrow icon" />
        Go back
      </button>
    </Wrapper>
  );
};

export default GoBackBtn;
