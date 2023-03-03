import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/formHeader';
import icon from '../../assets/icon-arrow-left.svg';

const GoBackBtn = () => {
  const { displayForm } = useAppContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn-back"
        onClick={() => displayForm(false)}
      >
        <img src={icon} alt="left arrow icon" />
        Go back
      </button>

      <h3 className="title">New Invoice</h3>
    </Wrapper>
  );
};

export default GoBackBtn;
