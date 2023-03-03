import Wrapper from './styles/newButton';
import img from '../../assets/icon-plus.svg';
import { useAppContext } from '../../context/appContext';

const NewButton = ({ graterThanTablet }) => {
  const { displayForm } = useAppContext();

  return (
    <Wrapper type="button" onClick={() => displayForm(true)}>
      <div className="icon-container grid-center">
        <img src={img} alt="plus icon" />
      </div>

      <p className="text">{graterThanTablet ? 'New Invoice' : 'New'}</p>
    </Wrapper>
  );
};

export default NewButton;
