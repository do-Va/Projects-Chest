import Wrapper from './styles/formHeader';
import { GoBackBtn } from '../common';
import { useAppContext } from '../../context/appContext';

const FormHeader = () => {
  const { isEditing, name } = useAppContext();

  const checkEdit = () => {
    if (isEditing) {
      return (
        <h3 className="title">
          Edit <span>#</span>
          {name}
        </h3>
      );
    } else {
      return <h3 className="title">New Invoice</h3>;
    }
  };

  return (
    <Wrapper>
      <GoBackBtn form="true" />

      {checkEdit()}
    </Wrapper>
  );
};

export default FormHeader;
