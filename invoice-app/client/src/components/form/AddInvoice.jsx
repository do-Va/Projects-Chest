import { useEffect } from 'react';

import Wrapper from './styles/addInvoice';
import { ClientSide, FormFooter, FormHeader, ItemContainer, UserSide } from '.';
import { useAppContext } from '../../context/appContext';
import randomName from './helpers/addInvoice.functions';

const AddInvoice = () => {
  const { handleChange } = useAppContext();

  useEffect(() => {
    handleChange({ name: 'name', value: randomName() });
  }, []);

  return (
    <Wrapper>
      <div className="form-container">
        <FormHeader />
        <UserSide />
        <ClientSide />
        <ItemContainer />
        <FormFooter />
      </div>
    </Wrapper>
  );
};

export default AddInvoice;
