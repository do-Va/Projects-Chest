import Wrapper from './styles/formHeader';
import { GoBackBtn } from '../common';

const FormHeader = () => {
  return (
    <Wrapper>
      <GoBackBtn form="true" />

      <h3 className="title">New Invoice</h3>
    </Wrapper>
  );
};

export default FormHeader;
